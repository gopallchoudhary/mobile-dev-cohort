import { useState } from "react";
function App() {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount((count) => count + 1);
	};
	const decrement = () => {
		setCount((count) => Math.max(count - 1, 0));
	};

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button onClick={increment}>➕</button>
			<button onClick={decrement}>➖</button>
		</div>
	);
}

export default App;
