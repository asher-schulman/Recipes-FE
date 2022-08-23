import React from "react";
import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="my-2 flex-centered">
			<button className="btn" onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
		</div>
	);
};

export default Counter;
