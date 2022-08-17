const config = {
      apiKey: "AIzaSyA-a788U2f-noQVjsArzweq9Qf65UDfbC4",
      authDomain: "kwiter-cc28f.firebaseapp.com",
      databaseURL: "https://kwiter-cc28f-default-rtdb.firebaseio.com",
      projectId: "kwiter-cc28f",
      storageBucket: "kwiter-cc28f.appspot.com",
      messagingSenderId: "560775880843",
      appId: "1:560775880843:web:13593d377b36661a71b48e",
      measurementId: "G-M15KN809H5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
      
}