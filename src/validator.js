const validator = {
  isValid: function (num) {
    const reverseNum = num.split('').reverse(); //split convierte string en array, reverse lo reversa.
    //console.log('Esta es la reversa del número ', reverseNum);
    let sumaTotal=0;
    let num1=0;
    let num2=0;
    // Obteniendo los dígitos que están en posición par, multiplicarlos x 2
    for (let i = 0; i < reverseNum.length; i++ ){
      let digitosPares = parseInt (reverseNum[i]);

      if ((i+1)%2 === 0) {
        digitosPares = digitosPares*2; 
        //console.log('Este es un digito ubicado en posición par multiplicado por 2 ',digitosPares);

        if (digitosPares>9) {
          num1 = digitosPares.toString().charAt(0);
          num2 = digitosPares.toString().charAt(1);
          //console.log('Digitos a sumar ', num1, num2);
          digitosPares = parseInt(num1) + parseInt(num2);
        }
      }
      sumaTotal += digitosPares;
      //console.log('Esta es la suma total '+sumaTotal);
    }
    //Verificamos si la suma de los digitos es divisible entre 10
    if (sumaTotal % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function (num) {
    let acumulador = num;
    if (num.length>4){
      const simbNum = '#'.repeat(num.length-4);
      const mostNum = num.substring(num.length-4);
      acumulador = simbNum + mostNum;
    }
    return acumulador;
  }
}
export default validator;
