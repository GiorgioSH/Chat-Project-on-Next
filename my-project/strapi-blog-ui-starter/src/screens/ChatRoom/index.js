import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { socket } from '../../config/web-sockets';
import Header from '../../components/Header';
import Messages from '../../components/Messages';
import { history } from '../../config/network';
import {
  ChatContainer,
  StyledContainer,
  ChatBox,
  StyledButton,
  SendIcon
} from './styles';
import { Input } from 'antd';
import List from "../../components/List";

function ChatRoom(props) {
    const {username, room, joinData } = props;
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        if( Object.keys(joinData).length > 0) {
            setMessages([joinData])    
            socket.on('message', (message, error) => {
                setMessages(msgs => [ ...msgs, message ]);
            });
            socket.on("roomInfo", (users) => {
                setUsers(users);
            });
        } 
        else {
            history.push('/join')
        }
     }, [joinData])

    

    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    
    const handleClick = (e) => {
        sendMessage(message);
    }
    
    const sendMessage = (message) => {
            if(message) {
                socket.emit('sendMessage',{ userId: joinData.userData.id, message }, (error) => {
                    if(error) {
                        alert(error)
                        history.push('/join');
                    }
                });
                setMessage('')
            } else {
                alert("Message can't be empty")
            }
    }

       return (
        <ChatContainer>
            <Header room={room} />
            <StyledContainer>
            <List users={users.users}/>
                <ChatBox>
                    <Messages 
                        messages={messages} 
                        username={username}
                    />
                    <Input
                        type="text"
                        placeholder="Type your message"
                        value={message}
                        onChange={handleChange}
                        />
                    
                    <StyledButton onClick={handleClick}>
                        <SendIcon>
                            <i className="fa fa-paper-plane" />
                        </SendIcon>
                    </StyledButton>
                </ChatBox>      
            </StyledContainer>
        </ChatContainer>
        
    )
};
export default ChatRoom;