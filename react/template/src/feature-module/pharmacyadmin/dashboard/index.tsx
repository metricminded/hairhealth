import React from 'react';
import SidebarNav from '../sidebar';
import IncomeReport from './IncomeReport/IncomeReport';
import LatestCustomer from './LastestCustomer';
import Header from '../header/index';
import LineChart from '../../admin/dashboard/LineChart';

const PharmacyAdminDashboard: React.FC = () => {
   return (
      <>
         <div className="page-wrapper">
            <Header location={{ pathname: "dashboard" }} />
            <SidebarNav />
            <div className="content container-fluid">
               {/* Page Header */}
               <div className="page-header">
                  <div className="row">
                     <div className="col-sm-12">
                        <h3 className="page-title">Welcome Admin!</h3>
                        <ul className="breadcrumb">
                           <li className="breadcrumb-item active">Dashboard</li>
                        </ul>
                     </div>
                  </div>
               </div>
               {/* /Page Header */}
               <div className="row">
                  <div className="col-xl-3 col-sm-6 col-12">
                     <div className="card">
                        <div className="card-body">
                           <div className="dash-widget-header">
                              <span className="dash-widget-icon text-primary border-primary">
                              <i className="feather feather-dollar-sign"></i>
                              </span>
                              <div className="dash-count">
                                 <h3>$50.00</h3>
                              </div>
                           </div>
                           <div className="dash-widget-info">
                              <h6 className="text-muted">Sales Today</h6>
                              <div className="progress progress-sm">
                                 <div className="progress-bar bg-primary w-50" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                     <div className="card">
                        <div className="card-body">
                           <div className="dash-widget-header">
                              <span className="dash-widget-icon text-success">
                              <i className="feather feather-credit-card"></i>
                              </span>
                              <div className="dash-count">
                                 <h3>$5.22</h3>
                              </div>
                           </div>
                           <div className="dash-widget-info">
                              <h6 className="text-muted">Expense Today</h6>
                              <div className="progress progress-sm">
                                 <div className="progress-bar bg-success w-50" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                     <div className="card">
                        <div className="card-body">
                           <div className="dash-widget-header">
                              <span className="dash-widget-icon text-danger border-danger">
                              <i className="feather feather-folder"></i>
                              </span>
                              <div className="dash-count">
                                 <h3>485</h3>
                              </div>
                           </div>
                           <div className="dash-widget-info">
                              <h6 className="text-muted">Medicine</h6>
                              <div className="progress progress-sm">
                                 <div className="progress-bar bg-danger w-50" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                     <div className="card">
                        <div className="card-body">
                           <div className="dash-widget-header">
                              <span className="dash-widget-icon text-warning border-warning">
                              <i className="feather feather-users"></i>
                              </span>
                              <div className="dash-count">
                                 <h3>50</h3>
                              </div>
                           </div>
                           <div className="dash-widget-info">
                              <h6 className="text-muted">Staff</h6>
                              <div className="progress progress-sm">
                                 <div className="progress-bar bg-warning w-50" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12 col-lg-6">
                     {/* Sales Chart */}
                     <div className="card card-chart">
                        <div className="card-header">
                           <h4 className="card-title">Revenue</h4>
                        </div>
                        <div className="card-body">
                         <LineChart />
                        </div>
                     </div>
                     {/* /Sales Chart */}
                  </div>
                  <div className="col-md-12 col-lg-6">
                     {/* Invoice Chart */}
                     <div className="card card-chart">
                        <div className="card-header">
                           <h4 className="card-title">Status</h4>
                        </div>
                        <div className="card-body">
                           <IncomeReport />
                        </div>
                     </div>
                     {/* /Invoice Chart */}
                  </div>
               </div>
              <LatestCustomer />
            </div>
         </div>

      </>
   )
}
export default PharmacyAdminDashboard;