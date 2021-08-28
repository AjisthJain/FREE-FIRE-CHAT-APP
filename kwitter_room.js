
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBd5g0pwkex1ga6ZD6Y-VP_Xaa00M_MoFE",
      authDomain: "kwitter-9eb03.firebaseapp.com",
      projectId: "kwitter-9eb03",
      storageBucket: "kwitter-9eb03.appspot.com",
      messagingSenderId: "358021936063",
      appId: "1:358021936063:web:20928bedb2d1204f55670a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
