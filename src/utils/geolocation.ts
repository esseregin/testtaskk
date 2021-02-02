type PositionType = { latitude: string, longitude: string } | null

export const geolocation = () => {
    let result: {
        status: boolean
        message: string
        coords: PositionType
    } = {
        status: false,
        message: 'Геолокация не поддерживается вашим браузером',
        coords: null
    }
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            result = {
                status: true,
                message: "",
                coords: {
                    latitude: String(position.coords.latitude),
                    longitude: String(position.coords.longitude),
                }
            }
        });
    }

    return result
}
