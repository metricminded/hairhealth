import { Navigate, Route } from "react-router";
import { all_routes } from "./all_routes";
import Login from "../feature-module/frontend/Authentication/login/login";
import LoginEmail from "../feature-module/frontend/Authentication/login/login-email";
import LoginPhone from "../feature-module/frontend/Authentication/login/login-phone";
import DoctorSignup from "../feature-module/frontend/Authentication/doctor-signup";
import PatientSignup from "../feature-module/frontend/Authentication/patient-signup";
import SignupSuccess from "../feature-module/frontend/Authentication/signup-success";
import ForgotPassword from "../feature-module/frontend/Authentication/forgot-password";
import ForgotPassword2 from "../feature-module/frontend/Authentication/forgot-password2";
import LoginEmailOtp from "../feature-module/frontend/Authentication/login-email-otp";
import Signup from "../feature-module/frontend/Authentication/signup";
import Register from "../feature-module/frontend/Authentication/register";
import EmailOtp from "../feature-module/frontend/Authentication/email-otp";
import GeneralHomeOne from "../feature-module/frontend/home/home-1/generalHomeOne";
import Home1 from "../feature-module/frontend/home/home-2";
import Home3 from "../feature-module/frontend/home/home-3";
import Home2 from "../feature-module/frontend/home/home-4";
import Home5 from "../feature-module/frontend/home/home-5";
import Home6 from "../feature-module/frontend/home/home-6";
import Home7 from "../feature-module/frontend/home/home-7";
import Home8 from "../feature-module/frontend/home/home-8";
import Home9 from "../feature-module/frontend/home/home-9";
import Home10 from "../feature-module/frontend/home/home-10";
import Home11 from "../feature-module/frontend/home/home-11";
import Home12 from "../feature-module/frontend/home/home-12";
import Home13 from "../feature-module/frontend/home/home-13";
import Home14 from "../feature-module/frontend/home/home-14";
import Pharmacyindex from "../feature-module/frontend/pharmacy/pharmacy";
import PharmacyDetails from "../feature-module/frontend/pharmacy/pharmactdetail";
import PharmacySearch from "../feature-module/frontend/pharmacy/pharmacysearch";
import ProductIndex from "../feature-module/frontend/pharmacy/product";
import ProductDescription from "../feature-module/frontend/pharmacy/productdescription";
import Cart from "../feature-module/frontend/pharmacy/cart";
import ProductCheckout from "../feature-module/frontend/pharmacy/productcheckout";
import PaymentSuccess from "../feature-module/frontend/pharmacy/payoutsuccess";
import Pharmacyregister from "../feature-module/frontend/pharmacy/pharmacyregister";
import Pharmacyregisterstepone from "../feature-module/frontend/pharmacy/pharmacyregisterstepone";
import Pharmacyregistersteptwo from "../feature-module/frontend/pharmacy/pharmacyregistersteptwo";
import Pharmacyregisterstepthree from "../feature-module/frontend/pharmacy/pharmacyregisterstepthree";
import Aboutus from "../feature-module/frontend/pages/aboutus/aboutus";
import Contactus from "../feature-module/frontend/pages/contactus/contactus";
import BlankPage from "../feature-module/frontend/pages/starter page";
import PricingPlan from "../feature-module/frontend/pages/pricing plan";
import Faq from "../feature-module/frontend/pages/faq";
import Maintenance from "../feature-module/frontend/pages/maintanence";
import Comingsoon from "../feature-module/frontend/pages/coming soon";
import Terms from "../feature-module/frontend/pages/terms";
import Policy from "../feature-module/frontend/pages/policy";
import Components from "../feature-module/frontend/pages/component";
import CalendarPage from "../feature-module/frontend/pages/calender";
import Speciality from "../feature-module/frontend/pages/speciality/speciality";
import Error404 from "../feature-module/frontend/pages/error/Error404";
import Error500 from "../feature-module/frontend/pages/error/Error500";
import Hospitals from "../feature-module/frontend/pages/hospitals/hospitals";
import ClinicNew from "../feature-module/frontend/pages/clinic/clinic";
import VoiceCall from "../feature-module/frontend/pages/voicecall";
import VideoCall from "../feature-module/frontend/pages/videocall";
import Invoices from "../feature-module/frontend/pages/invoices/invoices";
import InvoiceView from "../feature-module/frontend/pages/invoices/view";
import BlogList from "../feature-module/frontend/blog/bloglist";
import BlogGrid from "../feature-module/frontend/blog/bloggrid";
import BlogDetails from "../feature-module/frontend/blog/blogdetails";
import Dashboard from "../feature-module/frontend/patients/dashboard";
import DoctorGrid from "../feature-module/frontend/patients/doctorgrid";
import DoctorList from "../feature-module/frontend/patients/doctorlist";
import DoctorListAvailability from "../feature-module/frontend/patients/doctor-list-availability";
import SearchDoctor2 from "../feature-module/frontend/pages/searchdoctor/search-doctor2";
import SearchDoctor from "../feature-module/frontend/pages/searchdoctor/search-doctor1";
import DoctorProfile from "../feature-module/frontend/patients/doctorprofile";
import DoctorProfileTwo from "../feature-module/frontend/patients/doctorprofile2";
import Doctoraddblog from "../feature-module/frontend/blog/doctorblog/doctoraddblog";
import Doctorblog from "../feature-module/frontend/blog/doctorblog/doctorblog";
import Doctoreditblog from "../feature-module/frontend/blog/doctorblog/doctoreditblog";
import Doctorpendingblog from "../feature-module/frontend/blog/doctorblog/doctorpendingblog";
import DoctorRegister from "../feature-module/frontend/doctors/register";
import Review from "../feature-module/frontend/doctors/reviews";
import BookingWizard from "../feature-module/frontend/patients/booking/bookingWizard";
import Booking from "../feature-module/frontend/patients/booking/booking1";
import Booking2 from "../feature-module/frontend/patients/booking/booking2";
import BookingPopup from "../feature-module/frontend/patients/booking/bookingPopup";
import Checkout from "../feature-module/frontend/patients/checkout";
import PatientAppointments from "../feature-module/frontend/patients/appointments";
import AppointmentGrid from "../feature-module/frontend/patients/appointments/appointmentGrid";
import Dependent from "../feature-module/frontend/patients/dependent";
import MedicalRecords from "../feature-module/frontend/patients/medicalrecords";
import MedicalDetails from "../feature-module/frontend/patients/medicaldetails";
import Favourites from "../feature-module/frontend/patients/dashboard/favourties";
import PatientAccounts from "../feature-module/frontend/patients/accounts";
import BookingSuccess from "../feature-module/frontend/patients/booking-success";
import PatientChat from "../feature-module/frontend/patients/chat";
import PatientInvoice from "../feature-module/frontend/patients/patient-invoice";
import Profile from "../feature-module/frontend/patients/dashboard/profile";
import Password from "../feature-module/frontend/patients/dashboard/password";
import TwoStepAuthentication from "../feature-module/frontend/patients/dashboard/two-step-authentication/twoStepAuthentication";
import DeleteAccount from "../feature-module/frontend/patients/dashboard/delete-account/deleteAccount";
import CompletedAppoinments from "../feature-module/frontend/patients/appointments/completedAppoinments";
import CancelledAppoinments from "../feature-module/frontend/patients/appointments/cancelledAppoinments";
import UpComingAppointment from "../feature-module/frontend/patients/appointments/upcomingAppointment";
import MapGrid from "../feature-module/frontend/patients/map-grid/mapGrid";
import MapList from "../feature-module/frontend/patients/map-list";
import Patientregisterstepone from "../feature-module/frontend/register/patientregisterstepone";
import Patientregistersteptwo from "../feature-module/frontend/register/patientregistersteptwo";
import Patientregisterstepthree from "../feature-module/frontend/register/patientregisterstepthree";
import Patientregisterstepfour from "../feature-module/frontend/register/patientregisterstepfour";
import Patientregisterstepfive from "../feature-module/frontend/register/patientregisterstepfive";
import ProfileSetting from "../feature-module/frontend/doctors/profilesetting";
import Experience from "../feature-module/frontend/doctors/profilesetting/experience";
import Education from "../feature-module/frontend/doctors/profilesetting/education";
import DoctorChat from "../feature-module/frontend/doctors/chat";
import PatientProfile from "../feature-module/frontend/doctors/patientprofile";
import MyPatient from "../feature-module/frontend/doctors/mypatient";
import DoctorDashboard from "../feature-module/frontend/doctors/dashboard";
import Awards from "../feature-module/frontend/doctors/profilesetting/award";
import InsuranceSettings from "../feature-module/frontend/doctors/profilesetting/insurance";
import Clinic from "../feature-module/frontend/doctors/profilesetting/clinic";
import BusinessSettings from "../feature-module/frontend/doctors/profilesetting/business";
import Appointments from "../feature-module/frontend/doctors/appointments";
import DoctorRequest from "../feature-module/frontend/doctors/doctorRequest";
import DoctorAppointmentsGrid from "../feature-module/frontend/doctors/appointments/doctorAppointmentsGrid";
import DoctorAppoinmentStart from "../feature-module/frontend/doctors/appointments/doctorAppoinmentStart";
import DoctorCancelledAppointment from "../feature-module/frontend/doctors/appointments/doctorCancelledAppointment";
import DoctorUpcomingAppointment from "../feature-module/frontend/doctors/appointments/doctorUpcomingAppointment";
import DoctorSpecialities from "../feature-module/frontend/doctors/specialities";
import DoctorCancelledAppointment2 from "../feature-module/frontend/doctors/appointments/doctorCancelledAppointment2";
import CompletedAppointment from "../feature-module/frontend/doctors/appointments/completedAppointment";
import DoctorAppoinmentDetails from "../feature-module/frontend/doctors/appointments/doctorAppoinmentDetails";
import Accounts from "../feature-module/frontend/doctors/account";
import DoctorPayment from "../feature-module/frontend/doctors/doctorPayment";
import SocialMedia from "../feature-module/frontend/doctors/socialmedia";
import DoctorPassword from "../feature-module/frontend/doctors/password";
import AvailableTimings from "../feature-module/frontend/doctors/availableTimings";


