import { useState } from 'react';

const Home = () => {

   const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'pawan', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'vidun', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'kalpa', id: 3 }
   ]);
    

    return ( 
        <div className="home">
           {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
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
