import { types } from "mobx-state-tree"

const  CitiesAttributeLocation = types.model({
    latitude: types.string,
    longitude: types.string,
})

const CitiesAttributes = types.model({
    distance: types.string,
    location: CitiesAttributeLocation,
    alias: types.string,
    timeZone: types.string,
    name: types.string,
})


export const Cities = types.model({
    id: types.string,
    type: types.string,
    structure: types.string,
    link: types.string,
    attributes: CitiesAttributes
})

