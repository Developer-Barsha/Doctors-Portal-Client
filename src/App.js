import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
      {/* Normal routes here */}
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/appointment' element={<RequireAuth><Appointment /></RequireAuth>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

      {/* Dashboard nested route here */}
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointments/>} />
          <Route path='review' element={<MyReview/>} />
          <Route path='history' element={<MyHistory/>} />
          <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>} />
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor/></RequireAdmin>} />
          <Route path='manageDoctors' element={<RequireAdmin><ManageDoctors/></RequireAdmin>} />
        <Route path='/dashboard/payment/:id' element={<RequireAuth><Payment/></RequireAuth>}/>
        </Route>
      </Routes>

      {/* toastcontainer here */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;
