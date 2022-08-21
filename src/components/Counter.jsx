import React from "react";
import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<button className="btn" onClick={() => setCount((count) => count + 1)}>
			count is {count}
		</button>
	);
};

export default Counter;
