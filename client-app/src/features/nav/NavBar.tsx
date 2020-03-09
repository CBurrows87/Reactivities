import React from 'react'
import { Menu, Container, Button, Image } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {

    return (
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item header exact as={NavLink} to='/'>
                    <Image size='tiny' src='/assets/logo.png' alt='logo' style={{ marginRight: 12, marginBottom: 10 }} />
                    Reactivities
            </Menu.Item>
                <Menu.Item name='Activities' as={NavLink} to='/activities' />
                <Menu.Item >
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
};

export default observer(NavBar);
