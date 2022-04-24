import { useState } from 'react';
import './App.css';

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchPosts = async () => {
		setLoading(true);
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const json = await response.json();
		setPosts(json);
		setLoading(false);
	};

	const clearPosts = () => {
		setPosts([]);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Modern React Testing</h1>
			</header>
			<main className="App-content">
				<section className="App-buttons">
					<button onClick={fetchPosts} type="button">
						Fetch Posts
					</button>
					<button onClick={clearPosts} type="button">
						Clear posts
					</button>
				</section>
				{loading && <p>Loading...</p>}
				{posts.map((post) => (
					<article key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</article>
				))}
			</main>
		</div>
	);
}

export default App;
