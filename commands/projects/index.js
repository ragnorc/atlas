import React from 'react';
import {render} from 'ink';
import SelectInput from 'ink-select-input';

const Projects = () => {
	const handleSelect = item => {
		// `item` = { label: 'First', value: 'first' }
	};

	const items = [{
		label: 'First',
		value: 'first'
	}, {
		label: 'Second',
		value: 'second'
	}, {
		label: 'Third',
		value: 'third'
	}];

	return <SelectInput items={items} onSelect={handleSelect}/>
};

render(<Projects/>);

export default Projects
