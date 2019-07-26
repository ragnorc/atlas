import React from 'react';
import {render, Text} from 'ink';
import SelectInput from 'ink-select-input'; 
import Projects from './projects'
import Domains from './domains'

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
			key: "projects",
			label: "Projects",
			value: Projects
		},
		{
			key: "domains",
			label: "Domains",
			value: Domains
		}
	]
	


	return <SelectInput items={items} onSelect={handleSelect}/>
};

render(<Menu/>);

export default Menu
