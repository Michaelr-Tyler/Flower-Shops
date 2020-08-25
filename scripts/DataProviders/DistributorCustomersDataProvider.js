let distributorCustomers = []

export const useDistributorCustomers = () => distributorCustomers.slice()

export const getDistributorCustomers = () => {
    return fetch("http://localhost:8088/distributorCustomers")
        .then(res => res.json())
        .then(apiData => distributorCustomers = apiData)
}