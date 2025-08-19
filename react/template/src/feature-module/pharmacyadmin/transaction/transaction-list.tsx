import React from "react";
import { Link } from "react-router-dom";
import SidebarNav from "../sidebar";
import {
  Productss,
  Product1,
  Product3,
  Product4,
  Product5,
  Product6,
} from "./image";
// import FeatherIcon from 'feather-icons-react';
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../paginationfunction";
import Header from "../header";
import { Trash2 } from "react-feather";

const PharmacyAdminTransactionList: React.FC = () => {
  const data = [
    {
      InvoiceName: "#IN0001",
      ProductID: "#01",
      image: Productss,
      ProductName: "Abilify",
      TotalAmount: "$100.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
    {
      InvoiceName: "#IN0002",
      ProductID: "#02",
      image: Product3,
      ProductName: "ITONE eye drops 10ml",
      TotalAmount: "$200.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
    {
      InvoiceName: "#IN0003",
      ProductID: "#03",
      image: Product4,
      ProductName: "Safi Natural Blood Purifie",
      TotalAmount: "$250.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
    {
      InvoiceName: "#IN0004",
      ProductID: "#04",
      image: Product5,
      ProductName: "Moisturization & Nourishment",
      TotalAmount: "$150.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
    {
      InvoiceName: "#IN0005",
      ProductID: "#05",
      image: Product6,
      ProductName: "Blackhead Removal",
      TotalAmount: "$350.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
    {
      InvoiceName: "#IN0006",
      ProductID: "#06",
      image: Productss,
      ProductName: "Abilify",
      TotalAmount: "$300.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
    {
      InvoiceName: "#IN0007",
      ProductID: "#07",
      image: Product6,
      ProductName: "Blackhead Removal",
      TotalAmount: "$250.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
    {
      InvoiceName: "#IN0008",
      ProductID: "#08",
      image: Product3,
      ProductName: "ITONE eye drops 10ml",
      TotalAmount: "$150.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
    {
      InvoiceName: "#IN0009",
      ProductID: "#09",
      image: Productss,
      ProductName: "Whitening & Fairness",
      TotalAmount: "$100.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
    {
      InvoiceName: "#IN0010",
      ProductID: "#10",
      image: Product1,
      ProductName: "Adderall",
      TotalAmount: "$120.00",
      status: "paid",
      bg: "badge rounded-pill bg-success inv-badge",
    },
  ];
  const columns = [
    {
      title: "Invoice Name",
      dataIndex: "InvoiceName",
      render: (text: any) => (
        <>
          <Link
            to="/pharmacyadmin/ReportInvoice"
            className="text-decoration-none"
          >
            {text}
          </Link>
        </>
      ),
      sorter: (a: any, b: any) => a.InvoiceName.length - b.InvoiceName.length,
    },
    {
      title: "Product ID",
      dataIndex: "ProductID",
      render: (text: any) => (
        <>
          <td>
            <span>{text}</span>
          </td>
        </>
      ),
      sorter: (a: any, b: any) => a.ProductID.length - b.ProductID.length,
    },
    {
      title: "Product Name",
      dataIndex: "ProductName",
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
            <span className=" mx-2">{text}</span>
          </td>
        </>
      ),
      sorter: (a: any, b: any) => a.ProductName.length - b.ProductName.length,
    },

    {
      title: "Total Amount",
      dataIndex: "TotalAmount",
      render: (text: any) => (
        <>
          <Link
            to="/admin/transaction-list"
            className="text-decoration-none text-primary"
          >
            {text}
          </Link>
        </>
      ),
      sorter: (a: any, b: any) => a.TotalAmount.length - b.TotalAmount.length,
    },
    {
      title: "Status",
      dataIndex: "",
      render: () => (
        <span>
          {" "}
          <span className="badge rounded-pill bg-success inv-badge">Paid</span>
        </span>
      ),
      sorter: (a: any, b: any) => a.length - b.length,
    },

    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
          <div className="actions">
            <Link
              className="btn btn-sm bg-danger-light"
              data-bs-toggle="modal"
              to="#delete_modal"
            >
              <Trash2 size={16} /> Delete
            </Link>
          </div>
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
        <>
          {/* Page Wrapper */}
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title mb-0">Transactions</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/pharmacyadmin">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Transactions</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header border-bottom-0">
                      <div className="row align-items-center">
                        <div className="col-auto custom-list d-flex">
                          <div className="form-custom me-2">
                            <div
                              id="tableSearch"
                              className="dataTables_wrapper"
                            />
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
                          rowKey={(record) => record.ProductID}
                          //  onChange={this.handleTableChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div id="tablepagination" className="dataTables_wrapper" />
                </div>
              </div>
            </div>
          </div>
          {/* /Page Wrapper */}
          {/* Delete Modal */}
          <div
            className="modal fade"
            id="delete_modal"
            aria-hidden="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
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
          {/* /Delete Modal */}
        </>
      </>
    </>
  );
};

export default PharmacyAdminTransactionList;
