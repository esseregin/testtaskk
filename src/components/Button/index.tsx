import React from "react";
import "./style.css"

type PropsType = {
    title: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<PropsType> = ({title, onClick}) => {
    return <button className="button" onClick={onClick}>{title}</button>
}

export default Button;
