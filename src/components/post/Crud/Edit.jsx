import {useState} from "react";
import axios from "axios";


function Edit({setIsModal, editingPost}) {

    const [editedPost, setEditedPost] = useState(editingPost);
    const updatePost = (e) => {
        e.preventDefault()
        setIsModal(false)

        storeUpdate()

        setEditedPost({
            title: '',
            content: '',
        })

    }

    const storeUpdate = async () => {
        await axios.patch(
            `http://localhost:3000/posts/${editedPost.id}`,
            editedPost
        );
    }

    const handleEditedPostContent = (event) => {
        const { name, value } = event.target;

        setEditedPost({
            ...editedPost,
            [name]: value,
        });
    };


    return (
        <>
            <div onClick={() => setIsModal(false)} className="modal-shadow">
                <div onClick={(e) => e.stopPropagation()} className="mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4">
                    <div className="mb-4">
                        <input
                            onChange={(event) => handleEditedPostContent(event)}
                            value={editedPost.title}
                            name="title"
                            placeholder="title"
                            type="text"
                            className="border border-gray-200 p-4 w-full"/>
                    </div>
                    <div className="mb-4">
                        <textarea
                            onChange={(event) => handleEditedPostContent(event)}
                            value={editedPost.content}
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

export default Edit
