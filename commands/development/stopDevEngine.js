import React from "react";
import { render, Text, Box } from "ink";
const execa = require("execa");

const StopDevEngine = () => {
	execa.command(
		'gcloud compute instances stop personal-dev-engine-vm --zone "europe-west3-a"',
		{ shell: true, stdio: "inherit" }
	);

	return <Text>Stopping development engine.</Text>;
};

export default StopDevEngine;
