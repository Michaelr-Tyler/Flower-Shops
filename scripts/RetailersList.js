import { getRetailers, useRetailers } from "./DataProviders/RetailersDataProvider.js"
import { getDistributors, useDistributors } from "./DataProviders/DistibutorsDataProvider.js"
import { getNurseries, useNurseries } from "./DataProviders/NurseriesDataProvider.js"
import { getFlowers, useFlowers } from "./DataProviders/FlowersDataProvider.js"
import { getNurseryFlowers, useNurseryFlowers } from "./DataProviders/NurseryFlowersDataProvider.js"
import { getNurseryCustomers, useNurseryCustomers } from "./DataProviders/NurseryCustomersDataProvider.js"
import { useDistributorCustomers, getDistributorCustomers } from "./DataProviders/DistributorCustomersDataProvider.js"
import { retailerComponent } from "./RetailersComponent.js"
const contentTarget = document.querySelector(".retailerInfo")

let retailers = []
let distributors = []
let nurseries = []
let flowers = []
let nurseryFlowers = []
let distributorCustomers = []
let nurseryCustomers = []

export const retailerList = () => {
    getRetailers()
        .then(getDistributors)
        .then(getNurseries)
        .then(getFlowers)
        .then(getNurseryFlowers)
        .then(getNurseryCustomers)
        .then(getNurseryFlowers)
        .then(getDistributorCustomers)
        .then(() => {
            retailers = useRetailers()
            distributors = useDistributors()
            nurseries = useNurseries()
            flowers = useFlowers()
            nurseryFlowers = useNurseryFlowers()
            distributorCustomers = useDistributorCustomers()
            nurseryCustomers = useNurseryCustomers()
            render()
        })
}

const render = () => {
    const allFlowerRetailersInfo = retailers.map(
        (currentRetailer) => {
            const retailDistibutorRelationships = distributorCustomers.filter(
                (crdr) => {
                    return currentRetailer.id === crdr.retailerId
                })
            console.log(typeof(retailDistibutorRelationships))
            console.log("retail distribution relationships coming through", retailDistibutorRelationships)
            const matchingDistributors = retailDistibutorRelationships.map(
                currentRelationship => distributors.find(
                    distributor => currentRelationship.distributorId === distributor.id
                )
            )

            const matchingNurseries = matchingDistributor.map(
                (currentDistributor) => {
                    const distributorNurseryRelationships = nurseryCustomers.filter(
                        (currentDistributorNurseryRelationships) => {
                            return currentDistributor.id === currentDistributorNurseryRelationships.distributorId
                        })
                    const matchedNursery = distributorNurseryRelationships.map(
                        currentNurseryRelationship => nurseries.find(
                            nursery => currentNurseryRelationship.nurseryId === nursery.id
                        )
                    )
                    console.log("This should be distribution nursery relationships type", typeof(distributorNurseryRelationships))
                    console.log("This should be distribution nursery relationships coming through", distributorNurseryRelationships)
                    console.log("Need this", matchedNursery)
                }
            )

            console.log(matchingDistributors)
            console.log(matchingNurseries)
            debugger
            retailerComponent(currentRetailer, matchingDistributors, matchingNurseries)
        }
    )


    contentTarget.innerHTML = `<h1> Flower shops</h1>
    ${allFlowerRetailersInfo.join("")}
    `
}