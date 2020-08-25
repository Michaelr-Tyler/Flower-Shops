let flowers = []

export const useFlowers = () => flowers.slice()

export const getFlowers = () => {
    return fetch("http://localhost:8088/flowers")
        .then(res => res.json())
        .then(apiData => flowers = apiData)
}