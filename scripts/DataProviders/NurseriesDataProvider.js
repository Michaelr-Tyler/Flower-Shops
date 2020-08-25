let nurseries = []

export const useNurseries = () => nurseries.slice()

export const getNurseries = () => {
    return fetch("http://localhost:8088/nurseries")
        .then(res => res.json())
        .then(apiData => nurseries = apiData)
}