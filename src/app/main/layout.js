import React from 'react'
import Sidebar from './sidebar'

const layout = ({children}) => {
  return (
    <div>
        <Sidebar/>
       {children}
    </div>
  )
}

export default layout