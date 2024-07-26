import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function Logoutbtn() {


    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
   <button className=''>
    logout
   </button>
  )
}

export default Logoutbtn
