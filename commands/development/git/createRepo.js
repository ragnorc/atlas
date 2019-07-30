import React from "react";
import PropTypes from "prop-types";
import { render, Text, Box } from "ink";
import SelectInput from "ink-select-input";
import * as cp from "child_process";
import { UncontrolledTextInput } from "ink-text-input";
const execa = require("execa");

const CreateRepo = ({ repoName }) => {
	const items = [
		{
			key: "private",
			label: "Private repository",
			value: "private"
		},
		{
			key: "public",
			label: "Public repository",
			value: "public"
		}
	];

	const handleTextInput = repoName => {
		render(
			<SelectInput
				items={items}
				onSelect={privacy => handleSelect(privacy, repoName)}
			/>
		);
	};

	const handleSelect = (privacy, repoName) => {
		let options = privacy.value === "private" ? " -p" : "";
		execa.command("hub create " + repoName + options, {
			shell: true,
			stdio: "inherit"
		});
	};

	if (repoName === undefined) {
		return (
			<Box>
				<Box marginRight={1}>
					Enter the name of the repository you wish to create:
				</Box>
				<UncontrolledTextInput onSubmit={handleTextInput} />
			</Box>
		);
	} else {
		handleTextInput(repoName);
		return <Text>{repoName}</Text>;
	}
};

CreateRepo.propTypes = {
	domainName: PropTypes.string
};

CreateRepo.positionalArgs = ["repoName"];

export default CreateRepo;
