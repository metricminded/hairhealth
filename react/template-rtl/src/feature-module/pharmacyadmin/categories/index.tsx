 
import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../paginationfunction";

import SidebarNav from "../sidebar";
import Header from "../header";
import { Edit, Trash2 } from "react-feather";

const PharmacyAdminCategories: React.FC = () => {

  const data = [
    {
      ID: "01",
      Name: "Phytopathology",
      Createddate: "01-May-2020-12:00",
    },
    {
      ID: "02",
      Name: "Family care",
      Createddate: "03-May-2020-08:00",
    },
    {
      ID: "03",
      Name: "Cancer",
      Createddate: "05-May-2020-06:00",
    },
    {
      ID: "04",
      Name: "Hair care",
      Createddate: "05-May-2020-01:00",
    },
    {
      ID: "05",
      Name: "Skin care",
      Createddate: "05-May-2020-02:00",
    },
    {
      ID: "06",
      Name: "Rare diseases",
      Createddate: "06-May-2020-06:00",
    },
    {
      ID: "07",
      Name: "Baby care",
      Createddate: "07-May-2020-12:00",
    },
    {
      ID: "08",
      Name: "Inflammations",
      Createddate: "07-May-2020-05:00",
    },
    {
      ID: "09",
      Name: "Sleep disorders",
      Createddate: "07-May-2020-08:00",
    },
    {
      ID: "10",
      Name: "Infectious diseases",
      Createddate: "08-May-2020-02:00",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "ID",
      render: (text: any) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a: any, b: any) => a.ID.length - b.ID.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      render: (text: any) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },

    {
      title: "Created date",
      dataIndex: "Createddate",
      render: (text: any) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a: any, b: any) => a.Createddate.length - b.Createddate.length,
    },

    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
          <Link
            to="#"
            className="me-1 btn btn-sm bg-success-light me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit_specialities_details"
          >
            <Edit size={16} /> Edit
          </Link>
          <Link
            to="#"
            className="me-1 btn btn-sm bg-danger-light"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            <Trash2 size={16} /> Delete
          </Link>
        </div>
      ),
      sorter: (a: any, b: any) => a.length - b.length,
    },
  ];

  return (
    <>
    <Header location={{ pathname: "dashboard" }} />
      <SidebarNav />
      <>
        {/* Page Wrapper*/}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-7 col-auto">
                  <h3 className="page-title">Categories</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/pharmacyadmin">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Categories</li>
                  </ul>
                </div>
                <div className="col-sm-5 col">
                  <Link
                    to="#Add_Specialities_details"
                    data-bs-toggle="modal"
                    className="btn btn-primary float-end mt-2"
                  >
                    Add
                  </Link>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      {/* <table className="datatable table table-hover table-center mb-0"> */}
                      <Table
                        pagination={{
                          total: data.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        dataSource={data}
                        rowKey={(record) => record.ID}
                        //  onChange={this.handleTableChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add Modal */}
            <div
              className="modal fade"
              id="Add_Specialities_details"
              aria-hidden="true"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Category</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row form-row">
                        <div className="col-12">
                          <div className="form-group">
                            <label>Category</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /ADD Modal */}
            {/* Edit Details Modal */}
            <div
              className="modal fade"
              id="edit_specialities_details"
              aria-hidden="true"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Category</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row form-row">
                        <div className="col-12">
                          <div className="form-group">
                            <label>Category</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Cardiology"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Edit Details Modal */}
            {/* Delete Modal */}
            <div
              className="modal fade"
              id="delete_modal"
              aria-hidden="true"
              role="dialog"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="form-content p-2">
                      <h4 className="modal-title">Delete</h4>
                      <p className="mb-4">Are you sure want to delete?</p>
                      <button type="button" className="btn btn-primary mx-1">
                        Save{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
        {/* /Main Wrapper */}
      </>
    </>
  );
};

export default PharmacyAdminCategories;
