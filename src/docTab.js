import { useEffect, useState } from "react";
// Direct import of the JSON file
import docData from "./doc.json";

const DocsTab = () => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		// Simply set the data from the imported JSON
		setDocs(docData.basic_syntax);
	}, []);

	return (
		<div className="docs">
			<h1>Markdown Basic Syntax</h1>
			{docs.map((doc, index) => (
				<div key={index} className="doc-section">
					<h2>{doc.name}</h2>
					<p>{doc.description}</p>

					<h3>Examples:</h3>
					{doc.examples.map((example, i) => (
						<div key={i} className="example-block">
							<div className="code-block">
								<h4>Markdown:</h4>
								<pre>{example.markdown}</pre>
							</div>
							<div className="result-block">
								<h4>Renders as:</h4>
								<div
									dangerouslySetInnerHTML={{
										__html: example.html,
									}}
								/>
							</div>
						</div>
					))}

					{doc.additional_examples &&
						doc.additional_examples.length > 0 && (
							<>
								<h3>Additional Examples:</h3>
								{doc.additional_examples.map((example, j) => (
									<div key={j} className="additional-example">
										<h4>{example.name}</h4>
										<p>{example.description}</p>
										<div className="example-block">
											<div className="code-block">
												<h5>Markdown:</h5>
												<pre>{example.markdown}</pre>
											</div>
											<div className="result-block">
												<h5>Renders as:</h5>
												<div
													dangerouslySetInnerHTML={{
														__html: example.html,
													}}
												/>
											</div>
										</div>
									</div>
								))}
							</>
						)}
				</div>
			))}
		</div>
	);
};

export default DocsTab;
