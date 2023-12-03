import React from 'react'
import './Layout.css'
import SideMenu from '../SideMenu/SideMenu'

const Layout = ({ children }) => {
  return (
    <div className='page_layout'>
      <div className="sidemenu_container">
        <SideMenu />
      </div>
      <div className="outlet">{children}</div>
    </div>
  )
}

export default Layout;