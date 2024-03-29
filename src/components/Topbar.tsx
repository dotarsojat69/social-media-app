import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const Topbar = () => {
  return (
    <section className="topbar">
        <div className="flex-between py-4 px-5">
            <Link to= "/" className="flex gap-3 items-center text-bold text-black">
                Logo
            </Link>

            <div className="flex gap-4">
                <Button variant="ghost" className="shad-button_ghost"
                >
                    <img src="/assets/icons/logout.svg" alt="logout" />
                </Button>
            </div>
        </div>
    </section>
  )
}

export default Topbar
