import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

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
