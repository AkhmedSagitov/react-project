

function PostItem({ p, index, editPost, deletePost }) {

    return (
        <>
            <div key={index} className="flex justify-between items-center mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4">
                <div>
                    <h3 className="text-lg mb-2">{p.title}</h3>
                    <p className="text-xs">{p.content}</p>
                </div>
                <div>
                        <span onClick={() => editPost(p)} className="cursor-pointer text-xs text-emerald-600">
                            Edit
                        </span>
                    <span onClick={() => deletePost(index)} className="cursor-pointer text-xs text-red-600 ml-4">
                            Delete
                    </span>
                </div>

            </div>
        </>
    )
}

export default PostItem