// Admin 

import AdminDashboard from "../feature-module/admin/dashboard/index";
import AdminAppointments from "../feature-module/admin/appointments";
import AdminSpecialities from "../feature-module/admin/specialities";
import AdminDoctors from "../feature-module/admin/doctors";
import AdminPatients from "../feature-module/admin/patients";
import AdminReviews from "../feature-module/admin/reviews";
import AdminTransaction from "../feature-module/admin/transaction";
import AdminSettings from "../feature-module/admin/settings";
import AdminInvoiceReport from "../feature-module/admin/Reports/InvoiceReport/InvoiceReport";
import AdminInvoiceReportList from "../feature-module/admin/Reports/InvoiceReport/InvoiceReportList";
import AdminProfile from "../feature-module/admin/profile/Profile";
import AdminLogin from "../feature-module/admin/login";
import AdminRegister from "../feature-module/admin/register";
import AdminForgotPassword from "../feature-module/admin/forgotpassword";
import AdminLockscreen from "../feature-module/admin/lockscreen";
import AdminError404 from "../feature-module/admin/error404";
import AdminError500 from "../feature-module/admin/error500";
import AdminBlankPage from "../feature-module/admin/blankpage";
import AdminComponents from "../feature-module/admin/component";
import AdminBasicInput from "../feature-module/admin/forms/baiscinput";
import AdminFormInput from "../feature-module/admin/forms/forminput";
import AdminHorizontalForm from "../feature-module/admin/forms/formhorizontal";
import AdminVerticalForm from "../feature-module/admin/forms/formvertical";
import AdminFormMask from "../feature-module/admin/forms/formask";
import AdminFormValidation from "../feature-module/admin/forms/formvalidation";
import AdminBasictables from "../feature-module/admin/basictables";
import AdminDatatables from "../feature-module/admin/datatables";

