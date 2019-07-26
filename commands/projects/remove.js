import React from 'react';
import PropTypes from 'prop-types';
import {render, Text, Box} from 'ink';
var fs = require('fs');
import {UncontrolledTextInput} from 'ink-text-input';
const execa = require('execa');

const Remove = ({projectName}) => {

    const removeProject = projectName => {
        let filePath = '~/Organisation/environments/mac/dotfiles/sourced/projects/'+projectName
            execa.command('rm -rf '+filePath,{ shell:true, stdio: 'inherit'})
    };
    const handleSubmit = projectName => {
        removeProject(projectName);
        app.unmount();
};

    if (projectName === undefined)
    {
        return (

            <Box>
			<Box marginRight={1}>
				Enter the name of the project you want to delete:
			</Box>
			<UncontrolledTextInput onSubmit={handleSubmit}/>
		</Box>

        )

        
    }

    else {
    
    
    removeProject(projectName);
    

    return <Text>Successfully deleted project.</Text>
    

    }

	
};

Remove.propTypes = {
	projectName: PropTypes.string,
};

Remove.positionalArgs = ['projectName']

const app = render(<Remove/>);


export default Remove
