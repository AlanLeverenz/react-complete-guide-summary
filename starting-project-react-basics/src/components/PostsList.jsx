import classes from './Post.module.css';
import Post from './Post';

function PostsList({ props }) {
  return (
    <ul className={classes.posts}>
      {props.map(post => (
        <li>
          <Post
            key={post.author}
            author={post.author}
            body={post.body}
          />
        </li>
      ))}
    </ul>
  )
}

export default PostsList;