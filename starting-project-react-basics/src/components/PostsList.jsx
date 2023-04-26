import classes from './PostsList.module.css';
import Post from './Post';

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Maximilian" body="React.js is awesome" />
      <Post author="Manuel" body="Checkout the full course!" />
      <Post author="Kimberley" body="The novelist in Norway" />
    </ul>
  )
}

export default PostsList;

// const posts = [
//   {
//     author: "Maximilian",
//     body: "React.js is awesome!"
//   },
//   {
//     author: "Manuel",
//     body: "Check out the full course!"
//   },
//   {
//     author: "Kimberly",
//     body: "The best novel about Norway!"
//   }
// ];

// <ul className={classes.posts}>
// {props.map(post => (
//   <li>
//     <Post
//       key={post.author}
//       author={post.author}
//       body={post.body}
//     />
//   </li>
// ))}
// </ul>