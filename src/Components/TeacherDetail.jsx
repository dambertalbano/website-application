import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TeacherDetail = () => {
    const [teacher, setTeacher] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/teacher/detail/'+id)
        .then(result => {
            setTeacher(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    const handleLogout = () => {
        axios.get('http://localhost:3000/teacher/logout')
        .then(result => {
          if(result.data.Status) {
            localStorage.removeItem("valid")
            navigate('/')
          }
        }).catch(err => console.log(err))
      }
  return (
    <div>
        <div className="p-2 d-flex justify-content-center shadow">
            <h4>Attendance Management System</h4>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Name: {teacher.name}</h3>
                <h3>Email: {teacher.email}</h3>
            </div>
            <div>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default TeacherDetail

