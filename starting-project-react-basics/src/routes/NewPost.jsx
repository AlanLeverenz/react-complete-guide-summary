import { Link, Form } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() {

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            name="body"
            required
            rows={3}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="author"
            required
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

// request' is the object that is requested by the action
// Form function handles form functions within react on client side

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: '...', author: '...'}
  fetch('http://locahost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}