import React from 'react'
import "./Layout.css"
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <>
        {/* Header here */}

        <Outlet/>

        {/* Footer or anything else here */}
    </>
  )
}

export default Layout