// Pharmacy Admin

import PharmacyAdminDashboard from "../feature-module/pharmacyadmin/dashboard";
import PharmacyAdminProductName from "../feature-module/pharmacyadmin/Products/product";
import PharmacyAdminAddProduct from "../feature-module/pharmacyadmin/Products/addproduct";
import PharmacyAdminEditProduct from "../feature-module/pharmacyadmin/Products/editproduct";
import PharmacyAdminOutstock from "../feature-module/pharmacyadmin/Products/outstock";
import PharmacyAdminExpired from "../feature-module/pharmacyadmin/Products/expired";
import PharmacyAdminCategories from "../feature-module/pharmacyadmin/categories";
import PharmacyAdminPurchase from "../feature-module/pharmacyadmin/purchase/purchase";
import PharmacyAdminEditPurchase from "../feature-module/pharmacyadmin/purchase/editpurchase";
import PharmacyAdminAddPurchase from "../feature-module/pharmacyadmin/purchase/addpurchase";
import PharmacyAdminOrders from "../feature-module/pharmacyadmin/purchase/order";
import PharmacyAdminSales from "../feature-module/pharmacyadmin/Sales";
import PharmacyAdminSupplier from "../feature-module/pharmacyadmin/supplier/supplier";
import PharmacyAdminAddSupplier from "../feature-module/pharmacyadmin/supplier/addsupplier";
import PharmacyAdminEditSupplier from "../feature-module/pharmacyadmin/supplier/editsupplier";
import PharmacyAdminTransactionList from "../feature-module/pharmacyadmin/transaction/transaction-list";
import PharmacyAdminInvoiceList from "../feature-module/pharmacyadmin/report/invoicelist";
import PharmacyAdminReportInvoice from "../feature-module/pharmacyadmin/report/ReportInvoice";
import PharmacyAdminSettings from "../feature-module/pharmacyadmin/settings";


