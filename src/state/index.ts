import { types, onSnapshot } from "mobx-state-tree"
import { getCinemas, getCities } from "../api";
import { Cinema } from "./sinema.model";
import { Cities } from "./cities.model";
import { Filters } from "./filter.model";
import { CinemaType } from "../type/cinema";
import { CityType } from "../type/cities";
import { StoreType } from "../type/state";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";


export const RootStore = types.model({
    cinema: types.optional(types.array(Cinema), []),
    filter: Filters,
    cities: types.optional(types.array(Cities), []),
})
    .views(self => ({
        get quantityCities() {
            return self.cities.length
        },

        get selectedCity() {
            let result = self.cities.find(item => item.id === self.filter.city)
            return result ? result.attributes.name : null
        }
    }))
    .actions((self:any)  => ({
        fetchCinemasLoading(start: number) {
            let limit = 10
            let params = {
                city: self.filter.city,
                sort: self.filter.sorting,
                limit: limit,
                rangeStart: start*limit,
                ...self.filter.location,
            }

            getCinemas(params).then(
                self.fetchCinemasSuccess,
                self.fetchCinemasError
            )
        },
        fetchCinemas() {
            self.cinema= []
            let limit = 10
            let params = {
                city: self.filter.city,
                sort: self.filter.sorting,
                limit: limit,
                rangeStart: 0,
                ...self.filter.location,
            }

            getCinemas(params).then(
                self.fetchCinemasSuccess,
                self.fetchCinemasError
            )
        },
        fetchCinemasSuccess(response: { data: { data: CinemaType[] }}) {
            self.cinema.push(...response.data.data)
        },
        fetchCinemasError(error: any) {
            console.error("Failed to fetch cinema", error)
        },

        fetchCities() {
            self.cities = []

            getCities()
                .then(self.fetchCitiesSuccess)
                .catch(self.fetchCitiesError)
        },
        fetchCitiesSuccess(response: { data: { data: CityType[] }}) {
            self.cities = response.data.data
        },
        fetchCitiesError(error: any) {
            console.error("Failed to fetch cities", error)
        },

        setFilterCity(cityId: number){
            self.filter.city = cityId
        },

        setSorting(value: string, params?:  { latitude: string, longitude: string }){
            self.filter.sorting = value
            if (params){
                self.filter.location = params
            }
        },
        }
))

let initialState: StoreType = {
    cinema: [],
    cities: [],
    filter: {
        location: {
            latitude: "",
            longitude: "",
        },
        city: "1",
        sorting: "title"
    }
}

let storage:StoreType  = getLocalStorage("cinema")

if (storage) {
    if (RootStore.is(storage)){
        initialState = storage
    }
}

export const store = RootStore.create(initialState)

onSnapshot(store, snapshot => {
    setLocalStorage("cinema",snapshot)
})
