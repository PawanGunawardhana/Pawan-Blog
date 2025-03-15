import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

   const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'pawan', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'vidun', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'pawan', id: 3 }
   ]);


   function handleDelete(id) {
    const unDeletedBlogs = blogs.filter((blog) => blog.id !== id );
    setBlogs(unDeletedBlogs);

   }
    
   let filterBlogs = blogs.filter((blog) => blog.author === "pawan" );

   useEffect(() => {
    console.log('user effect ran');
    console.log(blogs);
    console.log(filterBlogs);
   })

    return ( 
        <div className="home">
           <BlogList blogs = {blogs} title = "All Blogs" handleDelete = {handleDelete} />
           <BlogList blogs = {filterBlogs} title = "Pawan's Blogs" handleDelete = {handleDelete}/>
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
