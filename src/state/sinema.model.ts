import { types } from "mobx-state-tree"
import { getCinemas } from "../api";

const CinemaAttributeLocation = types.model({
    latitude: types.string,
    longitude: types.string,
})

const CinemaAttributeSubway = types.model({
    id: types.string,
    color: types.string,
    name: types.string,
    distance: types.string
})

const CinemaAttributeCity = types.model({
    id: types.string,
    alias: types.string,
    name: types.string,
    region_name: types.string
})

const CinemaAttributeNetwork = types.model({
    id: types.string,
    alias: types.string,
    name: types.string,
})

const CinemaAttributeLabelsText = types.model({
    text: types.string,
    type: types.string,
})

const CinemaAttributeLabelsIcon = types.model({
    slug: types.string,
    type: types.string,
})

const CinemaAttributes = types.model({
    hasSchedules: types.union(types.string, types.number),
    city: CinemaAttributeCity,
    address: types.string,
    isAdv: types.union(types.string, types.number),
    isSale: types.union(types.string, types.number),
    isFave: types.union(types.string, types.number),
    location: CinemaAttributeLocation,
    subway: types.optional(types.array(CinemaAttributeSubway), []),
    mall: types.string,
    title: types.string,
    network: CinemaAttributeNetwork,
    shortTitle: types.string,
    labels: types.optional(types.array(types.union(CinemaAttributeLabelsText, CinemaAttributeLabelsIcon)), []),
    goodies: types.optional(types.array(types.string), []),
    distance: types.string
})


export const Cinema = types.model({
    id: types.string,
    type: types.string,
    structure: types.string,
    link: types.string,
    attributes: CinemaAttributes
})

