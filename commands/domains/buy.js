import React from 'react';
import PropTypes from 'prop-types';
import {render, Text, Box} from 'ink';
import SelectInput from 'ink-select-input'; 
import * as cp from 'child_process'
import {UncontrolledTextInput} from 'ink-text-input';
import { exists } from 'fs';
const execa = require('execa');

const Buy = ({domainName}) => {

    const handleSubmit = domainName => {
        execa.command('now domain buy '+domainName, { stdio: 'inherit'})
        app.unmount()
        
	};


    if (domainName === undefined)
    {
        return (

            <Box>
			<Box marginRight={1}>
				Enter the domain name you want to buy:
			</Box>

			<UncontrolledTextInput onSubmit={handleSubmit}/>
		</Box>

        )

        
    }

    else {
         /*const child = cp.spawn('wc');

         process.stdin.pipe(child.stdin)

        child.stdout.on('data', (data) => {
         console.log(`child stdout:\n${data}`);
            });
            */

    execa.command('now domain buy '+domainName,{ stdio: 'inherit'})
        
    

    return <Text>{domainName}</Text>
    

    }

	
};

Buy.propTypes = {
	domainName: PropTypes.string,
};

Buy.positionalArgs = ['domainName']

const app = render(<Buy/>);


export default Buy
