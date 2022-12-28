import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

// import "../../styles/Layout.css"

export default function Layout() {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  )
}

