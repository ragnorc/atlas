import React from 'react';
import {render, Text} from 'ink';
import SelectInput from 'ink-select-input'; 
import * as Projects from './projects'
import * as Domains from './domains'
import * as Utilities from './utilities'
import All from './all'

const Menu = () => {
	const handleSelect = item => {
		if (item.value === undefined) {
          console.log("Error retrieving component.")
		}
		
		else {
			
		     render(<item.value/>)
		}
		
	};

	const items = [
		{
			key: "all",
			label: "Show all commands",
			value: All
		},
		{
			key: "projects",
			label: "Projects",
			value: Projects.Projects
		},
		{
			key: "domains",
			label: "Domains",
			value: Domains.Domains
		},
		{
			key: "utilities",
			label: "Utilities",
			value: Utilities.Utilities
		}
	]
	


	return <SelectInput items={items} onSelect={handleSelect}/>
};

render(<Menu/>);

export default Menu
