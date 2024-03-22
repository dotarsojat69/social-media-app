import {
    getPosts,
    getDetailPosts,
    addPosts,
    editPosts,
    deletePosts,
  } from "./api";
  import { DetailPost, PostPayloadSchema } from "./types";
  
  export { getPosts, getDetailPosts, addPosts, editPosts, deletePosts };
  export type { DetailPost, PostPayloadSchema };