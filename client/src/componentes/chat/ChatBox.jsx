import { useContext } from "react"
import { AutorContext } from "../../context/AutorContext"
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/userFetchRecipient";
import { Stack } from "react-bootstrap";
import moment from "moment";

const ChatBox =() => {
    const {user} = useContext(AutorContext);
    const {currentChat, messages, isMessagesLoading} = useContext(ChatContext);
    const {recipienUser} = useFetchRecipientUser(currentChat, user);

    if(!recipienUser) 
        return (
            <p style={{textAlign:"center", width:"100%"}}>
                No seleccionado Conversacion
            </p>
    );

    if(isMessagesLoading) 
        return (
            <p style={{textAlign:"center", width:"100%"}}>
                Cargando Chat...
            </p>
    );
    return <Stack gap={4} className="chat-box">
        <div>
            <strong>recipienUser?.name</strong>
        </div>
    </Stack>;
};

export default ChatBox;