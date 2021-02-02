import React, { useState } from "react";
import Modal from "../Modal/";
import Notification from "../Notification";
import { TEXT_MODAL } from "../../const";
import { geolocation } from "../../utils/geolocation";
import "./style.css"

const Sorting: React.FC<PropsType> = ({ sorting, selected, onChange}) => {

    const [notifications, setNotifications] = useState<NotificationsType>({ status: false, text: "" })

    const [openModal, setOpenModal] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "title"){
            onChange(event.target.value)
        }else {
            setOpenModal(true)
        }
    }

    const handleModalOnCancel = () => {
        setOpenModal(false)
    }

    const notificationsCancel = () => {
        setNotifications({
            status: false,
            text: ""
        })
    }

    const handleModalOnOk = () => {
        let position: PositionType = geolocation()

        if (position.status && position.coords){
            onChange("distance", position.coords)
        }
        else {
            setNotifications({
                status: true,
                text: position.message
            })
        }
        setOpenModal(false)
    }


    return(
        <>
            <div className="sorting">
                <span>Сортировать по: </span>
                <div className="sorting-list">
                    {
                        sorting.length > 0 && sorting.map(item => (
                            <div key={item.value}>
                                <input
                                    type="radio"
                                    name="sorting"
                                    id={`radio${item}`}
                                    value={item.value}
                                    onChange={handleChange}
                                    checked={selected == item.value}
                                />
                                <label htmlFor={`radio${item}`}>{item.label}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Modal
                openModal={openModal}
                content={TEXT_MODAL}
                onCancel={handleModalOnCancel}
                onOk={handleModalOnOk}
            />
            <Notification
                openNotification={notifications.status}
                content={notifications.text}
                onCancel={notificationsCancel}
            />
        </>
    )
}

type PropsType = {
    selected: string
    sorting: {label: string, value: string}[]
    onChange: (value: string, params?:  { latitude: string, longitude: string }) => void
}

type NotificationsType = { status: boolean, text: string }

type PositionType = { status: boolean, message: string, coords: { latitude: string, longitude: string } | null}

export default Sorting;