const route = all_routes
export const publicRoutes = [
  {
    path: "/react/template/",
    name: "Root",
    element: <Navigate to={route.login} />,
    route: Route,
  },
  {
    path: route.generalHomeOne,
    element: <GeneralHomeOne />,
    route: Route,
  },
  {
    path: route.home1,
    element: <Home1 />,
    route: Route,
  },
  {
    path: route.home3,
    element: <Home3 />,
    route: Route,
  },
  {
    path: route.home2,
    element: <Home2 />,
    route: Route,
  },
  {
    path: route.home5,
    element: <Home5 />,
    route: Route,
  },
  {
    path: route.home6,
    element: <Home6 />,
    route: Route,
  },
  {
    path: route.home7,
    element: <Home7 />,
    route: Route,
  },
  {
    path: route.home8,
    element: <Home8 />,
    route: Route,
  },
  {
    path: route.home9,
    element: <Home9 />,
    route: Route,
  },
  {
    path: route.home10,
    element: <Home10 />,
    route: Route,
  },
  {
    path: route.home11,
    element: <Home11 />,
    route: Route,
  },
  {
    path: route.home12,
    element: <Home12 />,
    route: Route,
  },
  {
    path: route.home13,
    element: <Home13 />,
    route: Route,
  },
  {
    path: route.home14,
    element: <Home14 />,
    route: Route,
  },
  {
    path: route.pharmacyIndex,
    element: <Pharmacyindex />,
    route: Route,
  },
  {
    path: route.pharmacyDetails,
    element: <PharmacyDetails />,
    route: Route,
  },
  {
    path: route.pharmacySearch,
    element: <PharmacySearch />,
    route: Route,
  },
  {
    path: route.productAll,
    element: <ProductIndex />,
    route: Route,
  },
  {
    path: route.productDescription,
    element: <ProductDescription />,
    route: Route,
  },
  {
    path: route.cart,
    element: <Cart />,
    route: Route,
  },
  {
    path: route.productCheckout,
    element: <ProductCheckout />,
    route: Route,
  },
  {
    path: route.paymentSuccess,
    element: <PaymentSuccess />,
    route: Route,
  },
  {
    path: route.pharmacyRegister,
    element: <Pharmacyregister />,
    route: Route,
  },
  {
    path: route.pharmacyRegisterstep1,
    element: <Pharmacyregisterstepone />,
    route: Route,
  },
  {
    path: route.pharmacyRegisterstep2,
    element: <Pharmacyregistersteptwo />,
    route: Route,
  },
  {
    path: route.pharmacyRegisterstep3,
    element: <Pharmacyregisterstepthree />,
    route: Route,
  },
  {
    path: route.pharmacyRegisterstep3,
    element: <Pharmacyregisterstepthree />,
    route: Route,
  },
  {
    path: route.aboutUs,
    element: <Aboutus />,
    route: Route,
  },
  {
    path: route.contactUs,
    element: <Contactus />,
    route: Route,
  },
  {
    path: route.blankPage,
    element: <BlankPage />,
    route: Route,
  },
  {
    path: route.pricingPlan,
    element: <PricingPlan />,
    route: Route,
  },
  {
    path: route.faq,
    element: <Faq />,
    route: Route,
  },
  {
    path: route.maintenance,
    element: <Maintenance />,
    route: Route,
  },
  {
    path: route.comingSoon,
    element: <Comingsoon />,
    route: Route,
  },
  {
    path: route.termsCondition,
    element: <Terms />,
    route: Route,
  },
  {
    path: route.privacyPolicy,
    element: <Policy />,
    route: Route,
  },
  {
    path: route.components,
    element: <Components />,
    route: Route,
  },
  {
    path: route.calendar,
    element: <CalendarPage />,
    route: Route,
  },
  {
    path: route.speciality,
    element: <Speciality />,
    route: Route,
  },
  {
    path: route.error404,
    element: <Error404 />,
    route: Route,
  },
  {
    path: route.error500,
    element: <Error500 />,
    route: Route,
  },
  {
    path: route.hospitals,
    element: <Hospitals />,
    route: Route,
  },
  {
    path: route.clinic,
    element: <ClinicNew />,
    route: Route,
  },
  {
    path: route.voiceCall,
    element: <VoiceCall />,
    route: Route,
  },
  {
    path: route.videoCall,
    element: <VideoCall />,
    route: Route,
  },
  {
    path: route.invoices,
    element: <Invoices />,
    route: Route,
  },
  {
    path: route.invoiceView,
    element: <InvoiceView />,
    route: Route,
  },
  {
    path: route.blogList,
    element: <BlogList />,
    route: Route,
  },
  {
    path: route.blogGrid,
    element: <BlogGrid />,
    route: Route,
  },
  {
    path: route.blogDetails,
    element: <BlogDetails />,
    route: Route,
  },
  {
    path: route.patientDashboard,
    element: <Dashboard />,
    route: Route,
  },
  {
    path: route.doctorGrid,
    element: <DoctorGrid />,
    route: Route,
  },
  {
    path: route.doctorList,
    element: <DoctorList />,
    route: Route,
  },
  {
    path: route.doctorMapListAvailability,
    element: <DoctorListAvailability />,
    route: Route,
  },
  {
    path: route.searchDoctor,
    element: <SearchDoctor />,
    route: Route,
  },
  {
    path: route.searchDoctor2,
    element: <SearchDoctor2 />,
    route: Route,
  },
  {
    path: route.doctorProfile,
    element: <DoctorProfile />,
    route: Route,
  },
  {
    path: route.doctorProfile2,
    element: <DoctorProfileTwo />,
    route: Route,
  },
  {
    path: route.booking,
    element: <BookingWizard />,
    route: Route,
  },
  {
    path: route.booking1,
    element: <Booking />,
    route: Route,
  },
  {
    path: route.booking2,
    element: <Booking2 />,
    route: Route,
  },
  {
    path: route.bookingPopup,
    element: <BookingPopup />,
    route: Route,
  },
  {
    path: route.checkout,
    element: <Checkout />,
    route: Route,
  },
  {
    path: route.patientAppointments,
    element: <PatientAppointments />,
    route: Route,
  },
  {
    path: route.appoinmentGrid,
    element: <AppointmentGrid />,
    route: Route,
  },
  {
    path: route.dependent,
    element: <Dependent />,
    route: Route,
  },
  {
    path: route.medicalRecords,
    element: <MedicalRecords />,
    route: Route,
  },
  {
    path: route.medicalDetails,
    element: <MedicalDetails />,
    route: Route,
  },
  {
    path: route.favourites,
    element: <Favourites />,
    route: Route,
  },
  {
    path: route.patientAccounts,
    element: <PatientAccounts />,
    route: Route,
  },
  {
    path: route.bookingSuccess,
    element: <BookingSuccess />,
    route: Route,
  },
  {
    path: route.patientChat,
    element: <PatientChat />,
    route: Route,
  },
  {
    path: route.patientInvoice,
    element: <PatientInvoice />,
    route: Route,
  },
  {
    path: route.patientProfile,
    element: <Profile />,
    route: Route,
  },
  {
    path: route.changePassword,
    element: <Password />,
    route: Route,
  },
  {
    path: route.twoFactorAuthentication,
    element: <TwoStepAuthentication />,
    route: Route,
  },
  {
    path: route.deleteAccount,
    element: <DeleteAccount />,
    route: Route,
  },
  {
    path: route.patientCompletedAppointment,
    element: <CompletedAppoinments />,
    route: Route,
  },
  {
    path: route.patientCancelledAppointment,
    element: <CancelledAppoinments />,
    route: Route,
  },
  {
    path: route.patientUpcomingAppointment,
    element: <UpComingAppointment />,
    route: Route,
  },
  {
    path: route.mapGird,
    element: <MapGrid />,
    route: Route,
  },
  {
    path: route.mapList,
    element: <MapList />,
    route: Route,
  },
  {
    path: route.patientRegisterStep1,
    element: <Patientregisterstepone />,
    route: Route,
  },
  {
    path: route.patientRegisterStep2,
    element: <Patientregistersteptwo />,
    route: Route,
  },
  {
    path: route.patientRegisterStep3,
    element: <Patientregisterstepthree />,
    route: Route,
  },
  {
    path: route.patientRegisterStep4,
    element: <Patientregisterstepfour />,
    route: Route,
  },
  {
    path: route.patientRegisterStep5,
    element: <Patientregisterstepfive />,
    route: Route,
  },
  {
    path: route.doctorDashboard,
    element: <DoctorDashboard />,
    route: Route,
  },
  {
    path: route.doctorAwardsSettings,
    element: <Awards />,
    route: Route,
  },
  {
    path: route.doctorClinicsSettings,
    element: <Clinic />,
    route: Route,
  },
  {
    path: route.doctorInsuranceSettings,
    element: <InsuranceSettings />,
    route: Route,
  },
  {
    path: route.doctorBusinessSettings,
    element: <BusinessSettings />,
    route: Route,
  },
  {
    path: route.appointments,
    element: <Appointments />,
    route: Route,
  },
  {
    path: route.doctorAppointmentsGrid,
    element: <DoctorAppointmentsGrid />,
    route: Route,
  },
  {
    path: route.doctorAppointmentStart,
    element: <DoctorAppoinmentStart />,
    route: Route,
  },
  {
    path: route.doctorCancelledAppointment,
    element: <DoctorCancelledAppointment />,
    route: Route,
  },
  {
    path: route.doctorUpcomingAppointment,
    element: <DoctorUpcomingAppointment />,
    route: Route,
  },
  {
    path: route.doctorCancelledAppointment2,
    element: <DoctorCancelledAppointment2 />,
    route: Route,
  },
  {
    path: route.doctorCompletedAppointment,
    element: <CompletedAppointment />,
    route: Route,
  },
  {
    path: route.doctorAppointmentDetails,
    element: <DoctorAppoinmentDetails />,
    route: Route,
  },
  {
    path: route.account,
    element: <Accounts />,
    route: Route,
  },
  {
    path: route.doctorPayment,
    element: <DoctorPayment />,
    route: Route,
  },
  {
    path: route.socialMedia,
    element: <SocialMedia />,
    route: Route,
  },
  {
    path: route.doctorChangePassword,
    element: <DoctorPassword />,
    route: Route,
  },
  {
    path: route.doctorSpecialities,
    element: <DoctorSpecialities />,
    route: Route,
  },
  {
    path: route.doctorRequest,
    element: <DoctorRequest />,
    route: Route,
  },
  {
    path: route.doctorAddBlog,
    element: <Doctoraddblog />,
    route: Route,
    meta_title: "Doctor Add Blog",
  },
  {
    path: route.doctorBlogs,
    element: <Doctorblog />,
    route: Route,
    meta_title: "Doctor Blogs",
  },
  {
    path: route.doctorEditBlog,
    element: <Doctoreditblog />,
    route: Route,
    meta_title: "Doctor Edit Blog",
  },
  {
    path: route.doctorPendingBlog,
    element: <Doctorpendingblog />,
    route: Route,
    meta_title: "Doctor Pending Blog",
  },
  {
    path: route.doctorRegister,
    element: <DoctorRegister />,
    route: Route,
    meta_title: "Doctor Register",
  },
  {
    path: route.doctorReview,
    element: <Review />,
    route: Route,
    meta_title: "Doctor Review",
  },
  {
    path: route.profileSetting,
    element: <ProfileSetting />,
    route: Route,
    meta_title: "Profile Settings",
  },
  {
    path: route.doctorExperience,
    element: <Experience />,
    route: Route,
    meta_title: "Doctor Experience",
  },
  {
    path: route.doctorEducation,
    element: <Education />,
    route: Route,
    meta_title: "Doctor Experience",
  },
  {
    path: route.Invoices,
    element: <Invoices />,
    route: Route,
    meta_title: "Invoices",
  },
  {
    path: route.doctorChat,
    element: <DoctorChat />,
    route: Route,
    meta_title: "Doctor Chat",
  },
  {
    path: route.pateintProfile,
    element: <PatientProfile />,
    route: Route,
    meta_title: "Patient Profile",
  },
  {
    path: route.myPateint,
    element: <MyPatient />,
    route: Route,
    meta_title: "My Patient",
  },
  {
    path: route.availableTimings,
    element: <AvailableTimings />,
    route: Route,
    meta_title: "Available Timings",
  },
];

