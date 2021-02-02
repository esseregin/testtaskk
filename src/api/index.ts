import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.kinohod.ru/api/restful/v1/'
});


export const getCities = async () => {
    return await instance.get('cities')
}

type TypeParams = {
    city: number
    sort: string
    latitude?: string
    longitude?: string
    limit: number
    rangeStart?: number
}

export const getCinemas = async (params: TypeParams) => {
    return await instance.get('cinemas', { params })
}

