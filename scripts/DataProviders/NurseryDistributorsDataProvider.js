let nurseryDistributors = []

export const useNurseryDistributors = () => nurseryDistributors.slice()

export const getNurseryDistributors = () => {
    return fetch("http://localhost:8088/nurseryDistributors")
        .then(res => res.json())
        .then(apiData => nurseryDistributors = apiData)
}