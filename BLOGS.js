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
