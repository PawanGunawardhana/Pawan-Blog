import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const [isDeleted, setIsDeleted] = useState(false);

  const history = useHistory();

  const handleDelete = () => {
    setIsDeleted(true);
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog deleted");
      history.push("/");
    });
      setIsDeleted(false);
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          {!isDeleted && <button onClick={handleDelete}>Delete Blog</button>}
          {isDeleted && <button disabled>Deleting...</button>}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
