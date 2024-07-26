import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"
import authservice from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
function App() {
 const [loading,setloading] = useState(true)
 const dispatch = useDispatch()

 useEffect(()=>{
  authservice.getCurrentuser().then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}))
      }

      else{
        dispatch(logout())
      }
  }).finally(()=> setloading(false))


 },[])

return !loading ? (
  <div className='min-h-sc flex flex-wrap content-between bg-slate-600'>
  <div className='w-full block'>

    <Header/>
    <main>
       TODO <Outlet/>
    </main>
    <Footer/>
  </div>
  </div>
) : (null)
}

export default App
