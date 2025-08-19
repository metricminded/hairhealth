import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DoctorSidebar from '../sidebar'
import SettingsHeader from './settingsHeader'
import Header from '../../header'
import DoctorFooter from '../../common/doctorFooter'

interface InsuranceItem {
  id: number;
  isExpanded: boolean;
}

const InsuranceSettings: React.FC = (props) => {
    const [insurance, setInsurance] = useState<InsuranceItem[]>([]);

    const addInsurance = () => {
      const newInsurance: InsuranceItem = {
        id: insurance.length + 1,
        isExpanded: true, // Set to true when adding
      };
      setInsurance([...insurance, newInsurance]);
    };

    const deleteInsurance = (id: number) => {
      // Check if the insurance being deleted is expanded (added) or not
      const isExpanded = insurance.find(insuranceItem => insuranceItem.id === id)?.isExpanded;
  
      if (isExpanded) {
        // If the insurance is expanded, only delete it
        setInsurance(insurance.filter((insuranceItem) => insuranceItem.id !== id));
      } else {
        // If the insurance is not expanded, toggle its expanded state to false
        setInsurance(insurance.map((insuranceItem) => {
          if (insuranceItem.id === id) {
            return { ...insuranceItem, isExpanded: false };
          }
          return insuranceItem;
        }));
      }
    };

    return (
        <div>
        <Header {...props}/>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar-two">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-12 col-12 text-center">
                            <h2 className="breadcrumb-title">Doctor Profile</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/home-1">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        Doctor Profile
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content doctor-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                            {/* Profile Sidebar */}
                            <DoctorSidebar />
                            {/* /Profile Sidebar */}
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            {/* Profile Settings */}
                            <div className="dashboard-header">
                                <h3>Profile Settings</h3>
                            </div>
                            {/* Settings List */}
                            <SettingsHeader />
                            {/* /Settings List */}
                            <div className="dashboard-header border-0 mb-0">
                                <h3>Insurance</h3>
                                <ul>
                                    <li>
                                        <Link to="#" className="btn btn-primary prime-btn add-insurance" onClick={addInsurance}>
                                            Add New Insurance
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <form>
                                <div className="accordions insurance-infos" id="list-accord">
                                    {/* Insurance Item */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#insurance1"
                                        >
                                            Insurance<span>Delete</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse show"
                                            id="insurance1"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse">
                                                <div className="add-service-info">
                                                    <div className="add-info">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-12">
                                                                <div className="form-wrap mb-2">
                                                                    <div className="change-avatar img-upload">
                                                                        <div className="profile-img">
                                                                            <i className="fa-solid fa-file-image" />
                                                                        </div>
                                                                        <div className="upload-img">
                                                                            <h5>Logo</h5>
                                                                            <div className="imgs-load d-flex align-items-center">
                                                                                <div className="change-photo">
                                                                                    Upload New
                                                                                    <input type="file" className="upload" />
                                                                                </div>
                                                                                <Link to="#" className="upload-remove">
                                                                                    Remove
                                                                                </Link>
                                                                            </div>
                                                                            <p className="form-text">
                                                                                Your Image should Below 4 MB, Accepted
                                                                                format Jpg,Png,Svg
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-wrap">
                                                                    <label className="col-form-label">
                                                                        Insurance Name
                                                                    </label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link to="#" className="reset more-item">
                                                            Reset
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Insurance Item */}
                                    {/* Insurance Item */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="collapsed accordion-wrap"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#insurance2"
                                        >
                                            Star health<span>Delete</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="insurance2"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse">
                                                <div className="add-service-info">
                                                    <div className="add-info">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-12">
                                                                <div className="form-wrap mb-2">
                                                                    <div className="change-avatar img-upload">
                                                                        <div className="profile-img">
                                                                            <i className="fa-solid fa-file-image" />
                                                                        </div>
                                                                        <div className="upload-img">
                                                                            <h5>Logo</h5>
                                                                            <div className="imgs-load d-flex align-items-center">
                                                                                <div className="change-photo">
                                                                                    Upload New
                                                                                    <input type="file" className="upload" />
                                                                                </div>
                                                                                <Link to="#" className="upload-remove">
                                                                                    Remove
                                                                                </Link>
                                                                            </div>
                                                                            <p className="form-text">
                                                                                Your Image should Below 4 MB, Accepted
                                                                                format Jpg,Png,Svg
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-wrap">
                                                                    <label className="col-form-label">
                                                                        Insurance Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        defaultValue="Star health"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link to="#" className="reset more-item">
                                                            Reset
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Insurance Item */}
                                     {/* Insurance Item */}
                                     {insurance.map((insuranceItem) => (
                                     <div className="user-accordion-item" key={insuranceItem.id}>
                                     <Link
                                         to="#"
                                         className="accordion-wrap"
                                         data-bs-toggle="collapse"
                                         data-bs-target={`#insurance${insuranceItem.id}`}
                                        
                                     >
                                         Insurance<span onClick={() => deleteInsurance(insuranceItem.id)}>Delete</span>
                                     </Link>
                                     <div
                                         className="accordion-collapse collapse show"
                                         id={`insurance${insuranceItem.id}`}
                                         data-bs-parent="#list-accord"
                                     >
                                         <div className="content-collapse">
                                             <div className="add-service-info">
                                                 <div className="add-info">
                                                     <div className="row align-items-center">
                                                         <div className="col-md-12">
                                                             <div className="form-wrap mb-2">
                                                                 <div className="change-avatar img-upload">
                                                                     <div className="profile-img">
                                                                         <i className="fa-solid fa-file-image" />
                                                                     </div>
                                                                     <div className="upload-img">
                                                                         <h5>Logo</h5>
                                                                         <div className="imgs-load d-flex align-items-center">
                                                                             <div className="change-photo">
                                                                                 Upload New
                                                                                 <input type="file" className="upload" />
                                                                             </div>
                                                                             <Link to="#" className="upload-remove">
                                                                                 Remove
                                                                             </Link>
                                                                         </div>
                                                                         <p className="form-text">
                                                                             Your Image should Below 4 MB, Accepted
                                                                             format Jpg,Png,Svg
                                                                         </p>
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className="form-wrap">
                                                                 <label className="col-form-label">
                                                                     Insurance Name
                                                                 </label>
                                                                 <input type="text" className="form-control" />
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                                 <div className="text-end">
                                                     <Link to="#" className="reset more-item">
                                                         Reset
                                                     </Link>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                     ))}
                                 {/* /Insurance Item */}
                                </div>
                                <div className="modal-btn text-end">
                                    <Link to="#" className="btn btn-gray">
                                        Cancel
                                    </Link>
                                    <button className="btn btn-primary prime-btn">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                            {/* /Profile Settings */}
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
            <DoctorFooter {...props}/>
        </div>
    )
}

export default InsuranceSettings
