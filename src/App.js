import "./App.css";
import React, { useState, useEffect } from "react";
import { marked } from "marked";
import useLocalStorage from "./storage/useLocalStorage";
import DocsTab from "./docTab";

const App = () => {
	const [code, setCode] = useLocalStorage("markdown", "## Hello");
	const [compiled, setCompiled] = useState(marked.parse(code));
	const [tab, setTab] = useState("markdown");

	useEffect(() => {
		setCompiled(marked.parse(code));
	}, [code]);

	return (
		<>
			<h1>MarkDown Previewer React App</h1>
			<div className="container">
				<div className="btns">
					<button onClick={() => setTab("markdown")} className="btn">
						MarkDown
					</button>
					<button onClick={() => setTab("preview")} className="btn">
						Preview
					</button>
					<button onClick={() => setTab("docs")} className="btn">
						Docs
					</button>
				</div>

				{tab === "markdown" && (
					<textarea
						onChange={(e) => setCode(e.target.value)}
						value={code}
					/>
				)}

				{tab === "preview" && (
					<div
						className="preview"
						dangerouslySetInnerHTML={{ __html: compiled }}
					/>
				)}

				{tab === "docs" && <DocsTab />}
			</div>
		</>
	);
};

export default App;
