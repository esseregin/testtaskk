type AttributesType = {
    location: {
        latitude: string
        longitude: string
    },
    alias: string
    timeZone: string
    name: string
    distance: string
}

export type CityType = {
    id: string
    type: string
    structure: string
    link: string
    attributes: AttributesType
}

