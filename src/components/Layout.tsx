import Bottombar from './Bottombar'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full md:flex'>
      <Topbar />
      <Sidebar />

      <section className='flex flex-1 h-full'>
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default Layout
