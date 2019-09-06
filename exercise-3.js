//Nilai median dalam suatu array
function cariMedian(arr) {
   /* Mengurutkan array */
   arr.sort()

   for (var angka = 0; angka < arr.length; angka++) {
      /* Membagi indeks array */
      var bagiIndeks = arr.length / 2
      var sisaBagiIndeks = arr.length % 2
      
      /* Menentukan nilai tengah berdasarkan hasil bagi dan sisa indeks */
      if (sisaBagiIndeks == 0) {
         return (arr[bagiIndeks - 1] + arr[bagiIndeks]) / 2
      } else {
         return arr[Math.floor(bagiIndeks)]
      }
   }
}
