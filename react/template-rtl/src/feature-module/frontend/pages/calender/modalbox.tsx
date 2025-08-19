 
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
 
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-bootstrap/Modal";

interface ModalboxProps {
  show: string;
  handleClose: () => void;
}

const Modalbox: React.FC<ModalboxProps> = (props) => {
  const [startDate, setDate] = useState(new Date());
  const [event_title, setevent_title] = useState("");
  const [category_color, setcategory_color] = useState("bg-primary");
  const [categoryName, setCategoryName] = useState("");
  const [addneweventobj, _setaddneweventobj] = useState<any>(null);
  const [calenderevent, _setcalenderevent] = useState<any>(null);

  // Define defaultEvents array
  const [defaultEvents, setDefaultEvents] = useState([
    {
      id: 1,
      title: "Event 1",
      className: "bg-primary",
      start: new Date(),
      end: new Date(),
      allDay: true,
    }
  ]);

  const handleChange = (date: Date | null) => {
    if (date) {
      setDate(date);
    }
  };

  const handleClose = () => {
    props.handleClose();
  };


  const addNewEvent = () => {
    const calendarApi = addneweventobj?.view?.calendar;
    if (calendarApi && event_title) {
      calendarApi.unselect(); // clear date selection
      calendarApi.addEvent({
        id: Date.now(), // Generate unique ID
        title: event_title,
        className: category_color,
        start: addneweventobj.startStr,
        end: addneweventobj.endStr,
        allDay: addneweventobj.allDay,
      });
    }
    setevent_title("");
    setcategory_color("bg-primary");
  };

  const removeEvent = () => {
    if (calenderevent) {
      calenderevent.remove();
    }
    setevent_title("");
  };


  const clickUpdateEvent = () => {
    const newArray = [...defaultEvents];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === parseInt(calenderevent.id)) {
        newArray[i].title = event_title;
      }
    }
    setDefaultEvents(newArray);
    setevent_title("");
  };

  const handleSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (event_title.trim()) {
      // Add event logic here
      console.log("Event submitted:", { title: event_title, date: startDate });
      setevent_title("");
      setDate(new Date());
    }
  };

  const handleSubmitCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (categoryName.trim() && category_color) {
      // Add category logic here
      console.log("Category submitted:", { name: categoryName, color: category_color });
      setCategoryName("");
      setcategory_color("bg-primary");
    }
  };

  const renderEventClick = () => {
    return (
      <form className="event-form" onSubmit={(e) => e.preventDefault()}>
        <label>Change event name</label>
        <div className="input-group">
          <input
            className="form-control form-white"
            placeholder="Enter name"
            type="text"
            value={event_title}
            onChange={(event) => setevent_title(event.target.value)}
          />
          <div className="submit-section text-center">
            <button
              type="button"
              className="btn btn-primary save-category submit-btn"
              onClick={clickUpdateEvent}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    );
  };

  const renderAddNewEvent = () => {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="control-label">Event Name</label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={event_title}
                onChange={(event) => setevent_title(event.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="control-label">Category</label>
              <select
                className="form-select form-control"
                name="category"
                value={category_color}
                onChange={(event) => setcategory_color(event.target.value)}
              >
                <option value="bg-danger">Danger</option>
                <option value="bg-success">Success</option>
                <option value="bg-purple">Purple</option>
                <option value="bg-primary">Primary</option>
                <option value="bg-pink">Pink</option>
                <option value="bg-info">Info</option>
                <option value="bg-inverse">Inverse</option>
                <option value="bg-orange">Orange</option>
                <option value="bg-brown">Brown</option>
                <option value="bg-teal">Teal</option>
                <option value="bg-warning">Warning</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    );
  };

  return (
    <>
      <Modal centered show={props.show === "showEvents"} onHide={handleClose}>
        <Modal.Header>
          <h5 className="modal-title">Add Event</h5>
          <button
            type="button"
            className="close"
            onClick={handleClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitEvent}>
            <div className="form-group">
              <label>
                Event Name <span className="text-danger">*</span>
              </label>
              <input 
                className="form-control" 
                type="text" 
                value={event_title}
                onChange={(e) => setevent_title(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>
                Event Date <span className="text-danger">*</span>
              </label>
              <div className="cal-icon">
                <DatePicker
                  selected={startDate}
                  onChange={handleChange}
                  className="form-control datetimepicker"
                />
              </div>
            </div>
            <div className="submit-section">
              <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      
      <Modal centered show={props.show === "showCategory"} onHide={handleClose}>
        <Modal.Header>
          <h4 className="modal-title">Add Category</h4>
          <button
            type="button"
            className="close"
            onClick={handleClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitCategory}>
            <div className="form-group">
              <label>Category Name</label>
              <input
                className="form-control form-white"
                placeholder="Enter name"
                type="text"
                name="category-name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-0">
              <label>Choose Category Color</label>
              <select
                className="form-select form-control form-white"
                data-placeholder="Choose a color..."
                name="category-color"
                value={category_color}
                onChange={(e) => setcategory_color(e.target.value)}
                required
              >
                <option value="bg-success">Success</option>
                <option value="bg-danger">Danger</option>
                <option value="bg-info">Info</option>
                <option value="bg-primary">Primary</option>
                <option value="bg-warning">Warning</option>
                <option value="bg-inverse">Inverse</option>
              </select>
            </div>
            <div className="submit-section text-center">
              <button
                type="submit"
                className="btn btn-primary save-category submit-btn"
              >
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      
      {/* Event Click Modal */}
      <Modal centered show={props.show === "iseditdelete"} onHide={handleClose}>
        <Modal.Header>Event</Modal.Header>
        <Modal.Body>{renderEventClick()}</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-danger submit-btn delete-event"
            onClick={removeEvent}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
      
      {/* New Event Modal */}
      <Modal centered show={props.show === "isnewevent"} onHide={handleClose}>
        <Modal.Header>Event</Modal.Header>
        <Modal.Body>{renderAddNewEvent()}</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-success submit-btn delete-event"
            onClick={addNewEvent}
          >
            Create event
          </button>
        </Modal.Footer>
      </Modal>
      
      {/* Create Event Modal */}
      <Modal show={props.show === "show"} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitEvent}>
            <div className="form-group">
              <label>
                Event Name <span className="text-danger">*</span>
              </label>
              <input 
                className="form-control" 
                type="text" 
                value={event_title}
                onChange={(e) => setevent_title(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>
                Event Date <span className="text-danger">*</span>
              </label>
              <DatePicker
                selected={startDate}
                onChange={handleChange}
                className="form-control datetimepicker w-100"
              />
            </div>
            <div className="submit-section">
              <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modalbox;
