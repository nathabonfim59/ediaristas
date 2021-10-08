import React from 'react';
import { SafeEnviromentContainer } from './SafeEnvironment.style';
import { Container } from '@mui/material';

const SafeEnvironment = () => {
    return (
        <SafeEnviromentContainer>
            <Container>
                Ambiente Seguro <i className={'twf-lock'}/>
            </Container>
        </SafeEnviromentContainer>
    );
}

export default SafeEnvironment;