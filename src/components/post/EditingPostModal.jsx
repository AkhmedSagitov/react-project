

function EditingPostModal({handleEditingPost, editingPost, updatePost, setIsModal}) {

    return (
        <>
            <div onClick={() => setIsModal(false)} className="modal-shadow">
                <div onClick={(e) => e.stopPropagation()} className="mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4">
                    <div className="mb-4">
                        <input
                            onChange={(event) => handleEditingPost(event)}
                            value={editingPost.title}
                            name="title"
                            placeholder="title"
                            type="text"
                            className="border border-gray-200 p-4 w-full"/>
                    </div>
                    <div className="mb-4">
                        <textarea
                            onChange={(event) => handleEditingPost(event)}
                            value={editingPost.content}
                            name="content"
                            placeholder="content"
                            className="border border-gray-200 p-4 w-full"/>
                    </div>
                    <div className="w-1/2">
                        <a
                            onClick={(event)=> updatePost(event)}
                            className="inline-block px-3 py-2 text-white bg-sky-600 border border-sky-700 mb-4" href="#">Update</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditingPostModal
