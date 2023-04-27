import { useState } from 'react';

import classes from './PostsList.module.css';
import Post from './Post';
import NewPost from './NewPost';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler} />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Checkout the full course!" />
        <Post author="Kimberley" body="The best novelist in Norway" />
      </ul>
    </>
  )
}

export default PostsList;