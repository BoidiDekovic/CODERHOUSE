
console.log("Bienvenido")
    
let plateOne = new Plate("Asado",1250,true) 
let plateTwo = new Plate("Zorrentino" ,750,true) 
let plateThree = new Plate("Paella" , 850,true)
let plateFour = new Plate("Sushi" , 900, false)
let plateFive = new Plate("Ceviche" , 800, false)

let drinkOne = new Drink("Agua", 200, 30)
let drinkTwo = new Drink("Jugo" , 300 , 30)
let drinkThree = new Drink("CocaCola" , 350 ,10) 
let drinkFour = new Drink("Seven Up", 350 ,3)
let drinkFive = new Drink("Vino",500, 15)

let order = new Order()


order.addPlate(plateOne)
order.addDrink(drinkTwo)