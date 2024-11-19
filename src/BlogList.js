import { Link } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";



const BlogList = (props) => {
    const handleDeleteBlog = (event, blogID) => {
        event.preventDefault();
        event.stopPropagation();

        const filteredBlogs = globalVariable.filter(blog => blog.id !== blogID);
        setGlobalVariable(filteredBlogs);
    }

    const { globalVariable, setGlobalVariable } = useGlobalContext();
    const title = props.title;
    
    return (
        <div className="blog-list">
            {/* <h2>{ title }</h2> */}
            {globalVariable.slice().reverse().map(blog=>(
                <Link to={`/blogs/${blog.id}`} state={{blog}}>
                    <div className="blog-container">
                        <div className="blog-preview" key={blog.id}>
                                <h2>{ blog.title }</h2>
                                <p>{ blog.author }</p>
                        </div>
                        <button onClick={(event)=>handleDeleteBlog(event, blog.id)}>X</button>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default BlogList;