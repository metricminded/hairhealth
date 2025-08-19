import React, { useState, useEffect } from "react";
// import Modalbox from "./modalbox";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { DateSelectArg, EventClickArg, EventApi } from "@fullcalendar/core";
import Header from "../../header";
import Footer from "../../footer";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../components/imageWithBasePath";

interface DefaultEvent {
  id?: number;
  title: string;
  start: number;
  end?: number;
  className: string;
}

const CalendarPage: React.FC = (props) => {
  const [_menu] = useState(false);
  const [_startDate] = useState(new Date());
  const [_showCategory] = useState(false);
  const [, setshowmodel] = useState<string | boolean>(false);
  const [_showEvents] = useState(false);
  const [_show] = useState(false);
  const [_iseditdelete, setiseditdelete] = useState(false);
  const [_addneweventobj, setaddneweventobj] = useState<DateSelectArg | null>(null);
  const [_isnewevent, setisnewevent] = useState(false);
  const [_event_title, setevent_title] = useState("");
  const [_calenderevent, setcalenderevent] = useState<EventApi | null>(null);
  const [_defaultEvents] = useState<DefaultEvent[]>([
    {
      title: "Event Name 4",
      start: Date.now() + 148000000,
      className: "bg-purple",
    },
    {
      title: "Test Event 1",
      start: Date.now(),
      end: Date.now(),
      className: "bg-success",
    },
    {
      title: "Test Event 2",
      start: Date.now() + 168000000,
      className: "bg-info",
    },
    {
      title: "Test Event 3",
      start: Date.now() + 338000000,
      className: "bg-primary",
    },
  ]);

  useEffect(() => {
    const elements = Array.from(document.getElementsByClassName("react-datepicker-wrapper"));
    elements.forEach((element) => element.classList.add("width-100"));
  }, []);

  const handleEventClick = (clickInfo: EventClickArg) => {
    setiseditdelete(false);
    setevent_title(clickInfo.event.title);
    setcalenderevent(clickInfo.event);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setisnewevent(true);
    setaddneweventobj(selectInfo);
  };


  return (
    <>
      <Header {...props} />
      <div className="page-wrapper">
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home-2">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Calendar
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Calendar</h2>
              </div>
              <div className="col-auto text-end float-end ms-auto">
                <Link
                  to="#"
                  onClick={() => setshowmodel("showEvents")}
                  className="btn btn-primary btn-sm"
                >
                  Create Event
                </Link>
              </div>
            </div>
          </div>
          <div className="breadcrumb-bg">
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-bg-01.png"
              alt="img"
              className="breadcrumb-bg-01"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-bg-02.png"
              alt="img"
              className="breadcrumb-bg-02"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-icon.png"
              alt="img"
              className="breadcrumb-bg-03"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-icon.png"
              alt="img"
              className="breadcrumb-bg-04"
            />
         </div>

        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Drag & Drop Event</h4>
                    </div>
                    <div className="card-body">
                      <div id="calendar-events" className="mb-3">
                        <div className="calendar-events">
                          <i className="fas fa-circle text-info"></i> My Event One
                        </div>
                        <div className="calendar-events">
                          <i className="fas fa-circle text-success"></i> My Event Two
                        </div>
                        <div className="calendar-events">
                          <i className="fas fa-circle text-danger"></i> My Event Three
                        </div>
                        <div className="calendar-events">
                          <i className="fas fa-circle text-warning"></i> My Event Four
                        </div>
                      </div>
                      <div className="checkbox mb-3">
                        <input id="drop-remove" type="checkbox" />
                        <label className="ms-1">Remove after drop</label>
                      </div>
                      <Link
                        to="#"
                        onClick={() => setshowmodel("showCategory")}
                        className="btn btn-primary w-100"
                      >
                        <i className="fas fa-plus"></i> Add Category
                      </Link>
                    </div>
                  </div>
                </StickyBox>
              </div>

              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <FullCalendar
                          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                          headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay",
                          }}
                          initialView="dayGridMonth"
                          editable={true}
                          selectable={true}
                          selectMirror={true}
                          dayMaxEvents={true}
                          select={handleDateSelect}
                          eventClick={handleEventClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <Modalbox show={showmodel} handleClose={handleClose} /> */}
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default CalendarPage;
