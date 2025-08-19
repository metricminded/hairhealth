import React, { useState } from "react";
import { Link } from "react-router-dom";

interface MembershipData {
  membership: string;
}

const Membership: React.FC = () => {
  //add remove
  const [inputFields, setInputFields] = useState<MembershipData[]>([{ membership: "" }]);

  const addInputField = () => {
    setInputFields([...inputFields, { membership: "" }]);
  };

  const removeInputFields = (index: number) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  const handleChanges = (index: number, evnt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name as keyof MembershipData] = value;
    setInputFields(list);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Memberships</h4>

          {inputFields.map((data, index) => {
            return (
              <div
                className="membership-info"
                key={index}
              >
                <div className="row form-row membership-cont">
                  <div className="col-12 col-md-10 col-lg-5">
                    <div className="form-group">
                      <label>Memberships</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="membership"
                        value={data.membership || ""}
                        onChange={(evnt) => handleChanges(index, evnt)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-2">
                    <div className="delete-icon">
                      <label className="d-md-block d-sm-none d-none">
                        &nbsp;
                      </label>
                      <Link
                        to="#"
                        className="btn btn-danger trash"
                        onClick={() => removeInputFields(index)}
                      >
                        <i className="isax isax-trash"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="add-more" onClick={addInputField}>
            <Link to="#" className="add-membership">
              <i className="fa fa-plus-circle"></i> Add More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
