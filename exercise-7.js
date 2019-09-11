/* Program Urut Huruf dari Suatu Kata */
function urutkanAbjad(str) {
    var dataHuruf = []
    for (var angka = 0; angka < str.length; angka++) {
       dataHuruf.push(str[angka])
    }
    return dataHuruf.sort().join("")
}
