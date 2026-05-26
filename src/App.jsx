import {useState} from "react";

function App() {

    const [post, setPost] = useState({
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
    }
    const handlePost = (event) => {
        const name = event.target.name
        const value = event.target.value
        setPost({...post, [name]: value})
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


    return (
        <div className="bg-gray-50 min-h-screen">
            {isModal &&
                <div onClick={() => setIsModal(false)} className="modal-shadow">
                    <div onClick={(e) => e.stopPropagation()} className="mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4 mb-4">
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
                        <div className="w-1/2">
                            <a
                                onClick={(e)=> storePost(e)}
                                className="inline-block px-3 py-2 text-white bg-sky-600 border border-sky-700 mb-4" href="#">Update</a>
                        </div>
                    </div>
                </div>
            }

            <div className="mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4 mb-4">
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

            <div className="mx-auto w-1/2">
                {errors.length > 0 && (
                    <div className="mb-4 text-red-500">
                        {errors.map((e, i) => (
                            <div key={i}>{e.message}</div>
                        ))}
                    </div>
                )}
                <a
                    onClick={(e)=> storePost(e)}
                    className="inline-block px-3 py-2 text-white bg-sky-600 border border-sky-700 mb-4" href="#">Store</a>
            </div>
            {posts.map( ((p, i) => (
                <div key={i} className="flex justify-between items-center mb-4 w-1/2 bg-white border border-gray-200 mx-auto p-4">
                    <div>
                        <h3 className="text-lg mb-2">{p.title}</h3>
                        <p className="text-xs">{p.content}</p>
                    </div>
                    <div>
                        <span onClick={() => editPost(p)} className="cursor-pointer text-xs text-emerald-600">
                            Edit
                        </span>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default App
