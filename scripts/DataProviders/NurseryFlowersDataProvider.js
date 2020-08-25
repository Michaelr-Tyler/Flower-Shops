let nurseryFlowers = []

export const useNurseryFlowers = () => nurseryFlowers.slice()

export const getNurseryFlowers = () => {
    return fetch("http://localhost:8088/nurseryFlowers")
        .then(res => res.json())
        .then(apiData => nurseryFlowers = apiData)
}