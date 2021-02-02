import React, {useState} from "react";
import { CityType } from "../../type/cities";
import Select from "../Select";
import "./style.css"

const Filters: React.FC<PropsType> = ({filter, selected, onChange}) => {

    const [open, setOpen] = useState(false)

    const handleChange = (value: string) => {
        onChange(value)
        setOpen(value => !value)
    }

    const handleClick = () => {
        setOpen(value => !value)
    }

    return(
        <div className="filters">
            <div className="filter-city">
                {
                    !open && (
                        <div className={"filter-city-value"} onClick={handleClick}>
                            {
                            filter.city.length > 0 &&
                            selected.city
                            }
                        </div>
                    )
                }
                {
                    open && (
                        <Select
                            onSelected={handleChange}
                            selectOptions={filter.city.length > 0 ? filter.city : []}
                        />
                    )
                }
            </div>
        </div>
    )
}


type PropsType = {
    filter: {
        city: CityType[]
    }
    selected: {
        city: string
    }
    onChange: (value: string) => void
}

export default Filters;
