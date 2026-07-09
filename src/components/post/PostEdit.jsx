

function PostDelete({ editPost, p }) {

    return (
        <>
            <span onClick={() => editPost(p)} className="cursor-pointer text-xs text-emerald-600">
                Edit
            </span>
        </>
    )
}

export default PostDelete
