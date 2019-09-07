/* Mencari Nilai Modus */
function cariModus(arr) {
   var bilModus = [], indeksSama = false
   
   for (var i = 0; i < arr.length; i++) {
     for (var j = i + 1; j < arr.length; j++) {
       if (arr[i] == arr[j]) {
          indeksSama = true
          bilModus.push(arr[i])
       } else {
          indeksSama = false
       }
     }
   }

   if ((bilModus[0] === undefined) || (bilModus[0] === indeksSama)) {
      return -1
   } else {
      return bilModus[0]
   }
}
