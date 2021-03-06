import React from 'react';
import './ChatList.sass';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';



export class ChatList extends React.Component {


    render() {

        const { chats } = this.props;
        return (

            <div className='ChatList'>

                <List>
                    <Link to='/chats/'>
                        <ListItem>
                            <ListItemIcon>
                                <ChatBubbleOutlineOutlinedIcon />
                            </ListItemIcon>
                            {chats[1].name}
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to='/chats/2'>
                        <ListItem>
                            <ListItemIcon>
                                <ChatBubbleOutlineOutlinedIcon />
                            </ListItemIcon>
                            {chats[2].name}
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to='/chats/3'>
                        <ListItem>
                            <ListItemIcon>
                                <ChatBubbleOutlineOutlinedIcon />
                            </ListItemIcon>
                            {chats[3].name}
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to='/chats/4'>
                        <ListItem>
                            <ListItemIcon>
                                <ChatBubbleOutlineOutlinedIcon />
                            </ListItemIcon>
                            {chats[4].name}
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to='/chats/5'>
                        <ListItem>
                            <ListItemIcon>
                                <ChatBubbleOutlineOutlinedIcon />
                            </ListItemIcon>
                            {chats[5].name}
                        </ListItem>
                    </Link>
                    <Divider />
                </List>
            </div>
        )

    }
}