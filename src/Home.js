import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Loader from "./Loader";
import { useGlobalContext } from "./GlobalContext";
import Footer from "./Footer";

const Home = () => {

    const { globalVariable, setGlobalVariable } = useGlobalContext();

    const [loading, setLoading] = useState(true);

    const sortedList = [...globalVariable].sort((a, b) => b.id - a.id);

    const [name, setName] = useState('');

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        if(sortedList.length == 0){
            setTimeout(() => {
                fetch("/data/blogs.json")
                    .then((response) => response.json())
                    .then((jsonData) => {
                        setGlobalVariable(jsonData);
                        setLoading(false);
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.error("Error loading JSON:", error);
                    });
            }, 2000);
        }else{
            setLoading(false);
        }
    },[globalVariable])

    return (
        <div className="home">
            {/* <button onClick={()=>setName('Saleh')}>Change Name</button> */}
            {loading && <Loader/>}
            {sortedList.length > 0 && !loading && <BlogList title='All Blogs'/>}
            <Footer/>
        </div>
    );
}
 
export default Home;