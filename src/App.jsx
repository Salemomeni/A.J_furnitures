import React from 'react'
import NavBar from './component/header/NavBar'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingpage/LandingPage'
import Footer from './component/footer/Footer'
import './App.css'
import Collection from './pages/collections/Collection'
import { SignUp } from './pages/login/SignUp'
import DetailPage from './component/detailPage/DetailPage'
import Chairs from './pages/collections/Chairs'
import OutDoor from './pages/collections/OutDoor'
import Rugs from './pages/collections/Rugs'
import Sofas from './pages/collections/Sofas'
import Table from './pages/collections/Table'
import About from './pages/about/About'
import Contact from './pages/Contact us/Contact'
import ProtectedRoute from './component/authentication/ProtectedRoute'
import Profile from './pages/Profile/Profile'
import AccountManagement from './pages/Profile/account-management/AccountManagement'
import EditNumber from './pages/Profile/account-management/EditNumber'
import DeleteAccount from './pages/Profile/account-management/DeleteAccount'
import ChangePassword from './pages/Profile/account-management/ChangePassword'
import SecurityQuestions from './pages/Profile/account-management/SecurityQuestions'
import BasicDetails from './pages/Profile/account-management/BasicDetails'
import EditBasicDetials from './pages/Profile/account-management/EditBasicDetials'
const App = () => {
  return (
    <>
      <NavBar/>
     <Routes>
      <Route path='/' element = {<LandingPage/>}/>
      <Route path='/collections' element = {<Collection/>}>
      <Route path='chairs' element = {<Chairs/>}/>
      <Route path='outdoor' element = {<OutDoor/>}/>
      <Route path='rugs' element = {<Rugs/>}/>
      <Route path='sofas' element = {<Sofas/>}/>
      <Route path='tables' element = {<Table/>}/>
      </Route>
      <Route path="/about" element={<About/>} />
      <Route path='/signUp' element = {<SignUp/>}/>
      <Route path='/Detail' element = {<DetailPage/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route element = {<ProtectedRoute/>}>
       <Route path='/profile' element = {<Profile/>}>
       <Route path='accManagement' element = {<AccountManagement/>}>
       <Route path='editNumber' element = {<EditNumber/>}/>
       <Route path='basicDetails' element = {<BasicDetails/>}/>
       <Route path='EditProfile' element={<EditBasicDetials/>}/>
       <Route path='securityQuestion' element = {<SecurityQuestions/>}/>
       <Route path='changePassword' element = {<ChangePassword/>}/>
       <Route path='deleteAccount' element = {<DeleteAccount/>}/>
       </Route>
       </Route>
      </Route>   

     </Routes>    
     <Footer/>

    </>
  )
}

export default App