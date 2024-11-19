import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setAuthor] = useState('');
    const { globalVariable, setGlobalVariable } = useGlobalContext();
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const maxId = globalVariable.reduce((maxID, blog) => (blog.id > maxID ? blog.id : maxID), 0);
        setGlobalVariable((prevBlogs) => [
            ...prevBlogs,
            {id: maxId + 1, title, body, author}
        ]);


        // console.log(globalVariable);

        navigate('/');
    }   

    return (
        <div>
            <form onSubmit={handleFormSubmit} autocomplete="off">
                
                <h2>New Blog</h2>
                
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} aria-autocomplete="none"/>

                <label>Blog Body</label>
                <textarea required value={body} onChange={(e)=>setbody(e.target.value)} rows="6" id="uniqueTextareaId" name="uniqueTextareaName" aria-autocomplete="none" autocomplete="off" autocorrect="off"></textarea>

                <label>Your Name</label>
                <input type="text" required value={author} onChange={(e)=>setAuthor(e.target.value)} aria-autocomplete="none"/>

                <div>
                    <button>Add Blog</button>
                </div>
            </form>
            <Footer/>
        </div>
    );
}
 
export default Create