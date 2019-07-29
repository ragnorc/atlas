import React from "react";
import { render, Text, Box } from "ink";

const execa = require("execa");

const StartDevEngine = () => {
	execa.command(
		'gcloud compute instances start personal-dev-engine-vm --zone "europe-west3-a"',
		{ shell: true, stdio: "inherit" }
	);

	return <Text>Starting development engine.</Text>;
};

export default StartDevEngine;
