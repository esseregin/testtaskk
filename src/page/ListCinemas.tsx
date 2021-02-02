import React, {useEffect, useState} from "react";
import { observer } from "mobx-react";
import Sorting from "../components/Sorting";
import Filters from "../components/Filters";
import Card from "../components/Card";
import "./style.css"

const ListCinemas: React.FC<any> = observer(({store}) => {

    const [scrollStep, setScrollStep] = useState(0)

    useEffect(() => {
        if (scrollStep) {
            store.fetchCinemasLoading(scrollStep)
        }
    }, [scrollStep])

    useEffect(() => {
        if (store.quantityCities === 0){
            store.fetchCities()
        }
    },[])

    useEffect(() => {
        store.fetchCinemas()
    },[store.filter.city, store.filter.sorting])


    const onScrollList = (event: any) => {
        let step = 300;
        let result = Math.trunc(event.target.scrollTop / step )

        if (result > scrollStep){
            setScrollStep(result)
        }
    }

    return(
        <div className="wrapper">
            <div className="naw">
                <Filters
                    selected={{
                        city: store.selectedCity
                    }}
                    onChange={store.setFilterCity}
                    filter={{
                        city: store.cities.length > 0 ? store.cities : []
                    }}
                />
                <Sorting
                    selected={store.filter.sorting}
                    sorting={[
                        {label: "названию", value: "title"},
                        {label: "расстоянию", value: "distance"},
                    ]}
                    onChange={store.setSorting}
                />
            </div>
            <div className="list" onScroll={onScrollList} >
                {
                    store.cinema.length > 0 && store.cinema.map((item: any) => (
                        <Card key={item.id + item.link} {...item.attributes}/>
                    ))
                }
            </div>
        </div>
    )
})

export default ListCinemas;
