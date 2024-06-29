import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    userId: "",
  });

  const { title, content, userId } = post;
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const postChangeHandler = (e) => {
    setPost((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const savePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setPost({
        title: "",
        content: "",
        userId: "",
      });
    }
  }

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const postIsValid = Boolean(title) && Boolean(content) && Boolean(userId)

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

        <label htmlFor="userId"></label>
        <select value={userId} name="userId" onChange={postChangeHandler}>
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="content">Post Content:</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={postChangeHandler}
        />

        <button type="button" onClick={savePost} disabled={!postIsValid}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
