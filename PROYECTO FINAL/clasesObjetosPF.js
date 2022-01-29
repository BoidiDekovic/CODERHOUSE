class Restaurant{
    constructor(id,name, direction, phono,){
        this.id = id
        this.name = name
        this.direction = direction
        this.phono = phono
     
    }

    seleccionarRestaurante(){
        // Elegir Restaruante
    }
}


//PRIMER RESTAURANTE COMIDA PERUANA

const restaurant1 = new Restaurant ( 1 , "Comida Peruana" , "Callao 1490" , 1147963589)
//COMIDAS
const causa = { name: "Causa Limenia " , price: 1250 , preparation : "LARECETA.txt", image : "LAIMAGEN.jpg"}
const ceviche = { name: "Ceviche" , price: 1000 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const chaufa = { name: "Chaufa" , price: 900 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const peruviansFoods = [causa, ceviche,chaufa]

// SEGUNDO RESTAURANTE COMIDA ARMENIA

const restaurant2 = new Restaurant (2 , "Comida Aremnia," , "Corrientes 1240", 1152369974)
//COMIDAS
const chiken = {name: "Chiken" , price: 1230 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const hummus =  {name: "Hummus" , price: 650 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const falafel =  {name: "Falafel" , price: 1300 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const armenianFoods = [chiken, hummus, falafel]

// TERCER RESTAURANTE COMIDA CROATA 

const restaurant3 = new Restaurant (3,"Comida Croata" , "Federico Lacroz 3149" , 1152369874)
//COMIDAS
const pulpoCroata = {name: "Pulpo Croata" , price: 1800 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const kvarner =  {name: "Kvarner" , price: 1350 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const trufas =  {name: "Trufas" , price: 600 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const croatiansFoods = [pulpoCroata, kvarner,trufas]

//CUARTO RESTAURANTE COMIDA ITALIANA

const restaurant4 = new Restaurant(4,"Comida Italiana" , "Forest 5400" , 1112468977)
//COMIDAS
const lazania = {name: "lazania" , price: 1800 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const espagetti =  {name: "Espagetti Tradicional" , price: 1200 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const bolsaDeArroz =  {name: "Bolsas de Arroz Italianas" , price: 650 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const italianasFoods = [lazania,espagetti,bolsaDeArroz]

// QUINTO RESTAURANTE COMIDA ARGENTINA

const restaurant5 = new Restaurant(5,"Comida Argentina" , "Avellenda 1230" , 1125367989)
//COMIDAS
const parrilla = {name: "Parilla" , price: 1800 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const locro =  {name: "Locro" , price: 1200 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const empanadas =  {name: "Empanadas Saltenias" , price: 600 , preparation: "LARECETA.txt", image : "LAIMAGEN.jpg"}
const argentiniansFoods = [parrilla,locro,empanadas]


