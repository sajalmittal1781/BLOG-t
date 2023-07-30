
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAJOo9RL7kg7YgJ3vGrCclLEfo63-gz_4A",
    authDomain: "blogit-bd237.firebaseapp.com",
    databaseURL: "https://blogit-bd237-default-rtdb.firebaseio.com",
    projectId: "blogit-bd237",
    storageBucket: "blogit-bd237.appspot.com",
    messagingSenderId: "1078183903757",
    appId: "1:1078183903757:web:6401270b22a86e17264b44",
    measurementId: "G-BHPXWHQ0RN"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // Reference messages collection
  var messagesRef =firebase.database().ref("messages");


document.getElementById("submit-blog").addEventListener("submit",submitblog);

function submitblog(e){
    // e.preventDefault();

    var name =document.getElementById("name").value;
    var content =document.getElementById("content").value;
    saveMessage(name,content);
    // console.log(name,content);
    

}

function saveMessage(name,content){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        content:content
    });

    

}

