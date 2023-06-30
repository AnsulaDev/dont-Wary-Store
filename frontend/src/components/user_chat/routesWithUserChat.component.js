import { Outlet } from "react-router-dom";
import UserChatComponent from "./userChat.component";
const RoutesWithUserChatComponent = () => {
    return(
        <>
            <UserChatComponent/>
            <Outlet/>
        </>
    )
}

export default RoutesWithUserChatComponent;