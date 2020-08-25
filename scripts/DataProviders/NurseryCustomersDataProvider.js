let nurseryCustomers = []

export const useNurseryCustomers = () => nurseryCustomers.slice()

export const getNurseryCustomers = () => {
    return fetch("http://localhost:8088/nurseryCustomers")
        .then(res => res.json())
        .then(apiData => nurseryCustomers = apiData)
}