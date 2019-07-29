import React from "react";
import PropTypes from "prop-types";
import { render, Text, Box } from "ink";
import SelectInput from "ink-select-input";
import * as cp from "child_process";
var fs = require("fs");
import { UncontrolledTextInput } from "ink-text-input";
const execa = require("execa");

const Add = ({ projectName }) => {
	const createProject = projectName => {
		render(<Text>Creating project in sourced files.</Text>);
		execa.command(
			"cd ~/Organisation/environments/mac/dotfiles/sourced/projects && code " +
				projectName,
			{ shell: true, stdio: "inherit" }
		);
	};

	if (projectName === undefined) {
		return (
			<Box>
				<Box marginRight={1}>
					Enter the name of the project you want to create:
				</Box>
				<UncontrolledTextInput onSubmit={createProject} />
			</Box>
		);
	} else {
		createProject(projectName);

		return <Text>Successfully created project</Text>;
	}
};

Add.propTypes = {
	projectName: PropTypes.string
};

Add.positionalArgs = ["projectName"];

export default Add;
