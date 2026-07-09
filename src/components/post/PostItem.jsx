import PostDelete from "./PostDelete.jsx";
import PostEdit from "./PostEdit.jsx";


function PostItem({ p, index, editPost, deletePost }) {

    return (
        <>
            <div key={index} className="flex justify-between items-center mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4">
                <div>
                    <h3 className="text-lg mb-2">{p.title}</h3>
                    <p className="text-xs">{p.content}</p>
                </div>
                <div>
                    <PostEdit editPost={editPost} p={p}/>
                    <PostDelete deletePost={deletePost} index={index}/>
                </div>

            </div>
        </>
    )
}

export default PostItem
