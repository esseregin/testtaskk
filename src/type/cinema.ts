import { SubwayType } from "./subway";

type AttributesType = {
    hasSchedules: string | number
    city: {
        id: string,
        alias: string
        name: string
        region_name: string
    },
    address: string
    isAdv: string | number
    isSale: string | number
    isFave: string | number
    location: {
        latitude: string
        longitude: string
    },
    subway: SubwayType[]
    mall: string
    title: string
    network: {
        id: string
        alias: string
        name: string
    }
    shortTitle: string
    labels: any,
    goodies: string[]
    distance: string
}

export type CinemaType = {
    id: string
    type: string
    structure: string
    link: string
    attributes: AttributesType
}

