// FEITO POR MATHEUS SLAMA RIBAS 
// CIENCIA DA COMPUTACAO UFFS


// jS CARRINHO
const calcular = () => {
    tot();
    let nume = Number(document.getElementById("nume").value);
    document.getElementById("resultado").innerHTML ='R$ ' +  nume * 20 ;
 
}   
const calcular1 = () => {
    tot();
    let nume1 = Number(document.getElementById("nume1").value);
    document.getElementById("resultado1").innerHTML = 'R$ ' +  nume1 * 20 ;

}
const calcular2 = () => {
    tot();
    let nume2 = Number(document.getElementById("nume2").value);
    document.getElementById("resultado2").innerHTML = 'R$ ' +  nume2 * 20 ;

}

const tot = (x) => {
    
    let nume = Number(document.getElementById("nume").value);
    let nume1 = Number(document.getElementById("nume1").value); 
    let nume2 = Number(document.getElementById("nume2").value);

    let frt =(20).value;
    
    
    document.getElementById("resultado_total").innerHTML = 'R$ ' + (nume + nume1 + nume2) * 20 ;

    if (x == 20)
    document.getElementById("resultado_total").innerHTML = 'R$ ' + ((nume + nume1 + nume2) * 20) + frt ;

}
