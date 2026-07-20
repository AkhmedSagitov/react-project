import {useEffect, useState} from "react";
import PostItem from "../../components/post/PostItem";
import PostContext from "../../components/context/PostContext.js";
import axios from "axios";
import PostCreate from "../../components/post/Crud/Create.jsx";
import Edit from "../../components/post/Crud/Edit.jsx";


function Main() {

    const [editingPost, setEditingPost] = useState([])

    const [isModal, setIsModal] = useState(false)

    const [posts, setPosts] = useState([])

    const deletePost = async (id) => {
        await axios.delete(`http://localhost:3000/posts/${id}`);
    }

    const getPosts = async () => {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data);
    };

    useEffect(() => {
        getPosts()
    }, []);

    const editPost = async (post) => {
        setEditingPost({
            id: post.id,
            title: post.title,
            content: post.content,
        })
        setIsModal(true)
    }

    return (
        <>
            {posts.length > 0 && console.log(posts)}

            {isModal &&
                <Edit setIsModal={setIsModal} editingPost={editingPost}/>
            }
            <PostCreate  />

            <PostContext value={{deletePost}}>

                {posts.map( ((p, i) => (
                    <PostItem key={i} p={p} editPost={editPost}/>
                )))}

            </PostContext>
        </>
    )
}

export default Main;