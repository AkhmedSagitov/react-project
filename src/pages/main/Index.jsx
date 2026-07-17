import {useEffect, useState} from "react";
import PostItem from "../../components/post/PostItem";
import PostForm from "../../components/post/PostForm";
import EditingPostModal from "../../components/post/EditingPostModal.jsx";
import Error from "../../components/error/Error";
import PostContext from "../../components/context/PostContext.js";
import axios from "axios";

function Main() {

    const [post, setPost] = useState([])

    const [editingPost, setEditingPost] = useState({
        index: null,
        title: '',
        content: '',
    })

    const [isModal, setIsModal] = useState(false)

    const [posts, setPosts] = useState([])

    const [errors, setErrors] = useState([])
    const storePost = (e)=> {
        e.preventDefault()

        if(validateFields().length > 0) return

        setPosts([...posts, post])

        setPost({
            title: '',
            content: '',
        })

        setErrors([]);
    }

    const editPost = (post) => {
        setIsModal(true)
        setEditingPost({
            index: posts.indexOf(post),
            title: post.title,
            content: post.content
        })
    }

    const updatePost = (e) => {
        e.preventDefault()

        setPosts(prevPosts =>
            prevPosts.map((p, i) =>
                i === editingPost.index ? editingPost : p
            )
        );
    }

    const handlePost = (event) => {
        const name = event.target.name
        const value = event.target.value
        setPost({...post, [name]: value})
    }

    const handleEditingPost = (event) => {
        const name = event.target.name
        const value = event.target.value
        setEditingPost({...editingPost, [name]: value})
    }
    const validateFields = () => {
        const newErrors = [];

        if(post.title === '') {
            newErrors.push({message: 'Required title'})
        }

        if(post.content === '') {
            newErrors.push({message: 'Required content'})
        }

        if(newErrors.length > 0) {
            setErrors(newErrors)
            return
        }

        return newErrors;
    }

    const deletePost = (index) => {
        setPosts(prevPosts =>
            prevPosts.filter((p, i) => {
                return i !== index;
            })
        );
    }


    const getPosts = async () => {
        const response = await axios.get("http://localhost:3000/posts");
        setPosts(response.data);
    };

    useEffect(() => {
        getPosts()

    }, []);


    return (
        <>
            {posts.length > 0 && console.log(posts)}

            {isModal &&
                <EditingPostModal handleEditingPost={handleEditingPost} editingPost={editingPost} updatePost={updatePost} setIsModal={setIsModal} />
            }
            <PostForm handlePost={handlePost} post={post} />

            <Error errors={errors} storePost={storePost}/>

            <PostContext value={{deletePost}}>

                {posts.map( ((p, i) => (
                    <PostItem key={i} p={p} editPost={editPost}  index={i}/>
                )))}

            </PostContext>
        </>
    )
}

export default Main;