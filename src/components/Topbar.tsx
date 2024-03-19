import { Link } from "react-router-dom"
import { Button } from "./ui/button"





const Topbar = () => {
  return (
    <section className="top-bar">
        <div className="flex-between py-4 px-5">
            <Link to= "/" className="flex gap-3 items-center text-bold">
                Logo
            </Link>

            <div className="flex gap-4">
                <Button>

                </Button>
            </div>
        </div>
    </section>
  )
}

export default Topbar
