
//My variables
// var left = 0;
// var up = 150;
var counter = 0;

var storedHospitals = localStorage.getItem("hospitals");
var hospitalsArray = JSON.parse(storedHospitals);
var storedDevices = localStorage.getItem('devices');
var devicesArray = JSON.parse(storedDevices);





// $(document).ready(function(){

//  displayHospitals()


//  $("#hospitalsearch").keyup(function(event){
//     if(event.keyCode == 13){
//         doSearch("#q.value")
//         console.log('return worked')
//     }
// });
//  })
var search ;
$(document).ready(function(){
	
    $('#q').keypress(function(e){
      if(e.keyCode==13)
      {
      	search = $('#q').val()
      	console.log(search)
      	counter += 1;
      	doSearch(search);
        return false;
      	
      
      	// doSearch("#q.value")
      }
    });


});

// function displayHospitals() {
//   if (hospitalsArray != null)
//   {
//   for (var i = 0; i <= (hospitalsArray.length); i++)
//   {

// 	  html = ""
// 		html += '<option value="'+ hospitalsArray[i] + '"'
		
// 		html += '>';
		
// 	 $("#hospitallist").append(html);

//   	}
//   }
// }
  
function doSearch(s) {
    console.log("hi");
    var searchedhospitals = s  ;   
    console.log(searchedhospitals);  
    //hospitalsArray.push(searchedhospitals)
    localStorage.setItem('hospitals', JSON.stringify(hospitalsArray));
    if (searchedhospitals == "St. Boniface"){
      window.location= 'file:///Users/anthonywohns/Dropbox/cs179/fireflyproject/firefly/staticwebsitecode/HTML/hospital.html?q=jhkdfs'
  
    }
    else if (searchedhospitals == "Bunia General Hospital")
    {
      window.location= 'file:///Users/anthonywohns/Dropbox/cs179/fireflyproject/firefly/staticwebsitecode/HTML/hospital2.html?q=jhkdfs'

    }
    else if (searchedhospitals == "Hanoi General Hospital")
    {
      window.location= 'file:///Users/anthonywohns/Dropbox/cs179/fireflyproject/firefly/staticwebsitecode/HTML/hospital3.html?q=jhkdfs'

    }

}

// function Redirect() {
// 	window.location= 'http:www.google.com'
// }


