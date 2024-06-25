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
    </section>
  )
}

export default AddPostForm