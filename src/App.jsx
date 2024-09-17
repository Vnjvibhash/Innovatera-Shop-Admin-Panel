import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import UserDetails from './pages/UserDetails'
import EditUser from './pages/EditUser'
import Users from './pages/Users'
import Categories from './pages/Categories'
import Profile from './pages/Profile'
import Login from './pages/Login'
import AddUser from './pages/AddUser'
import AdminHome from './pages/AdminHome'
import PrivateRoute from './components/PrivateRoute'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<AdminHome />} />
          <Route path="users" element={<Users />} />
          <Route path="edit_user" element={<EditUser />} />
          <Route path="user_details" element={<UserDetails />} />
          <Route path="add_user" element={<AddUser />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
