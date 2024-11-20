import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
    return (
        <div>
            <div class="about">
                <h1>React 18 Full-Stack Development Blog Application</h1>
                <p>This project is built using React 18, designed to provide a seamless and interactive platform for exploring blogs about full-stack development. The application includes the following core features:</p>
                <p>Blog Details View: Users can browse a list of blogs and click on any blog to view its detailed content, enhancing the reading experience with a clean and focused layout.</p>
                <p>Add New Blog: Users can contribute their own blogs by filling out a simple form. The newly added blogs are seamlessly integrated into the local data and displayed in the blog list.</p>
                <p>Delete Blog: For easy management, users can delete any blog they no longer need, maintaining a clutter-free browsing experience.</p>
                <p>The app fetches data from a locally stored blogs.json file, simulating a back-end connection. With fully responsive design, the interface adapts elegantly to all screen sizes, ensuring usability across desktops, tablets, and mobile devices.</p>
                <p>This application demonstrates the versatility of React for building responsive and feature-rich web applications while offering a user-friendly interface for managing full-stack development blogs.</p>
            </div>
            <Footer/>
        </div>
    );
}
 
export default About