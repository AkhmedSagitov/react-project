import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import PostIndex from "./pages/posts/Index.jsx";
import MainIndex from  "./pages/main/Index.jsx";
import PostShow from "./components/post/show.jsx";



function App() {
    return (
        <>
            <Router>
                {/*Header*/}
                <div className="bg-white py-4 border-b border-gray-200 w-full mb-4">
                    <div className="w-1/2 mx-auto">
                        <Link className="mr-4" to={'/'}>Main</Link>
                        <Link className="mr-4"  to={'/posts'}>Posts</Link>
                    </div>
                </div>

                {/*Body*/}
                <div className="bg-grey-50 min-h-screen">
                    <Routes>
                        <Route path={'/'} element={<MainIndex />}></Route>
                        <Route path={'/posts'} element={<PostIndex />}></Route>
                        <Route path={'/posts/:id'} element={<PostShow />}></Route>
                    </Routes>
                </div>
            </Router>
        </>

    )
}

export default App
