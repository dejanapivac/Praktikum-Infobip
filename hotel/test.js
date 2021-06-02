let hrana = [
    {food: 'krastavci', cat: "povrce"},
    {food: 'big Mac', cat: "fast food"},
    {food: 'brokula', cat: "povrce"},
    {food: 'jabuka', cat: "voce"},
]

let rijeci = 



// hrana.reduce((acc, value) => {
//     if(!acc[value.cat]){
//         acc[value.cat]= [];
//     }

//     if(value.food.includes("c")){
//         acc[value.cat].push(value.food);
//         console.log(acc);        
//     }
//     return acc;
    
// }, {});

// vraca string ''krastavci i big Mac i brokula i jabuka"

hrana.reduce((acc,value)=>{
    if(acc['food']){
        return acc['food'] + ' i ' + value['food']; //return zavrsi obavljanje funkcije i vrati sto treba, a ako ne ude u if onda ispise drugi return
    }
    return acc + " i " + value['food'];
    
})

console.log(
hrana.reduce((acc,value)=>{
    if(acc == ''){
        return value['food']; //return zavrsi obavljanje funkcije i vrati sto treba, a ako ne ude u if onda ispise drugi retur      
    }
    return acc + " i " + value['food'];
    
}, '')

//1. it -> krastavci i big Mac -> ude u if jer je true i odradi prvi return
//2. it -> krastavci i big mac i brokula
//3. it -> krastavci i big mac i brokula i jabuka

)

const map = hrana.map((x) =>
    x['food']
)
console.log(map);
