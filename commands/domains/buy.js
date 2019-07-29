import React from "react";
import PropTypes from "prop-types";
import { render, Text, Box } from "ink";
import SelectInput from "ink-select-input";
import * as cp from "child_process";
import { UncontrolledTextInput } from "ink-text-input";
import { exists } from "fs";
const execa = require("execa");

const Buy = ({ domainName }) => {
	const handleSubmit = domainName => {
		render(<Text>Contacting Zeit Domains ...</Text>);
		execa.command("now domain buy " + domainName, {
			shell: true,
			stdio: "inherit"
		});
	};

	if (domainName === undefined) {
		return (
			<Box>
				<Box marginRight={1}>Enter the domain name you want to buy:</Box>

				<UncontrolledTextInput onSubmit={handleSubmit} />
			</Box>
		);
	} else {
		execa.command("now domain buy " + domainName, {
			shell: true,
			stdio: "inherit"
		});

		return <Text>{domainName}</Text>;
	}
};

Buy.propTypes = {
	domainName: PropTypes.string
};

Buy.positionalArgs = ["domainName"];

export default Buy;
