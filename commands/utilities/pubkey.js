import React from 'react';
import PropTypes from 'prop-types';
import {render, Text, Box} from 'ink';
import SelectInput from 'ink-select-input'; 
import * as cp from 'child_process'
import {UncontrolledTextInput} from 'ink-text-input';
import { exists } from 'fs';
const execa = require('execa');

const PubKey = () => {


    execa.command("more ~/.ssh/id_rsa.pub | pbcopy | printf '=> Public key copied to pasteboard.\n'",{ shell:true, stdio: 'inherit'})
        
    

    return <Text>Success.</Text>
    


	
};



export default PubKey
