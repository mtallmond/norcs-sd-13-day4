const tacoTruck = {
    revenue: 300,
    expenses: 100,
    profit: profit
}

const lemonadeStand = {
    revenue: 50,
    expenses: 15,
    profit: profit
}

const hotDogStand = {
    revenue: 500,
    expenses: 1500,
    profit: profit
}
const girlScoutCookies = {
    revenue: 6000000,
    expenses: 150,
    profit: profit
}


function profit(){
    return this.revenue - this.expenses
}


tacoTruck.profit()
lemonadeStand.profit()            
hotDogStand.profit()
girlScoutCookies.profit()     
//vital role
debugger
function playSound(){
    console.log(this.sound)
}

let dog = {
    sound: 'Arrrf!',
    playSound: playSound
}

let cat = {
    sound: 'Meoowww!',
    playSound: dog.playSound
}

dog.playSound()
