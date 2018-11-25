import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component="nav">

                <ListItem button
                    onClick={() => console.log('feature 1')}
                >
                    Event Starts In
                </ListItem>

                <ListItem button
                    onClick={() => console.log('nfo')}
                >
                    Venue NFO
                </ListItem>

                <ListItem button
                    onClick={() => console.log('highlights')}
                >
                    Highlights
                </ListItem>

                <ListItem button
                    onClick={() => console.log('price')}
                >
                    Pricing
                </ListItem>

                <ListItem button
                    onClick={() => console.log('location')}
                >
                    Location
                </ListItem>

            </List>
        </Drawer>
    );
};

export default SideDrawer;