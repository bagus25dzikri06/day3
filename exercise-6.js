//Program Mencari Digit Perkalian Faktor Paling Sedikit
function digitPerkalianMinimum(angka) {
   var faktorBil = []
   var faktorBil1 = []
   var panjangFaktor = []
  
   /* Faktor-faktor bilangan */
   for (var faktor = 0; faktor <= angka; faktor++) {
      if (angka % faktor == 0) {
         faktorBil.push(faktor)
      }
   }
   
   /* Himpunan string perkalian masing-masing faktor */
   for (var i = 0; i < faktorBil.length / 2; i++) {
      faktorBil1.push(faktorBil[i] + '' + faktorBil[faktorBil.length - 1 - i])
   }
   
   /* Himpunan panjang masing-masing string perkalian beserta urutannya */
   for (var j = 0; j < faktorBil1.length; j++) {
      panjangFaktor.push(faktorBil[j].length)
   }
   panjangFaktor.sort()

   for (var k = 0; k < panjangFaktor.length; k++) {
      if ((panjangFaktor.length == 1) || (panjangFaktor[k] <= panjangFaktor[k + 1])) {
         return panjangFaktor[0]
      }
   }
}
