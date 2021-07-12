
// creating setErrormsg function
// if the condtion is Fasle,This function will execute
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

// creating successmsg function
//  If the conditons is true ,this function will execute
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";


}


const user = document.getElementById('username');
var userName=document.getElementById('username').value;
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword= document.getElementById('cpassword');

// adding function event lister to execute query
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("hello");

    // calling validate function
    validate();
});

// creating send data function
//If true add event 
function sendData(userName,sRate,count){
    if (sRate=== count){
        alert('registration successful');
        swal("WElcome! "+userName, "Registraction Successful", "success");
        // location.href =`demo.html?username= ${userName}`;
    }
}

//Successmsg function help in checking all the conditions are met
// if condition met then calling another function

function successMsg(userName){
    let formCon=document.getElementsByClassName('form-control');
    var count=formCon.length-1;

    for (i=0 ; i<formCon.length ; i++){
        if (formCon[i].className === "form-control success"){
            var sRate= 0 + i;
            // calling  send data 
            sendData(userName,sRate,count);
        }else{
            return false;
        }
    }
}


// creating validate function 
//checks all the  conditions

function validate() {

    // validate username 
    if (user.value.trim() === "") {
       
        setErrorMsg(username, 'username cannot be blank');
    } else if (user.value.length < 2) {
        alert('enter value');
        setErrorMsg(username, 'usernmae min 3 character');


    } else {

        setSuccessMsg(username);
    }
    // validate email 
    if (email.value.trim() === "") {
        setErrorMsg(email, 'email cannot be blank');

    } else {
        setSuccessMsg(email);
    }

    // validate phone number
    if (phone.value === "") {
        setErrorMsg(phone, 'phone number cannot be blank');

    } else if (phone.value.length != 10) {
        setErrorMsg(phone, 'phone number must be 10 digit');


    } else {
        setSuccessMsg(phone);
    }

    // validate password  
    if (password.value === "") {
        setErrorMsg(password, 'password  cannot be blank');
    }else if (password.value.length < 5 ){
        setSuccessMsg(password);
        alert("you password is too small");
        
    } else { 
        setSuccessMsg(password);

    }
    // confirming password
    
    if (cpassword.value ==="") {
        setErrorMsg(cpassword, 'confirm password can not be blank ');
    }else if (password.value != cpassword.value){
        setErrorMsg(cpassword, 'passwords are not matching ');
    
    
        
    } else { 
        setSuccessMsg(cpassword);

    }
    // calling sucess msg
    successMsg(user.value);
};

