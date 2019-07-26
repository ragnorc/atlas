import React from 'react';
import {render, Text} from 'ink';
import SelectInput from 'ink-select-input'; 
import * as Domains from './domains';
import * as Projects from './projects';
import * as Utilities from './utilities';

const All = () => {
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
        key: "add-project",
        label: "Add a project",
        value: Projects.Add
    },
    {
        key: "remove-project",
        label: "Remove a project",
        value: Projects.Remove
    },
		{
			key: "buy-domain",
			label: "Buy a domain",
			value: Domains.Buy
        },
        {
			key: "get-pubkey",
			label: "Get public SSH key",
			value: Utilities.PubKey
		}
        
	]

	return <SelectInput items={items} onSelect={handleSelect}/>
};

render(<All/>);

export default All
