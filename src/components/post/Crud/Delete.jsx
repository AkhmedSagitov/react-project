import PostContext from "../../context/PostContext.js";
import {useContext} from "react";

function Delete({id }) {

    const {deletePost} = useContext(PostContext)

    return (
        <>
            <span onClick={() => deletePost(id)} className="cursor-pointer text-xs text-red-600 ml-4">
                Delete
            </span>
        </>
    )
}

export default Delete
