//Program Tukar Huruf
function tukarBesarKecil(kalimat) {
   var kalimatAlay = ''
   for (var angka = 0; angka < kalimat.length; angka++) {
      if (kalimat[angka] === kalimat[angka].toUpperCase()) {
         kalimatAlay = kalimatAlay + kalimat[angka].toLowerCase()
      } else if (kalimat[angka] === kalimat[angka].toLowerCase()) {
         kalimatAlay = kalimatAlay + kalimat[angka].toUpperCase()
      } else if ((kalimat[angka] === '.') || (kalimat[angka] === ',') || (kalimat[angka] === '-') || (kalimat[angka] === '?') || (kalimat[angka] === '!') || (kalimat[angka] === '...') || (kalimat[angka] === '"') || (kalimat[angka] === '(') || (kalimat[angka] === ')') || (kalimat[angka] === '[') || (kalimat[angka] === ']') || (kalimat[angka] === '/') || (kalimat[angka] === ' ')) {
         kalimatAlay = kalimatAlay + kalimat[angka]
      }
   }
   return kalimatAlay
}
