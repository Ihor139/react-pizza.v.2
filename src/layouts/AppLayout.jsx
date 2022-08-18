import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const AppLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet/>
    </div>
  )
}
