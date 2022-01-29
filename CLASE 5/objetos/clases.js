class Order {
    constructor() {
        this.plates = {}
        this.drinks = {}
        this.total = 0
    
    }
    addPlate(plate){
      /*  let newOrderPlate = plate.name.toLowerCase()
       
        if( newOrderPlate in this.plates ){
            this.plates[newOrderPlate].subtotal += plate.price
        }else{
            this.plates[newOrderPlate] = {
                name : plate.name,
                subtotal : plate.price 
            }
        }*/
        this.name = plate.name 
        this.price = plate.price

    }

    addDrink(drink){
        let newOrderDrink = drink.name.toLowerCase()
        

        if(newOrderDrink in this.drinks){
            this.drinks[newOrderDrink].subtotal += drink.price
        }else{
            this.drinks[newOrderDrink] = { 
                name : drink.name ,
                subtotal : drink.price
            }
        }
    }
    resume(){
        console.log(`usted pidio: ${this.name} , subtotal : ${this.price    } `)
    }

}
    

class Plate {
    constructor(name, price, available){
        this.name = name.toLowerCase() ;
        this.price = price
        this.available = available ;
    }
}

class Drink {
    constructor(name,price,stock){
        this.name = name.toLowerCase() ;
        this.price = price ;
        this.stock = stock ;
    }
}

class Restaurante {
    constructor(id,name,direction,phono){
        this.id = id
        this.name = name
        this.direction = direction
        this.phono = phono 
    }
}