import React from 'react'
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses';
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import { Navigate } from 'react-router-dom';
import Abouts from './abouts/Abouts';
import Contacts from './contacts/Contacts';
import CartPage from './components/CartPage.jsx';







function App() {
  const [authUser,setAuthUser]=useAuth();
    console.log(authUser)
  return (
<>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route
            path="/about"
            element={authUser ? <Abouts/> : <Navigate to="/signup" />}
          />
          <Route
            path="/contact"
            element={authUser ? <Contacts/> : <Navigate to="/signup" />}
          />
          <Route
            path="/cart"
            element={authUser ? <CartPage/> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
         
        </Routes>
        <Toaster />
      </div>
    </>
    
  )
}

export default App;


