import React from 'react';
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container text>
                <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                <Header as='h1' inverted>
                    Listivities
                    </Header>
                <Header as='h2' inverted content='Welcome to Lisitivities' />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Take me to the Listivities!
                    </Button>
            </Container>
        </Segment>
    );
};

export default HomePage
