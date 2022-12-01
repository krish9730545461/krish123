// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAqmQBQiG5pBWc6LL1JHV1rxd4q66n1e24",
    authDomain: "chat-65d49.firebaseapp.com",
    databaseURL: "https://chat-65d49-default-rtdb.firebaseio.com",
    projectId: "chat-65d49",
    storageBucket: "chat-65d49.appspot.com",
    messagingSenderId: "302060677061",
    appId: "1:302060677061:web:12d4cd21c7a0d8274d0dac",
    measurementId: "G-BFTT5LG8Q0"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}