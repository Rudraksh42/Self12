 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBEdX71Pjh6fHLlPLN6YMXEZwRhjl6qe60",
  authDomain: "tweek-4515e.firebaseapp.com",
  databaseURL: "https://tweek-4515e-default-rtdb.firebaseio.com",
  projectId: "tweek-4515e",
  storageBucket: "tweek-4515e.appspot.com",
  messagingSenderId: "476958684064",
  appId: "1:476958684064:web:fe50d8e2cb5e1e294b6ac5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

      var UserName = localStorage.getItem("UserName");
      console.log(UserName);
      document.getElementById("RoomUsername").innerHTML = "Welcome " + UserName+"!"; 
  
      function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey =
  childSnapshot.key;
   Room_names = childKey

   //Start code
   console.log("roomname-"+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML+=row;
   });});}
  getData(); 
  
  function AddRoom()
  {
  RoomName = document.getElementById("RoomName Input").value;
  firebase.database().ref("/").child(RoomName).update({ purpose : "adding room name" });
  localStorage.setItem("RoomName", RoomName);
  console.log(RoomName);
  window.location="TweekRoom.html";
  }


  /* To Fix */
  function redirect(Room_names)
  {
    localStorage.setItem("room_name",Room_names);
    window.location= "TweekRoom.html";
    console.log(Room_names);
  }
  /* To */
  
  
  function Logout()
  {
    localStorage.removeItem("RoomName");
    localStorage.removeItem("user_name");
    window.location="index.html";
  } 

