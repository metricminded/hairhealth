import { useState } from 'react'
import Header from '../../header'
import DoctorFooter from '../../common/doctorFooter'
import DoctorSidebar from '../sidebar'
import SettingsHeader from './settingsHeader'
import { TimePicker } from 'antd'
import { Link } from 'react-router-dom'

const BusinessSettings = (props: any) => {
    const [activeTabs, setActiveTabs] = useState(['day-monday', 'day-tuesday', 'day-wednesday', 'day-thursday', 'day-friday']);

    const handleTabClick = (tab: any) => {
        setActiveTabs([tab]);
    };

    // State for each day's business hours
    const [businessHours, setBusinessHours] = useState({
        monday: { from: null, to: null },
        tuesday: { from: null, to: null },
        wednesday: { from: null, to: null },
        thursday: { from: null, to: null },
        friday: { from: null, to: null },
        saturday: { from: null, to: null },
        sunday: { from: null, to: null }
    });

    const handleTimeChange = (day: string, type: 'from' | 'to', value: any) => {
        setBusinessHours(prev => ({
            ...prev,
            [day]: {
                ...prev[day as keyof typeof prev],
                [type]: value
            }
        }));
    };

    return (
        <div>
            <Header {...props} />
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
                                <h3>Business Hours</h3>
                            </div>
                            <form>
                                <div className="business-wrap">
                                    <h4>Select Business days</h4>
                                    <ul className="business-nav">
                                        <li>
                                            <Link to="#"
                                                className={`tab-link ${activeTabs.includes('day-monday') ? 'active' : ''}`}
                                                data-tab="day-monday"
                                                onClick={() => handleTabClick('day-monday')}
                                            >
                                                Monday
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"
                                                className={`tab-link ${activeTabs.includes('day-tuesday') ? 'active' : ''}`}
                                                data-tab="day-tuesday"
                                                onClick={() => handleTabClick('day-tuesday')}
                                            >
                                                Tuesday
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"
                                                className={`tab-link ${activeTabs.includes('day-wednesday') ? 'active' : ''}`}
                                                data-tab="day-wednesday"
                                                onClick={() => handleTabClick('day-wednesday')}
                                            >
                                                Wednesday
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"
                                                className={`tab-link ${activeTabs.includes('day-thursday') ? 'active' : ''}`}
                                                data-tab="day-thursday"
                                                onClick={() => handleTabClick('day-thursday')}
                                            >
                                                Thursday
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"
                                                className={`tab-link ${activeTabs.includes('day-friday') ? 'active' : ''}`}
                                                data-tab="day-friday"
                                                onClick={() => handleTabClick('day-friday')}
                                            >
                                                Friday
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"
                                                className={`tab-link ${activeTabs.includes('day-saturday') ? 'active' : ''}`}
                                                data-tab="day-saturday"
                                                onClick={() => handleTabClick('day-saturday')}
                                            >
                                                Saturday
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"
                                                className={`tab-link ${activeTabs.includes('day-sunday') ? 'active' : ''}`}
                                                data-tab="day-sunday"
                                                onClick={() => handleTabClick('day-sunday')}
                                            >
                                                Sunday
                                            </Link>
                                        </li>
                                        {/* Include other days here */}
                                    </ul>
                                </div>
                                <div className="accordions business-info" id="list-accord">
                                    {/* Business Hours */}
                                    <div
                                        className="user-accordion-item tab-items active"
                                        id="day-monday"
                                    >
                                        <Link
                                            to="#"
                                            className="accordion-wrap"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#monday"
                                        >
                                            Monday<span className="edit">Edit</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse show"
                                            id="monday"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse pb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                From <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.monday.from}
                                                                    onChange={(value) => handleTimeChange('monday', 'from', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                To <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.monday.to}
                                                                    onChange={(value) => handleTimeChange('monday', 'to', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Business Hours */}
                                    {/* Business Hours */}
                                    <div
                                        className="user-accordion-item tab-items active"
                                        id="day-tuesday"
                                    >
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#tuesday"
                                        >
                                            Tuesday<span className="edit">Edit</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="tuesday"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse pb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                From <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.tuesday.from}
                                                                    onChange={(value) => handleTimeChange('tuesday', 'from', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                To <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.tuesday.to}
                                                                    onChange={(value) => handleTimeChange('tuesday', 'to', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Business Hours */}
                                    {/* Business Hours */}
                                    <div
                                        className="user-accordion-item tab-items active"
                                        id="day-wednesday"
                                    >
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#wednesday"
                                        >
                                            Wednesday<span className="edit">Edit</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="wednesday"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse pb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                From <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.wednesday.from}
                                                                    onChange={(value) => handleTimeChange('wednesday', 'from', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                To <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.wednesday.to}
                                                                    onChange={(value) => handleTimeChange('wednesday', 'to', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Business Hours */}
                                    {/* Business Hours */}
                                    <div
                                        className="user-accordion-item tab-items active"
                                        id="day-thursday"
                                    >
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#thursday"
                                        >
                                            Thursday<span className="edit">Edit</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="thursday"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse pb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                From <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.thursday.from}
                                                                    onChange={(value) => handleTimeChange('thursday', 'from', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                To <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.thursday.to}
                                                                    onChange={(value) => handleTimeChange('thursday', 'to', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Business Hours */}
                                    {/* Business Hours */}
                                    <div
                                        className="user-accordion-item tab-items active"
                                        id="day-friday"
                                    >
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#friday"
                                        >
                                            Friday<span className="edit">Edit</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="friday"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse pb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                From <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.friday.from}
                                                                    onChange={(value) => handleTimeChange('friday', 'from', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                To <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.friday.to}
                                                                    onChange={(value) => handleTimeChange('friday', 'to', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Business Hours */}
                                    {/* Business Hours */}
                                    <div className="user-accordion-item tab-items" id="day-saturday">
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#saturday"
                                        >
                                            Saturday<span className="edit">Edit</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="saturday"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse pb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                From <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.saturday.from}
                                                                    onChange={(value) => handleTimeChange('saturday', 'from', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                To <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.saturday.to}
                                                                    onChange={(value) => handleTimeChange('saturday', 'to', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Business Hours */}
                                    {/* Business Hours */}
                                    <div className="user-accordion-item tab-items" id="day-sunday">
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#sunday"
                                        >
                                            Sunday<span className="edit">Edit</span>
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="sunday"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse pb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                From <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.sunday.from}
                                                                    onChange={(value) => handleTimeChange('sunday', 'from', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                To <span className="text-danger">*</span>
                                                            </label>
                                                            <div className="form-icon">
                                                                <TimePicker
                                                                    value={businessHours.sunday.to}
                                                                    onChange={(value) => handleTimeChange('sunday', 'to', value)}
                                                                    className="form-control timepicker1 business"
                                                                    placeholder="Time"
                                                                />
                                                                <span className="icon">
                                                                    <i className="fa-solid fa-clock" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Business Hours */}
                                </div>
                                <div className="modal-btn text-end">
                                    <Link to="#" className="btn btn-gray">
                                        Cancel
                                    </Link>
                                    <Link to="#" className="btn btn-primary prime-btn">
                                        Save Changes
                                    </Link>
                                </div>
                            </form>
                            {/* /Profile Settings */}
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
            <DoctorFooter />
        </div>
    )
}

export default BusinessSettings
