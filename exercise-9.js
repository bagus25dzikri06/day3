/*Program Cek AB*/
function checkAB(str) {
   var x = str.indexOf('a')
   var y = str.indexOf('b')

   if ((x - y == 4) || (y - x == 4)) {
      return true
   } else {
      return false
   }
}
