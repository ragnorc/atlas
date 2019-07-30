import React from "react";
import { render, Text } from "ink";
import SelectInput from "ink-select-input";
import CreateRepo from "./createRepo";

const Git = () => {
	const handleSelect = item => {
		if (item.value === undefined) {
			console.log("Error retrieving component.");
		} else {
			render(<item.value />);
		}
	};
	const items = [
		{
			key: "create-repo",
			label: "Create GitHub Repository",
			value: CreateRepo
		}
	];

	return <SelectInput items={items} onSelect={handleSelect} />;
};

export { Git, CreateRepo };
export default Git;
