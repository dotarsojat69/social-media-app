import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'


const LeftSidebar = () => {

  const navigate = useNavigate();
 
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className='leftsidebar'>
      <div className="flex flex-col gap-11">
        <Link to="/home" className="flex gap-3 items-center text-bold text-black">
            Logo
        </Link>

        <Link to="/profile/" className='flex gap-3 items-center'>
          <img src="/assets/images/profile.svg" alt="profile" width={80} height={80}/>
          <div className='flex flex-col'>
            <p className='body-bold text-black'>
              Profile
            </p>
          </div>
        </Link>

        <ul className='flex flex-col gap-6'>
          <Link to="/home" className='flex gap-6 items-center p-4'>
            <img src="/assets/icons/home.svg" alt="home" className="hover:red-600" />
            <p className='body-bold text-black'>
              Home
            </p>
          </Link>
          <Link to="/create-post/" className='flex gap-6 items-center p-4'>
            <img src="/assets/icons/add-post.svg" alt="add" />
          <p className='body-bold text-black'>
              Create Post
            </p>
          </Link>
        </ul>
      </div>

      <Button variant="ghost" className="shad-button_ghost" onClick={handleLogout}>
               <img src="/assets/icons/logout.svg" alt="logout" />
                    <p className='small-medium lg:base-medium text-black'>
                      Logout
                    </p>
      </Button>

    </nav>
  )
}

export default LeftSidebar
