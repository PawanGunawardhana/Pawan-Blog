import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Pawan Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;

// we can do inline css style as we do in html.
// we can also do css in a separate file and import it in our js file.
// we can also use a library like bootstrap to make our css more efficient.
// style={{
//     color: 'white',
//     backgroundColor: '#f1356d',
//     border: 'none',
//     borderRadius: '8px',
// }}
