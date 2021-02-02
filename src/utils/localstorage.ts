
export const getLocalStorage  = (name: string) => {
    return JSON.parse(localStorage.getItem(name) as string)
}

export const setLocalStorage  = <T>(name: string, value: T) => {
    return localStorage.setItem(name, JSON.stringify(value))
}
