import Delete from "./Crud/Delete.jsx";
import {Link} from "react-router-dom";


function PostItem({ p, editPost }) {

    return (
        <>
            <div key={p.id} className="flex justify-between items-center mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4">
                <div>
                    <Link className="text-lg mb-2" to={`/posts/${p.id}`}>{p.title}</Link>
                    <p className="text-xs">{p.content}</p>
                </div>
                <div>
                   <span onClick={() => editPost(p)} className="cursor-pointer text-xs text-emerald-600">
                        Edit
                    </span>
                    <Delete id={p.id}/>
                </div>

            </div>
        </>
    )
}

export default PostItem
