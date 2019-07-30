import React from "react";
import { render, Text } from "ink";
import SelectInput from "ink-select-input";
import startDevEngine from "./startDevEngine";
import stopDevEngine from "./stopDevEngine";
import Git from "./git";

const Development = () => {
	const handleSelect = item => {
		if (item.value === undefined) {
			console.log("Error retrieving component.");
		} else {
			render(<item.value />);
		}
	};
	const items = [
		{
			key: "git",
			label: "Git",
			value: Git
		},
		{
			key: "start-dev-engine",
			label: "Start development engine",
			value: startDevEngine
		},
		{
			key: "stop-dev-engine",
			label: "Stop development engine",
			value: stopDevEngine
		}
	];

	return <SelectInput items={items} onSelect={handleSelect} />;
};

export { Development, startDevEngine, stopDevEngine, Git };
export default Development;
