import axios from "axios";
import {useState} from "react";

function PostCreate() {

    const [post, setPost] = useState([])


    const handlePost = (event) => {
        const name = event.target.name
        const value = event.target.value
        setPost({...post, [name]: value})
    }


    const storePost = async (e)=> {

        e.preventDefault()

        await axios.post(`http://localhost:3000/posts/`, post);

        setPost({
            title: '',
            content: '',
        })
    }



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
                <a
                    onClick={(e)=> storePost(e)}
                    className="inline-block px-3 py-2 text-white bg-sky-600 border border-sky-700 mb-4" href="#">Store</a>
            </div>
        </>
    )
}

export default PostCreate
