import React from 'react';
import { Route, Routes } from "react-router-dom"
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import TodoCreatePage from "../pages/todo/TodoCreatePage"
import TodoIndexPage from "../pages/todo/TodoIndexPage"
import { useStore } from '../store/authStore';


const MainRoute = () => {
    const { token } = useStore();

    if (!token) return <LoginPage />

    return ( 
       <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/todo/index" element={<TodoIndexPage />} />
            <Route path="/todo/create" element={<TodoCreatePage />} />
        </Routes>
    )
}

export default  MainRoute;