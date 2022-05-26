
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBF6_sui0kgG6A7WwBtj0F5WPiWitdSHAg",
    authDomain: "blog-t-b3345.firebaseapp.com",
    projectId: "blog-t-b3345",
    storageBucket: "blog-t-b3345.appspot.com",
    databaseURL:"https://blog-t-b3345-default-rtdb.firebaseio.com/",
    messagingSenderId: "716717083227",
    appId: "1:716717083227:web:3de1c4d058eb7288dc0d7e"
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

