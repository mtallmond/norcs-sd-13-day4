let numbers = [4, 6, 10]
let total = 0
//Sum up the numbers using for loop
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    total = total + numbers[index]
}
console.log(total)

//Sum up the numbers using for each
console.log("output from forEach")
total = 0
numbers.forEach(function(e){
    console.log(e)
    total = total + e
})
console.log(total)



let flights = [
    {
        seatsAvailable: ["26A", "26D", "24B"],
        firstClass: false,
        snacks: ["Ranch doritoes", "apple juice", 'peanuts'],
        announcenments: [
            "Welcome to flight 8912 from Houston to Kansas",
            "Let's get everyone seated so we can prepare for takeoff"
        ],
        durationInMinutes: 260,
        flightNumber: "United-8912",
        destination: "Kansas",
        price: 532
    },
    
    {
        seatsAvailable: ["26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C"],
        row: "26",
        firstClass: false,
        snacks: ["Hot cheetos", "Hot chocolate", 'Cold coffee'],
        announcenments: [
            "Welcome to flight 2445 from Houston to Denver",
            "Let's get everyone seated so we can prepare for takeoff"
        ],
        durationInMinutes: 260,
        flightNumber: "Delta-2445",
        destination: 'denver',
        price: 274
    },
    {
        seatsAvailable: ["26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C"],
        row: "26",
        firstClass: false,
        snacks: ["Hot cheetos", "Hot chocolate", 'Cold coffee'],
        announcenments: [
            "Welcome to flight 1312 from Houston to Dallas",
            "Let's get everyone seated so we can prepare for takeoff"
        ],
        durationInMinutes: 260,
        flightNumber: "Delta-1312",
        destination: 'dallas',
        price: 189
    },
    {
        seatsAvailable: ["26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C"],
        row: "26",
        firstClass: false,
        snacks: ["Hot cheetos", "Hot chocolate", 'Cold coffee'],
        announcenments: [
            "Welcome to flight 7890 from Houston to London",
            "Let's get everyone seated so we can prepare for takeoff"
        ],
        durationInMinutes: 890,
        flightNumber: "United-7890",
        destination: 'london',
        price: 274,
        stops: [{airport: "LaGuardia", durationInMinutes: 90 }]
    }
]
//Sum up the flights prices
//go through list of flight objects and add up the prices
let flightTotal = 0;
flights.forEach(function(flight){
    console.log(flight)
    flightTotal = flightTotal + flight.price
    
})
console.log(flightTotal)

//list out destination with .forEach
flights.forEach(function(flight){
    console.log(flight.destination)
})



//Return a list of flight destinations to make it easy to display
let destinations = []
for (let index = 0; index < flights.length; index++) {
    destinations.push(flights[index].destination);
    
}
console.log(destinations)
//using map to return destinations
let d2 = flights.map(flight => flight.destination)
console.log("output from map", d2)

let flightsUl = document.querySelector("#flights")

//Filter only to one brand of dog food
let products = [
    {
        name: "pedigree dog food 30lbs",
        brand: "pedigree"
    },
    {
        name: "blue ribbon dog food 25lbs",
        brand: "blue ribbon"
    }
]

let filteredResults = []
let selectedBrand = "blue ribbon"
for (let index = 0; index < products.length; index++) {
    
    if(products[index].brand === selectedBrand){
        filteredResults.push(products[index])
    }
}
console.log("forloop, filter", filteredResults)

let f2 = products.filter(p => p.brand === selectedBrand)
console.log("filter", f2)


//How would we exlude flights more expensive than $300?
//How would we exlude flights that have stops?

//Most of our other examples were code-alongs in the activities in canvas