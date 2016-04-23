//My variables
var left = 0;
var up = 150;
var counter = 0;

var storedHospitals = localStorage.getItem("hospitals");
var hospitalsArray = JSON.parse(storedHospitals);
var storedDevices = localStorage.getItem('devices');
var devicesArray = JSON.parse(storedDevices);

// $(document).ready(function(){
  
function doSearch(s) {
    console.log("hi");
    var searchedhospitals = s  ;   
    console.log(searchedhospitals)    ;  
    localStorage.setItem('hospitals', JSON.stringify(searchedhospitals));
}
 // })
