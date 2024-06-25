import { useState } from "react";

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (e) => {
    setContent(e.target.value);
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
          onChange={handleTitleChange}
        />

        <label htmlFor="content">Post Content:</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
        />
      </form>
    </section>
  )
}

export default AddPostForm