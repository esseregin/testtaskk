import {CinemaType} from "./cinema";
import {CityType} from "./cities";

export type FilterType = {
    location: {
        latitude: "",
        longitude: "",
    },
    city: "1",
    sorting: "title"
}

export type StoreType = {
    cinema: CinemaType[],
    cities: CityType[],
    filter: FilterType
}