export const authRoutes = [
  {
    id: "1",
    path: route.login,
    element: <Login />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "2",
    path: route.loginEmail,
    element: <LoginEmail />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "3",
    path: route.loginPhone,
    element: <LoginPhone />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "4",
    path: route.doctorSignup,
    element: <DoctorSignup />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "5",
    path: route.patientSignup,
    element: <PatientSignup />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "6",
    path: route.signupSuccess,
    element: <SignupSuccess />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "6",
    path: route.forgotPassword,
    element: <ForgotPassword />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "7",
    path: route.forgotPassword2,
    element: <ForgotPassword2 />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "8",
    path: route.loginEmailOtp,
    element: <LoginEmailOtp />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "8",
    path: route.signup,
    element: <Signup />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "9",
    path: route.register,
    element: <Register />,
    route: Route,
    meta_title: "Doccure",
  },
  {
    id: "10",
    path: route.emailOtp,
    element: <EmailOtp />,
    route: Route,
    meta_title: "Doccure",
  },
]

export const adminRoutes = [
  {
    id: "1",
    path: route.adminDashboard,
    element: <AdminDashboard />,
  },
  {
    id: "2",
    path: route.adminAppointmentList,
    element: <AdminAppointments />,
  },
  {
    id: "3",
    path: route.adminspecialities,
    element: <AdminSpecialities />,
  },
  {
    id: "4",
    path: route.adminDoctorList,
    element: <AdminDoctors />,
  },
  {
    id: "5",
    path: route.adminPatientList,
    element: <AdminPatients />,
  },
  {
    id: "6",
    path: route.adminReviews,
    element: <AdminReviews />,
  },
  {
    id: "7",
    path: route.adminTransactionsList,
    element: <AdminTransaction />,
  },
  {
    id: "8",
    path: route.adminSettings,
    element: <AdminSettings />,
  },
  {
    id: "9",
    path: route.adminInvoicerepot,
    element: <AdminInvoiceReport />,
  },
  {
    id: "10",
    path: route.adminInvoice,
    element: <AdminInvoiceReportList />,
  },
  {
    id: "11",
    path: route.adminProfile,
    element: <AdminProfile />,
  },
  {
    id: "12",
    path: route.adminLogin,
    element: <AdminLogin />,
  },
  {
    id: "13",
    path: route.adminRegister,
    element: <AdminRegister />,
  },
  {
    id: "14",
    path: route.adminForgotPassword,
    element: <AdminForgotPassword />,
  },
  {
    id: "15",
    path: route.adminLockscreen,
    element: <AdminLockscreen />,
  },
  {
    id: "16",
    path: route.adminError404,
    element: <AdminError404 />,
  },
  {
    id: "17",
    path: route.adminError500,
    element: <AdminError500 />,
  },
  {
    id: "18",
    path: route.adminBlankPage,
    element: <AdminBlankPage />,
  },
  {
    id: "19",
    path: route.adminComponents,
    element: <AdminComponents />,
  },
  {
    id: "20",
    path: route.adminBasicInput,
    element: <AdminBasicInput />,
  },
  {
    id: "21",
    path: route.adminFormInputGroup,
    element: <AdminFormInput />,
  },
  {
    id: "22",
    path: route.adminFormHorizontal,
    element: <AdminHorizontalForm />,
  },
  {
    id: "23",
    path: route.adminFormVertical,
    element: <AdminVerticalForm />,
  },
  {
    id: "24",
    path: route.adminFormMask,
    element: <AdminFormMask />,
  },
  {
    id: "25",
    path: route.adminFormValidation,
    element: <AdminFormValidation />,
  },
  {
    id: "26",
    path: route.adminTablesBasic,
    element: <AdminBasictables />,
  },
  {
    id: "27",
    path: route.adminDataTables,
    element: <AdminDatatables />,
  },
  
]

