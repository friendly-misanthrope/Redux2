import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [post, setPost] = useState({
    title: '',
    content: ''
  });
  const { title, content } = post;

  const dispatch = useDispatch();

  const postChangeHandler = (e) => {
    setPost(prevState => { return { ...prevState, [e.target.name]: e.target.value } });
  }

  const savePost = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content)
      );
      setPost({
        title: '',
        content: ''
      });
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={postChangeHandler}
        />

        <label htmlFor="content">Post Content:</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={postChangeHandler}
        />

        <button type="button" onClick={savePost}>Save Post</button>
      </form>
    </section>
  );
}

export default AddPostForm;