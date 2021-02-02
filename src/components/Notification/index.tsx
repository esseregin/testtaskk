import React, { useEffect } from "react";
import "./style.css";

const Notification: React.FC<PropsType> = ({ content, openNotification, onCancel}) => {

    useEffect(() => {
        setTimeout(() => onCancel(), 2000)
    }, [openNotification])

    return(
        <>
            {
                openNotification && (
                    <div className="notification-wrapper">
                        <div  className="notification-dialog">
                            <div className="notification-content">
                                { content }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

type PropsType = {
    openNotification: boolean
    content: string
    onCancel: () => void
}

export default Notification;
