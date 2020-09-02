import { getRetailers, useRetailers } from "./DataProviders/RetailersDataProvider.js"
import { getDistributors, useDistributors } from "./DataProviders/DistibutorsDataProvider.js"
import { getNurseries, useNurseries } from "./DataProviders/NurseriesDataProvider.js"
import { getFlowers, useFlowers } from "./flowers/FlowersDataProvider.js"
import { getNurseryFlowers, useNurseryFlowers } from "./DataProviders/NurseryFlowersDataProvider.js"
import { getNurseryDistributors, useNurseryDistributors } from "./DataProviders/NurseryDistributorsDataProvider.js"
import { useDistributorRetailers, getDistributorRetailers } from "./DataProviders/DistributorRetailersDataProvider.js"
import { retailerComponent } from "./RetailersComponent.js"
const contentTarget = document.querySelector(".retailerInfo")

let retailers = []
let distributors = []
let nurseries = []
let flowers = []
let nurseryFlowers = []
let distributorRetailers = []
let nurseryDistributors = []

export const retailerList = () => {
    getRetailers()
        .then(getDistributors)
        .then(getNurseries)
        .then(getFlowers)
        .then(getNurseryFlowers)
        .then(getNurseryDistributors)
        .then(getNurseryFlowers)
        .then(getDistributorRetailers)
        .then(() => {
            retailers = useRetailers()
            distributors = useDistributors()
            nurseries = useNurseries()
            flowers = useFlowers()
            nurseryFlowers = useNurseryFlowers()
            distributorRetailers = useDistributorRetailers()
            nurseryDistributors = useNurseryDistributors()
            render()
        })
}

const render = () => {
    const allFlowerRetailersInfo = retailers.map(
        (currentRetailer) => {
            const retailDistibutorRelationships = distributorRetailers.filter(
                (crdr) => {
                    return currentRetailer.id === crdr.retailerId
                })

            const matchingDistributors = retailDistibutorRelationships.map(
                currentRelationship => distributors.find(
                    distributor => currentRelationship.distributorId === distributor.id
                )
            )


            debugger
            retailerComponent(currentRetailer, matchingDistributors)
        }
    )


    contentTarget.innerHTML = `<h1> Flower shops</h1>
    ${allFlowerRetailersInfo.join("")}
    `
}