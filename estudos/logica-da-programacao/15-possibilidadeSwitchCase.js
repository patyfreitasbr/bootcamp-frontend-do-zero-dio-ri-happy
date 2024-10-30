//estrutura de decisao
//switch/case/break/default

// let fruta = "morango"

// switch (fruta){
//         case "laranja":
//         console.log("suco de laranja")
//        break

//         case "banana":
//         case "morango":
//         console.log("vitamina")
//         break  
        
//         case "maça":
//         console.log("suco de maçã")
//         break

//         default:
//         console.log("suco generico")
// }

let fruta = "banana"

switch (fruta){
        case "laranja":
        console.log("suco de laranja")
        console.log("segunda mensagem")
       break

        case "banana":
        case "morango":
        console.log("vitamina " + fruta)
        break  
        
        case "maça":
        console.log("suco de maçã")
        break

        default:
        console.log("suco generico")
}