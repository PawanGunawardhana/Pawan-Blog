import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

   const [blogs, setBlogs] = useState(null);
    
    useEffect(() => {
    console.log('user effect ran');
    console.log(blogs);
    fetch("http://localhost:8000/blogs")
    .then((res) => {
        return res.json();
        })
        .then((data) => {
            console.log(data);
            setBlogs(data);
        })
    }, []);

    return ( 
        <div className="home">
          {blogs && <BlogList blogs = {blogs} title = "All Blogs"/>}
           
        </div>
    );
}
 
export default Home;

// const handleClickAgain = (x)=> {
//     console.log("Button clicked " +x );
// }
/* { <button onClick={(e) =>  handleClickAgain('pawan',e) }>Click Me Again</button> } */

// const [name, setName] = useState('pawan');
// const [age, setAge] = useState(25);
// const handleClick = ()=> {
//     console.log("Button clicked ");
//     setName('vidun');
//     setAge('20')
// }

// <p>My name is {name} and I'm {age} years old</p>
/* <button onClick={handleClick}>Click Me</button> */

    //let filterBlogs = blogs.filter((blog) => blog.author === "pawan" );
    // <button onClick={(() => setName('vidun'))}>Click Here</button>       
//  <p>{ name }</p> 