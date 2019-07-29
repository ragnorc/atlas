import React from "react";
import { render } from "ink";
import SelectInput from "ink-select-input";
import Add from "./add";
import Remove from "./remove";

const Projects = () => {
	const handleSelect = item => {
		if (item.value === undefined) {
			console.log("Error retrieving component.");
		} else {
			render(<item.value />);
		}
	};

	const items = [
		{
			key: "add-project",
			label: "Add a project",
			value: Add
		},
		{
			key: "remove-project",
			label: "Remove a project",
			value: Remove
		}
	];

	return <SelectInput items={items} onSelect={handleSelect} />;
};

export { Projects, Add, Remove };
export default Projects;
