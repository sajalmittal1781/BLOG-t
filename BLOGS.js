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

  function add(content,name){
      var main=document.getElementById("main");

    var _div=document.createElement("div");
    _div.className="card";

    main.appendChild(_div);

    var _content=document.createElement("p");
    var _name=document.createElement("h4");

    _content.innerHTML=content;
    _name.innerHTML=name;

    _div.appendChild(_content);
    _div.appendChild(_name);
  }

// function add(content, name) {
//   var ul = document.getElementById("list");

//   //   var _div=document.createElement("li");
//   //   _div.className="card";
//   var _content = document.createElement("li");
//   var _name = document.createElement("li");

//   _content.innerHTML = content;
//   _name.innerHTML = name;

//   ul.appendChild(_content);
//   ul.appendChild(_name);
// }

function Fetch() {
  console.log("s");

  firebase
    .database()
    .ref("messages")
    .once("value", function (snapshot) {
      snapshot.forEach(function (childSnapsshot) {
        let name = childSnapsshot.val().name;
        let content = childSnapsshot.val().content;
          add(content,name);
        // console.log(name, content);
      });
    });
}
window.onload(Fetch());