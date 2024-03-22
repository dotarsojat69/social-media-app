import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
// import { DetailPost, deletePosts } from "@/utils/apis/posts";
// // import { useToken } from "@/utils/contexts/token";
// import { useToast } from "./ui/use-toast";
import Alert from "./alert";
// import { User, getUser } from "@/utils/apis/users";
// import { useEffect, useState } from "react";
import CustomDialog from "./dialog";
// import EditPost from "@/pages/EditPost";

// interface PostCardProps {
//   data: DetailPost;
//   userData: User;
// }

const PostCard = () => {
  // const { user, token } = useToken();
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const { userData, data } = props;

//   const [userPicture, setUserPicture] = useState("");

//   useEffect(() => {
//     const handleUser = async () => {
//       try {
//         const result = await getUser(userData.user_id);
//         setUserPicture(result.data.picture);
//       } catch (error: any) {
//         toast({
//           title: "Oops! Something went wrong.",
//           description: error.toString(),
//           variant: "destructive",
//         });
//       }
//     };
//     handleUser;
//   }, []);

//   async function handleDeletePost(id: string) {
//     try {
//       const result = await deletePosts(id);
//       toast({ description: result.message });

//       console.log("fungsi terpanggil");

//       navigate("/home");
//     } catch (error: any) {
//       toast({
//         title: "Oops! Something went wrong.",
//         description: error.toString(),
//         variant: "destructive",
//       });
//     }
//   }

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to="/profile/">
            {/* {userPicture && (
              <img
                src={userPicture}
                alt="photo profile"
                className="w-14 lg:h-12 rounded-full"
              />
            )} */}
            <img
              src="/"
              alt="photo profile"
              className="w-14 lg:h-12 rounded-full"
            />
          </Link>
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-black">
              Profile Creator
            </p>
            <div className="flex-center gap-2 text-black">
              <p className="subtle-semibold lg:small-regular">date creator</p>-
              <p className="subtle-semibold lg:small-regular">post location</p>
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src="/assets/icons/dots.svg"
              alt="dots"
              width={20}
              height={20}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <CustomDialog
              // description={<EditPost post_id={data.id.toString()} />}
              >
                <p className="dark:hover:bg-white/25 rounded px-10">
                  Edit Post
                </p>
              </CustomDialog>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Alert
                title="Are you sure delete this post?
                    When you confirm this action, your post will be disapear from your feed"
                // onAction={() => handleDeletePost(data.id.toString())}
              >
                Delete Post
              </Alert>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Link to="/detail-post/">
        <div className="small-medium lg:base-medium py-5">
          <p>Nonton bioskop dulu achh...</p>
        </div>

        <img
          src="/assets/images/bioskop.jpg"
          alt="post image"
          className="post-card_img"
        />
      </Link>
      <Link to="/comment/" className="flex justify-end">
        <img
          src="/assets/icons/comment.svg"
          alt="comment"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
};

export default PostCard;
