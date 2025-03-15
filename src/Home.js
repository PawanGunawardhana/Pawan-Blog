import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("user effect ran");
    console.log(blogs);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Failed to fetch data from that API");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

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
