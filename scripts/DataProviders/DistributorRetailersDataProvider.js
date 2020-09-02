let distributorRetailers = []

export const useDistributorRetailers = () => distributorRetailers.slice()

export const getDistributorRetailers = () => {
    return fetch("http://localhost:8088/distributorRetailers")
        .then(res => res.json())
        .then(apiData => distributorRetailers = apiData)
}