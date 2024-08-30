alert("hola");
let number = 20;
let bandera= true;
alert.call(this, number)

while (bandera!=false){
    let confirmacion= window.confirm("¿Que opinan?");
    if (confirmacion== false){
        console.error("Lo sentimos :( ")
    }else{
        let confirmacion01= window.confirm("claro que f");
        if (confirmacion01==false){
        console.info("Claro que lo eres ajajajaja");
        bandera = false
        }else{
            console.info("Eres el mejor");
            bandera = false
        }
    }
}