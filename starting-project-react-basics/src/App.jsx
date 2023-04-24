import PostsList from './components/PostsList';

const posts = [
  {
    author: "Maximilian",
    body: "React.js is awesome!"
  },
  {
    author: "Manuel",
    body: "Check out the full course!"
  },
  {
    author: "Kimberly",
    body: "The best novel about Norway!"
  }
];

function App() {
  return (
    <main>
      <PostsList props={posts} />
    </main>

  );
}

export default App;
