import PostDelete from "./PostDelete.jsx";
import PostEdit from "./PostEdit.jsx";
import {Link} from "react-router-dom";


function PostItem({ p, index, editPost }) {

    return (
        <>
            <div key={index} className="flex justify-between items-center mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4">
                <div>
                    <Link className="text-lg mb-2" to={`/posts/${p.id}`}>{p.title}</Link>
                    <p className="text-xs">{p.content}</p>
                </div>
                <div>
                    <PostEdit editPost={editPost} p={p}/>
                    <PostDelete  index={index}/>
                </div>

            </div>
        </>
    )
}

export default PostItem
