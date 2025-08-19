import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../paginationfunction";
import SidebarNav from "../sidebar";
import { product, product1, product2 } from "../imagepath";

import Header from "../header";
import { Edit, Trash2, PlusSquare } from "react-feather";

const PharmacyAdminPurchase: React.FC = () => {
  const data = [
    {
      PurchaseDate: "13-5-2020",
      image: product,
      MedicineName: "Abilify",
      MedicineCategory: "Aripiprazole",
      PurchasePrice: "$220",
      Quantity: "60",
      Supplier: "Bradley",
      ExpireDate: "13-06-20",
    },
    {
      PurchaseDate: "12-5-2020",
      image: product1,
      MedicineName: "Adderall",
      MedicineCategory: "Phytopathology‎",
      PurchasePrice: "$30",
      Quantity: "20",
      Supplier: "Douglas",
      ExpireDate: "13-06-20",
    },
    {
      PurchaseDate: "11-5-2020",
      image: product2,
      MedicineName: "Actamin",
      MedicineCategory: "Phytopathology‎",
      PurchasePrice: "$58",
      Quantity: "33",
      Supplier: "Douglas",
      ExpireDate: "20-06-20",
    },
    {
      PurchaseDate: "10-5-2020",
      image: product,
      MedicineName: "Abilify",
      MedicineCategory: "Aripiprazole",
      PurchasePrice: "$336",
      Quantity: "50",
      Supplier: "Bradley",
      ExpireDate: "13-06-20",
    },
    {
      PurchaseDate: "9-5-2020",
      image: product1,
      MedicineName: "Adderall",
      MedicineCategory: "Phytopathology‎",
      PurchasePrice: "$10",
      Quantity: "605",
      Supplier: "Douglas",
      ExpireDate: "13-06-20",
    },
    {
      PurchaseDate: "8-5-2020",
      image: product2,
      MedicineName: "Actamin",
      MedicineCategory: "Phytopathology‎",
      PurchasePrice: "$15",
      Quantity: "160",
      Supplier: "Douglas",
      ExpireDate: "20-06-20",
    },
  ];
  const columns = [
    {
      title: "Purchase Date",
      dataIndex: "PurchaseDate",
      render: (text: any) => (
        <>
          <td>
            <span>{text}</span>
          </td>
        </>
      ),
      sorter: (a: any, b: any) => a.PurchaseDate.length - b.PurchaseDate.length,
    },
    {
      title: "Medicine Name",
      dataIndex: "MedicineName",
      render: (text: any, record: any) => (
        <>
          <td>
            <img
              src={record.image}
              className="avatar-img"
              alt="product image"
              width={35}
              height={35}
            />
            <span className=" mx-1">{text}</span>
          </td>
        </>
      ),
      sorter: (a: any, b: any) => a.MedicineName.length - b.MedicineName.length,
    },
    {
      title: "Medicine Category",
      dataIndex: "MedicineCategory",
      render: (text: any) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a: any, b: any) => a.MedicineCategory.length - b.MedicineCategory.length,
    },

    {
      title: "PurchasePrice",
      dataIndex: "PurchasePrice",
      render: (text: any) => (
        <>
          <span> {text}</span>
        </>
      ),
      sorter: (a: any, b: any) => a.PurchasePrice.length - b.PurchasePrice.length,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      render: (text: any) => (
        <>
          {/* <span className={record.bg}>{text}</span> */}
          <span>{text}</span>
        </>
      ),
      sorter: (a: any, b: any) => a.Quantity.length - b.Quantity.length,
    },
    {
      title: "Supplier",
      dataIndex: "Supplier",
      render: (text: any) => (
        <>
          <span>{text}</span>
        </>
      ),
      sorter: (a: any, b: any ) => a.Supplier.length - b.Supplier.length,
    },
    {
      title: "ExpireDate",
      dataIndex: "ExpireDate",
      render: (text: any) => (
        <>
          {/* <td>
            <span className={record.bg1}>{text}</span>
          </td> */}
          <span>{text}</span>
        </>
      ),
      sorter: (a: any, b: any) => a.ExpireDate.length - b.ExpireDate.length,
    },
    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
          <Link
            to="/pharmacyadmin/edit-purchase"
            className="me-1 btn btn-sm bg-success-light me-2"
          >
            <Edit size={16} /> Edit
          </Link>
          <Link
            to="#"
            className="me-1 btn btn-sm bg-danger-light"
            data-bs-toggle="modal"
            data-bs-target="#deleteConfirmModal"
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
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-sm-7 col-auto">
                <h3 className="page-title mb-0">Purchase</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/pharmacyadmin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Purchase</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <Link
                  to="/pharmacyadmin/add-purchase"
                  className="btn btn-primary float-end d-flex justify-content-between align-items-center"
                >
                  <i className="me-1">
                    <PlusSquare size={16} />
                  </i>
                  Add New
                </Link>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              {/* Recent Orders */}
              <div className="card">
                <div className="card-header border-bottom-0">
                  <div className="row align-items-center">
                    <div className="col-auto custom-list d-flex">
                      <div className="form-custom me-2">
                        <div id="tableSearch" className="dataTables_wrapper" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
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
                      rowKey={(record) =>
                        // Use a unique key if available, otherwise fallback to index
                        (record as any).ID ?? (record as any).id ?? (record as any).key ?? JSON.stringify(record)
                      }
                      // onChange={this.handleTableChange}
                    />
                  </div>
                </div>
              </div>
              <div id="tablepagination" className="dataTables_wrapper" />
              {/* /Recent Orders */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Edit Details Modal */}

      {/* /Edit Details Modal */}
      {/* Delete Modal */}
      <div
        className="modal fade"
        id="deleteConfirmModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="acc_title">
                Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p id="acc_msg">are you sure you want to delete?</p>
            </div>
            <div className="modal-footer">
              <Link to="#" className="btn btn-success si_accept_confirm">
                Yes
              </Link>
              <button
                type="button"
                className="btn btn-danger si_accept_cancel"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </>
  );
};

export default PharmacyAdminPurchase;
