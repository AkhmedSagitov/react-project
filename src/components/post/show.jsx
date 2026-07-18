import axios from "axios";
import {useEffect, useState} from "react";

function PostShow() {

    const {id} = useParams();

    const [post, setPost] = useState([])

    const getPost = async () => {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setPost(response.data);
    };


    useEffect(() => {
        getPost()

    }, []);


    return (
        <>
            <div key={post.id} className="flex justify-between items-center mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4">
                <div>
                    <h2 className="text-lg mb-2">{post.title}</h2>
                    <p className="text-xs">{post.content}</p>
                </div>
            </div>
        </>
    )
}

export default PostShow