export const pharmacyAdminRoutes = [
  {
    id: "1",
    path: route.pharmacyAdminDashboard,
    element: <PharmacyAdminDashboard />,
  },  
  {
    id: "2",
    path: route.pharmacyAdminProducts,
    element: <PharmacyAdminProductName />,
  },  
  {
    id: "3",
    path: route.pharmacyAdminAddProducts,
    element: <PharmacyAdminAddProduct />,
  },  
  {
    id: "4",
    path: route.pharmacyAdminEditProducts,
    element: <PharmacyAdminEditProduct />,
  },  
  {
    id: "5",
    path: route.pharmacyAdminOutstock,
    element: <PharmacyAdminOutstock />,
  },  
  {
    id: "6",
    path: route.pharmacyAdminExpired,
    element: <PharmacyAdminExpired />,
  },  
  {
    id: "7",
    path: route.pharmacyAdminCategories,
    element: <PharmacyAdminCategories />,
  },  
  {
    id: "8",
    path: route.pharmacyAdminpurchase,
    element: <PharmacyAdminPurchase />,
  },  
  {
    id: "9",
    path: route.pharmacyAdminAddPurchase,
    element: <PharmacyAdminAddPurchase />,
  },  
  {
    id: "10",
    path: route.pharmacyAdminEditPurchase,
    element: <PharmacyAdminEditPurchase />,
  },  
  {
    id: "11",
    path: route.pharmacyAdminOrder,
    element: <PharmacyAdminOrders />,
  },  
  {
    id: "12",
    path: route.pharmacyAdminSales,
    element: <PharmacyAdminSales />,
  },  
  {
    id: "13",
    path: route.pharmacyAdminSupplier,
    element: <PharmacyAdminSupplier />,
  },  
  {
    id: "13",
    path: route.pharmacyAdminAddSupplier,
    element: <PharmacyAdminAddSupplier />,
  },  
  {
    id: "14",
    path: route.pharmacyAdminEditSupplier,
    element: <PharmacyAdminEditSupplier />,
  },  
  {
    id: "15",
    path: route.pharmacyAdminTransactionsList,
    element: <PharmacyAdminTransactionList />,
  },  
  {
    id: "16",
    path: route.pharmacyAdminInvoiceReport,
    element: <PharmacyAdminInvoiceList />,
  },  
  {
    id: "17",
    path: route.pharmacyAdminReportInvoice,
    element: <PharmacyAdminReportInvoice />,
  },  
  {
    id: "18",
    path: route.pharmacyAdminProfile,
    element: <PharmacyAdminReportInvoice />,
  },  
  {
    id: "19",
    path: route.pharmacyAdminSettings,
    element: <PharmacyAdminSettings />,
  },  
]