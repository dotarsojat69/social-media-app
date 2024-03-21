import Bottombar from './Bottombar'
import Sidebar from './LeftSidebar'
import Topbar from './Topbar'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
<<<<<<< HEAD
    <div className="w-full md:flex bg-[url('/assets/pattern.svg')]">
=======
    <div className="w-full md:flex bg-[url(/assets/images/pattern.svg)]">
>>>>>>> origin/dev
      
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
