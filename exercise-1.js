//Bilangan Prima
function angkaPrima(angka) {
   for (var i = 0; i <= angka; i++) {
      if ((angka == 2) || (angka % 3 !== 0)) {
         return true
      } else {
         return false
      }
   }
}
