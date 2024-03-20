import { Link } from "react-router-dom"

const PostCard = () => {
  return (
    <div className="post-card">
        <div className="flex-between">
            <div className="flex items-center gap-3">
                <Link to="/profile/">
                <img src="/assets/images/profile.svg" alt="creator" className="w-14 lg:h-12 rounded-full" />
                </Link>
                <div className="flex flex-col">
                    <p className="base-medium lg:body-bold text-black">
                        Profile Creator
                    </p>
                    <div className="flex-center gap-2 text-black">
                        <p className="subtle-semibold lg:small-regular">
                            date creator
                        </p>
                        -
                        <p className="subtle-semibold lg:small-regular">
                            post location
                        </p>
                    </div>
                </div>
            </div>

            <Link to="/edit-post/">
                <img src="/assets/icons/dots.svg"
                alt="dots"
                width={20}
                height={20} />
            </Link>
        </div>

        <Link to="/detail-post/">
            <div className="small-medium lg:base-medium py-5">
                <p>
                    Nonton bioskop dulu achh...
                </p>
            </div>

            <img 
            src="/assets/images/bioskop.jpg" alt="post image" 
            className="post-card_img"/>
        </Link>
        <Link to="/comment/" className="flex justify-end">
            <img src="/assets/icons/comment.svg" alt="" />
        </Link>
      </div>
  )
}

export default PostCard
