import React from "react";
import { render, Text } from "ink";
import SelectInput from "ink-select-input";
import PubKey from "./pubkey";
import WiFi from "./wifi";

const Utilities = () => {
	const handleSelect = item => {
		if (item.value === undefined) {
			console.log("Error retrieving component.");
		} else {
			render(<item.value />);
		}
	};
	const items = [
		{
			key: "get-ssh-key",
			label: "Copy SSH public key to clipboard",
			value: PubKey
		},
		{
			key: "get-wifi-key",
			label: "Copy WiFi password to clipboard",
			value: WiFi
		}
	];

	return <SelectInput items={items} onSelect={handleSelect} />;
};

render(<Utilities />);

export { Utilities, PubKey, WiFi };
export default Utilities;
