import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const layout = (props) => {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="md">
                {props.children}
            </Container>
        </div>
    );
    
}

export default layout;