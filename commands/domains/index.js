import React from "react";
import { render, Text } from "ink";
import SelectInput from "ink-select-input";
import Buy from "./buy";

const Domains = () => {
	const handleSelect = item => {
		if (item.value === undefined) {
			console.log("Error retrieving component.");
		} else {
			render(<item.value />);
		}
	};
	const items = [
		{
			key: "buy-domain",
			label: "Buy a domain",
			value: Buy
		}
	];

	return <SelectInput items={items} onSelect={handleSelect} />;
};

export { Buy, Domains };
export default Domains;
