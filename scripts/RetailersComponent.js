export const retailerComponent = (retailer, distributor, nursery, flower) => {
        return `
    <article class="retailer">
        <h2 class="retailer__name">${retailer.name}</h2>
        <div class="retailer__address">Address: ${retailer.address} ${retailer.city}, ${retailer.state}</div>
        <div class="retailer__distibutors"> Supplied by: 
            <ul>
                ${distributor.map(d=> `<li>${d.name} Supplied by: <ul>${nursery.map(n=> `<li>${n.name}</li>`)}</ul></li>`)}
            </ul>
        </div>
        <div class="retailer__flowers">Flowers sold:
            <ul>
                ${flower.map(f => `<li>${f.name}</li>`)}
            </ul>
        </div>
    </article>
    `
}