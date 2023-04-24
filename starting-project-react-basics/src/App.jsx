import PostsList from './components/PostsList';

const posts = [
  {
    author: "Maximilian",
    body: "React.js is awesome!"
  },
  {
    author: "Manuel",
    body: "Check out the full course!"
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
