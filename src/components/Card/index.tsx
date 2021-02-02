import React from "react";
import SubwayList from "../SubwayList";
import { SubwayType } from "../../type/subway";
import "./style.css"

const Card: React.FC<PropsType> = ({
                                       title,
                                       shortTitle,
                                       address,
                                       mall,
                                       subway,
                                       labels}) => {
    return(
        <div className="card card-grid">
            <div className="card-title grid-title" >{ shortTitle ? shortTitle : title }</div>
            <div className="card-address grid-address" >{ mall ? mall : address}</div>
            <div className="card-subway grid-subway" >
                <SubwayList list={subway} />
            </div>
            <div className="card-label grid-label" >
                {
                    labels.length > 0 && labels.map(item => item.type === "text" && (
                        <label className="card-label-item" key={item.text} >
                            {item.text}
                        </label>
                    ))
                }
            </div>
            <div className="card-add-favorites grid-favorites" >+</div>
        </div>
    )
}

type PropsType = {
    title: string,
    shortTitle: string,
    mall: string,
    address: string,
    subway: SubwayType[]
    labels: {text: string, type: string}[]
}

export default Card;
