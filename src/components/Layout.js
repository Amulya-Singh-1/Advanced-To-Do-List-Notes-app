import React from 'react'
import ResponsiveDrawer from './ResponsiveDrawer'

const Layout = ({children}) => {
  return (
    <div style={{display:'flex'}} >
        <ResponsiveDrawer />
        <div>
            {children}
        </div>
        
    </div>
  )
}

export default Layout