

function PostDelete({ deletePost, index }) {

    return (
        <>
            <span onClick={() => deletePost(index)} className="cursor-pointer text-xs text-red-600 ml-4">
                Delete
            </span>
        </>
    )
}

export default PostDelete
