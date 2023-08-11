import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import PotentialChats from "../componentes/chat/PotentialChats";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../componentes/chat/UserChat";
import { AutorContext } from "../context/AutorContext";




const chat = () => {
    const {user}=useContext(AutorContext)
    const {userChats, isUserChatsLoading, updateCurrentChat} = useContext(ChatContext);
    

    return(
        <Container>
            <PotentialChats/>
            {userChats?.length<1?null:(
        <Stack direction="horizontal" gap={4} className="align-items-start">
            <Stack className="messages-box flex-grow-0" gap={3}>
                {isUserChatsLoading && <p>Cargando Chats...</p>}
                {userChats.map((chat,index)=>{
                    return(
                        <div key={index} onClick={()=>updateCurrentChat(chat)}>
                            <UserChat chat={chat} user={user}/>
                        </div>
                    )
                })}
                </Stack>
            <p>ChatBox</p>
        </Stack>)}
        </Container>
    ); 
    
};
 
export default chat;