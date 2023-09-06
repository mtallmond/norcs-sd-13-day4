let numbers = [4, 6, 10]

//Sum up the numbers using for loop
//Sum up the numbers using for each


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
//Return a list of flight destinations to make it easy to display
let flightsUl = document.querySelector("#flights")

//How would we exlude flights more expensive than $300?
//How would we exlude flights that have stops?