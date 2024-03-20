import { Link } from "react-router-dom"
import { Button } from "./ui/button"


const Bottombar = () => {
  return (
    <section className="bottom-bar">
        <Link to="/" className='flex gap-2 items-center p-4'>
            <img src="/assets/icons/home.svg" alt="home" />
            <p className='body-bold group-hover:red text-black'>
              Home
            </p>
          </Link>

          <Button variant="ghost" className="shad-button_ghost">
                    <img src="/assets/icons/logout.svg" alt="logout" />
                    <p className='small-medium lg:base-medium text-black'>
                      Logout
                    </p>
                </Button>
    </section>
  )
}

export default Bottombar
