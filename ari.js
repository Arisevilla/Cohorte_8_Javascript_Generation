//No cambiar el nombre de la función ordenarNumeros

function ordenarNumeros(num1,num2,num3) {
    let numeros = [num1,num2,num3];
    numeros.sort();
    numeros.reverse();
    let mayor = numeros[0];
    let centro = numeros[1];
    let menor = numeros[2];
  
    if(mayor === centro && centro === menor){
      return ("Los números son iguales");
    } else {
      console.log(+mayor);
      console.log(+centro);
      console.log(+menor);
    }  
    
  
  
  
  
    
  // No modificar el código debajo de esta línea
    return {
      mayor,
      centro,
      menor,
      ordenMayorAMenor: [mayor, centro, menor],
      ordenMenorAMayor: [menor, centro, mayor],
    };
  }
  
  module.exports = ordenarNumeros;