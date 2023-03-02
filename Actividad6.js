/* Tarea 1. Calcular la tarifa diaria dada una tarifa por hora*/

//dayRate(89);
// => 712


function dayRate(dias) {
    const diastot = dias * 8;
    return diastot
 }
 
 document.write("La tarifa diaria por hora es = ", dayRate(89));

 document.write("<br>")

 /* Tarea 2. Calcular el número de días de trabajo dado un presupuesto fijo*/

 //daysInBudget(20000, 89);
// => 28

 function daysInBudget(presupuesto, dias) {
    const horastot = dias * 8;
    const diastota = Math.floor(presupuesto / horastot);
    return diastota;
 }
 
 document.write("El numero de dias de trabajo dado presupuesto fijo es = ", daysInBudget(20000, 89));

 document.write("<br>")

  /* Tarea 3. Calcule la tasa de descuento para grandes proyectos*/

  //priceWithMonthlyDiscount(89, 230, 0.42);
// => 97972
 

  function priceWithMonthlyDiscount(horatarif, dias, tasadescuent) {
    
    let meses = Math.floor(dias/22);
    let pormes = dayRate(horatarif) * 22;
    let desctmeses = pormes * meses - pormes * meses * tasadescuent;
    let diasquedan = dayRate(horatarif) * (dias % 22);
    
   if (tasadescuent === 0 ){
    return Math.round(dayRate(horatarif) * dias);

   }else{
    return Math.ceil(desctmeses + diasquedan);
   }
 }
 
 document.write("La tasa de descuento para grandes proyectos es de: = ", priceWithMonthlyDiscount(89, 230, 0.42));




