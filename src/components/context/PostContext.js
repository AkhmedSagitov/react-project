import React from "react";

const PostContext = React.createContext({
    deletePost: () => {},
    posts: []
})

export default PostContext;