
//My variables
var left = 0;
var up = 150;
var counter = 0;

var storedHospitals = localStorage.getItem("hospitals");
var hospitalsArray = JSON.parse(storedHospitals);
var storedDevices = localStorage.getItem('devices');
var devicesArray = JSON.parse(storedDevices);



$(document).ready(function(){

 displayHospitals()


 $("#hospitalsearch").keyup(function(event){
    if(event.keyCode == 13){
        doSearch("#q.value")
        console.log('return worked')
    }
});
 })

function displayHospitals() {
  if (hospitalsArray != null)
  {
  for (var i = 0; i <= (hospitalsArray.length); i++)
  {

	  html = ""
		html += '<option value="'+ hospitalsArray[i] + '"'
		
		html += '>';
		
	 $("#hospitallist").append(html);

  	}
  }
}
  
function doSearch(s) {
    console.log("hi");
    var searchedhospitals = s  ;   
    console.log(searchedhospitals)    ;  
    localStorage.setItem('hospitals', JSON.stringify(searchedhospitals));
    Redirect();

}

function Redirect() {
	window.location= 'http:www.google.com'
}


