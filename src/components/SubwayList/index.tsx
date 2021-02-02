import React, {useEffect, useState} from "react";
import { SubwayType } from "../../type/subway";
import "./style.css"

type PropsType = {
    list: SubwayType[]
}

const SubwayList: React.FC<PropsType> = ({list}) => {

    return (
        <div  className="subway-list">
            { list.length > 0 && list.map((item) => (
                <div className="subway-item" key={item.id}>
                    <i className="subway-circle" style={{borderColor: `#${item.color}`}}/>
                    <span>{ item.name }</span>
                </div>
            ))}
        </div>
    )
}

export default SubwayList;
