import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Pawan");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    const f = fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Blog created");
          setIsPending(false);
          console.log(res.json);
          // history.go(-1);
          history.push("/");
          return res.json;
        } else {
          console.log("Blog not created");
          setIsPending(false);
          // history.go(-1);
          history.push("/");
          return Error("Blog not created");
        }
      })
      .then((blog) => {
        console.log(blog);
      });
    console.log(f);
  };

  return (
    <div className="create">
      <h2>Add a Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          required
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Pawan">Pawan</option>
          <option value="Vidun">Vidun</option>
        </select>
        {!isPending && <button className="button">Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
