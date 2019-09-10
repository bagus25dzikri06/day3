//Program Ubah Kata
function ubahHuruf(kata) {
   var abjad = 'abcdefghijklmnopqrstuvwxyz'
   var kataBaru = ''

   for (var angka = 0; angka < kata.length; angka++) {
      for (var num = 0; num < abjad.length; num++) {
         if (kata[i] === abjad[j]) {
            kataBaru = kataBaru + abjad[j + 1]
            if (kata[i] === 'z') {
               kataBaru = kataBaru + ' a'
            }
         }
      }
   }
   return kataBaru
}
