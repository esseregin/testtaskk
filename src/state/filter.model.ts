import { types } from "mobx-state-tree"

const  CitiesAttributeLocation = types.model({
    latitude: types.string,
    longitude: types.string,
})

export const Filters = types.model({
    city: types.string,
    sorting: types.string,
    location: CitiesAttributeLocation
})

