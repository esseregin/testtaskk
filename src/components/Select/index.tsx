import React, { useEffect, useState, useRef } from "react";
import "./style.css"

type PropsType = {
    onSelected: (value: string) => void
    selectOptions: any[]
}

const Select: React.FC<PropsType> = ({ onSelected, selectOptions}) => {

    const [openOptions, setOpenOptions] = useState(false)

    const [filterOptions, setFilterOptions] = useState<any[]>([])
    const [filterSearch, setFilterSearch] = useState<string | null>(null)

    useEffect(() => {
        setFilterOptions(selectOptions)
    }, [selectOptions])

    useEffect(() => {
        let result = selectOptions
        if (filterSearch){
            result = selectOptions.filter(
                (item) =>
                    item.attributes.name.toLocaleLowerCase()
                        .includes(filterSearch.toLocaleLowerCase())
            )
        }
        setFilterOptions(result)
    }, [filterSearch])

    const handleSearchFocus = () => {
        setOpenOptions(true)
    }

    const handleOptionClose = (event: any) => {
        event.target.blur()
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterSearch(event.target.value)
    }

    const handleOptionClick = (item: any) => {
        onSelected(item.id)
        setOpenOptions(false)
    }

    return (
        <div onMouseLeave={handleOptionClose} className="select-wrapper">
        <div className="search" key={"search"}>
            <input
               type="text"
               placeholder="Поиск"
               onFocus={handleSearchFocus}
               onChange={handleSearchChange}
            />
        </div>
        <div className="options" key={"options"}>
            {
                openOptions && filterOptions.length > 0 && filterOptions.map(item => (
                    <div key={item.value} onClick={handleOptionClick.bind(null,item)}>
                        {item.attributes.name}
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Select;
