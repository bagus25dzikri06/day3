//Program object biodata (Change Me)
function changeMe(arr) {
   const d = new Date()
   var biodata = {}

   for (var i = 0; i < arr.length; i++) {
      biodata.firstName = arr[i][0]
      biodata.lastName = arr[i][1]
      biodata.gender = arr[i][2]
      if (arr[i].length == 4) {
         biodata.age = d.getFullYear() - arr[i][3]
      } else {
         biodata.age = 'Invalid Birth Year'
      }

      console.log(i+1 + '. ' + biodata.firstName + ' ' + biodata.lastName + ':')
      console.log(biodata)
   }
}
