function myFunction1() {
  let x = document.getElementById("validationServer05").value;
  // If x is Not a Number or less than one or greater than 10
  if (x.length === 10) {
    return true;
  } else {
    alert("Error in phone number");
    console.log(x);
    document.getElementById("validationServer05").focus();
    return false;
  }
}
function myFunction2() {
  //validate the user name
  var firstname = document.getElementById("validationServer01").value;
  var lastname = document.getElementById("validationServer02").value;
  var regexPattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (
    (!regexPattern.test(firstname) && firstname.length <= 3) ||
    lastname.length <= 3
  ) {
    alert("Please enter a valid input");
    document.getElementById("validationServer01").focus();
    return false;
  } else {
    console.log(firstname);
    return true;
  }
}
function isSubmit(e) {
  let isValid1 = myFunction1();
  let isValid2 = myFunction2();
  registrationdata();
  getDataFromLocal();
  swal("Good job!", "You Data is Submitted!", "success");
  if (!isValid1 && !isValid2) {
    alert("error message");
  } 
  else {
    e.preventDefault();
    document.register.reset();
    return false;
  }
}
let userData=[];
var fname=document.getElementById("validationServer01");
var lname=document.getElementById("validationServer02");
var genderel=document.getElementById("validationServer03");
var dobel=document.getElementById("birthday");
var nomineesel=document.getElementById("validationServer11");
var addressel=document.getElementById("validationServer04");
var state=document.getElementById("state");
var city=document.getElementById("city");
var zip=document.getElementById("pin");
var numberel=document.getElementById("validationServer05");
var emailel=document.getElementById("validationServer06");


if(localStorage.getItem("userData")!=null){
userData=JSON.parse(localStorage.getItem("userData"));
}
console.log(userData);

function registrationdata(){
  userData.push({
     username:fname.value+ " " + lname.value,
     gender:genderel.value,
     dob:dobel.value,
     nominees:nomineesel.value,
     address:addressel.value + " " + state.value + " " + city.value + " " + zip.value,
     number:numberel.value,
     email:emailel.value
  });
  var userString=JSON.stringify(userData);
  localStorage.setItem("userData",userString);
}

var tableData=document.querySelector("#table-data")

//fat arrow function
const getDataFromLocal =()=>{
  tableData.innerHTML=" ";
   userData.forEach((data,index)=>{
      tableData.innerHTML += `
    <tr index='${index}'>
          <td>${index+1}</td>
          <td>${data.username}</td>
          <td>${data.gender}</td>
          <td>${data.dob}</td>
          <td>${data.nominees}</td>
          <td>${data.address}</td>
          <td>${data.number}</td>
          <td>${data.email}</td>
          <td>${new Date}</td>
          <td>
          <button class="update" style="outline: none; border:none"><i class="fa-solid fa-pen-to-square" style="padding-right:5px"></i></button>
            <button class="delete" style="outline: none; border:none"><i class="fa-solid fa-trash" style="color: red;" 
            ></i></button>
          </td>
     </tr>`;
   });

   //delete code start
    var i;
    var alldelbtn=document.querySelectorAll(".delete");
    for(i=0;i<alldelbtn.length;i++){
       alldelbtn[i].onclick = function () {
         var tr= this.parentElement.parentElement;
         var id=tr.getAttribute("index");
         swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
             userData.splice(id,1);
         localStorage.setItem("userData",JSON.stringify(userData));
         tr.remove();
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });
        }
    }
 //delete code end

   //start update code 
   var allupdatebtn=document.querySelectorAll(".update");
   for(i=0;i<allupdatebtn.length;i++){
    allupdatebtn[i].onclick = function (){
      var tr= this.parentElement.parentElement;
      var td=tr.getElementsByTagName("TD");
      var index=tr.getAttribute("index");
      var username=td[1].innerHTML;
      var gender=td[2].innerHTML;
      var dob=td[3].innerHTML;
      var nominees=td[4].innerHTML;
      var address=td[5].innerHTML;
      var phoneno=td[6].innerHTML;
      var email=td[7].innerHTML; 

      
      var names=username.split(' ');
      fname.value=names[0];
      lname.value=names[1];
      genderel.value=gender;
      dobel.value=dob;
      nomineesel.value=nominees;
      addressel.value=address;
      numberel.value=phoneno;
      emailel.value=email;
    }
  }


}
getDataFromLocal();

function isadult(e) {
  const dob = document.getElementById("birthday").value;

  const dropdown = document.getElementById("validationServer11");

// Get the option to hide
const optionToHide1 = dropdown.querySelector("option[value='wife']");
const optionToHide2 = dropdown.querySelector("option[value='husband']");
const optionToHide3 = dropdown.querySelector("option[value='son']");
const optionToHide4 = dropdown.querySelector("option[value='daughter']");
  const maritalstatus = document.getElementById("active");
  var birthDate = new Date(dob);
  var difference = Date.now() - birthDate.getTime();
  var ageDate = new Date(difference);
  var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  if (calculatedAge >= 18) {
    maritalstatus.style.display = "block";
    optionToHide1.style.display = "block";
    optionToHide2.style.display = "block";
    optionToHide3.style.display = "block";
    optionToHide4.style.display = "block";
  } else {
    alert("You are under 18");
    maritalstatus.style.display = "none";
    optionToHide1.style.display = "none";
    optionToHide2.style.display = "none";
    optionToHide3.style.display = "none";
    optionToHide4.style.display = "none";
    registrationdata();
    getDataFromLocal();
    e.preventDefault();
    document.register.reset();
    return false;
  }
}
//password validate

var myInput = document.getElementById("inputPassword6");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#inputPassword6");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

//  var API_key="https://battuta.medunes.net/api/country/all/?key=00000000000000000000000000000000";
// token=VZ84_iTCFsgf9rXf_kzlOzneeCP4L5J_3A9toudmuBi9pYjxp_zGjdHIhsnqXVAj3tY

// Load the JSON data from the file using Fetch API
function fetchStatesAndCities() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const stateSelect = document.getElementById('state');

      // Populate the state dropdown
      data.states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.name;
        option.textContent = state.name;
        stateSelect.appendChild(option);
      });

       const defaultCityOption = document.createElement('option');
      defaultCityOption.value = ''; 
      defaultCityOption.textContent = 'Select your city';
      citySelect.appendChild(defaultCityOption);
      // Call populateCities function initially to populate the cities for the default selected state
      populateCities();
    })
    .catch(error => console.error('Error fetching data:', error));
}

function populateCities() {
  const stateSelect = document.getElementById('state');
  const citySelect = document.getElementById('city');
  const selectedState = stateSelect.value;

  // Find the selected state's data from the JSON file
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const selectedStateData = data.states.find(state => state.name === selectedState);

      // Clear existing city options
      citySelect.innerHTML = '';

      // Populate the city dropdown with cities from the selected state
      selectedStateData.cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Fetch states data on page load
fetchStatesAndCities();
