import React from "react";
import PropTypes from "prop-types";
import { render, Text, Box } from "ink";
const execa = require("execa");

const WiFi = () => {
	execa.command("m wifi showpassword | pbcopy", {
		shell: true,
		stdio: "inherit"
	});

	return <Text>Copying WiFi password to clipboard.</Text>;
};

export default WiFi;
