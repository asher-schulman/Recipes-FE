import { useState } from "react";
import Homepage from "./components/pages/Homepage";
import "./App.css";

// /api/recipes
// -> return all recipes with a future pagination implementation.

// /api/recipes?ingredients=banana&ingredients=chocolate&title=bread
// -> returns all recipes that have banana and chocolate as ingredients and bread in the title

// /api/recipes/:id
// -> pulls up all information on a specific recipe id

function App() {
	return (
		<div className="App bg-secondary">
			<div className="container grid-xl">
				<Homepage />
			</div>
		</div>
	);
}

export default App;
