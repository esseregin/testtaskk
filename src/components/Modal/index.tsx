import React, {useEffect, useState} from "react";
import Button from "../Button";
import "./style.css";

const Modal: React.FC<PropsType> = ({ content, onOk, onCancel, openModal}) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(openModal)
    }, [openModal])

    const handleCancel  = () => {
        setOpen(false);
        onCancel()
    };

    const handleOk   = () => {
        setOpen(false);
        onOk()
    };

    return(
        <>
            {
                open && (
                    <div className="modal-wrapper">
                        <div  className="modal-dialog">
                            <div className="modal-content">
                                { content }
                            </div>
                            <div className="modal-event">
                                <Button onClick={handleCancel} title="Отмена" />
                                <Button onClick={handleOk} title="Ок" />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

type PropsType = {
    openModal: boolean
    content: string
    onOk: () => void
    onCancel: () => void
}

export default Modal;
