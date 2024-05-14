
    

function login() {
  let name = document.getElementById("Username").value;
  let pass = document.getElementById("Password").value;
  let details = [
    { Username: "Arul", Password: "1234" }, 
    { Username: "Guru", Password: "5678" } 
  ];

  let isValidUser = details.some(user => user.Username === name && user.Password === pass);

  if (isValidUser) {
    // If the user is valid, remove the login form and show the user information form.
    alert("valid");
    window.location.href="/connect.html";
  
    
  } else {
  
    alert("Not valid");
  }
}


