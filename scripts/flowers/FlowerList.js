import { FlowerComponent } from "./FlowerComponent.js"
import { getFlowers, useFlowers } from "./FlowersDataProvider.js"

const contentTarget = document.querySelector(".flowers")

const flowers = []

const render = () => {
    contentTarget.innerHTML = flowers.map((flowerObj) => {
        FlowerComponent(flowerObj)
    })
}

export const flowersList = () => {
    getFlowers()
        .then(() => {
            flowers = useFlowers()
            render()
        })
}