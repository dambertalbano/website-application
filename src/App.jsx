import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import AddTeacher from './Components/AddTeacher'
import Category from './Components/Category'
import Dashboard from './Components/Dashboard'
import EditEmployee from './Components/EditEmployee'
import EditTeacher from './Components/EditTeacher'
import Employee from './Components/Employee'
import EmployeeDetail from './Components/EmployeeDetail'
import EmployeeLogin from './Components/EmployeeLogin'
import Home from './Components/Home'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import Profile from './Components/Profile'
import Start from './Components/Start'
import Teacher from './Components/Teacher'
import TeacherDetail from './Components/TeacherDetail'
import TeacherLogin from './Components/TeacherLogin'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employee_login' element={<EmployeeLogin />}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
      <Route path='/teacher_login' element={<TeacherLogin />}></Route>
      <Route path='/teacher_detail/:id' element={<TeacherDetail />}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/teacher' element={<Teacher />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/profile' element={<Profile />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
        <Route path='/dashboard/teacher' element={<Teacher />}></Route>
        <Route path='/dashboard/add_teacher' element={<AddTeacher />}></Route>
        <Route path='/dashboard/edit_teacher/:id' element={<EditTeacher />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
