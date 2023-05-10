import Link from "next/link";

function App() {
  return (
    <div className="App">
      <h1 className="title">
      Read <Link href="/posts/first-post">this page!</Link>
    </h1>
    </div>
  );
}

export default App;
