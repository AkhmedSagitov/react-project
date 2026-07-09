

function PostForm({handlePost, post }) {

    return (
        <>
            <div className="mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4">
                <div className="mb-4">
                    <input
                        onChange={(event) => handlePost(event)}
                        value={post.title}
                        name="title"
                        placeholder="title"
                        type="text"
                        className="border border-gray-200 p-4 w-full"/>
                </div>
                <div className="mb-4">
                    <textarea
                        onChange={(event) => handlePost(event)}
                        value={post.content}
                        name="content"
                        placeholder="content"
                        className="border border-gray-200 p-4 w-full"/>
                </div>
            </div>

        </>
    )
}

export default PostForm
