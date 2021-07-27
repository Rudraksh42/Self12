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
document.getElementById('MSG').onkeydown = function(event) {
  if (event.keyCode == 13) {
 

      if(document.getElementById("MSG").value ==""){
  
        document.getElementById("error").innerHTML = "Note: Empty message will not be accepted";
        document.getElementById("send").value.style.display= "none";
      }else
      
     // if(document.getElementById("MSG").value !=="")
      //{
        document.getElementById("send").value.style.display = true;
      //}
  }
}



  var UserName = localStorage.getItem("UserName");
  var RoomName = localStorage.getItem("RoomName"); 

  function getData() { firebase.database().ref("/"+RoomName).on('value', function(snapshot) { document.getElementById("MSGoutput").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    //Start Code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
Message = message_data['message'];
Likes = message_data['likes'];
Dislikes = message_data['Dislike'];

Name_with_tag = "<h4 class='NameClass'>"+Name+"</h4>";

Message_with_tag = "<h4 class='message'>"+Message+"</h4>";

Like_with_button = "<button onclick='UpdateLike(this.id)' class='like_button' id="+firebase_message_id+" value="+Likes+">";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+Likes+"</span></button>";
Dislike_with_button = "<button onclick='UpdateDislike(this.id)' class='Dislike_button' id="+firebase_message_id+" value="+Dislikes+">";
span_with_tag_1 = "<span class='glyphicon glyphicon-thumbs-down'>Dislike:"+Dislikes+"</span></button><hr>";
row = Name_with_tag + Message_with_tag + Like_with_button + span_with_tag + Dislike_with_button+span_with_tag_1;
document.getElementById("MSGoutput").innerHTML+= row;
//End Code
 } });  }); }
getData();   



function Send()
{
  

  console.log("comming in send()");
  MSG = document.getElementById("MSG").value;
  firebase.database().ref(RoomName).push(
    {
      message:MSG,
      Dislike:0,
      name:UserName,
      likes:0,
     
    });
  document.getElementById("MSG").value== "";

}

function Logout() 
{
  localStorage.removeItem("RoomName");
  localStorage.removeItem("UserName");
  window.location="index.html";
}

function UpdateLike(message_id)
{
      console.log("Clicked on like button -" + message_id);
      Button_id = message_id;
      Likes = document.getElementById(Button_id).value;
      Updated_Likes = Number(Likes) + 1;
      console.log(Updated_Likes);
      firebase.database().ref(RoomName).child(message_id).update({
            
            likes:Updated_Likes
      });
}


function UpdateDislike(Message_id)
{
      console.log("Clicked on Dislike button -"+Message_id);
      Button_Id = Message_id;
      Dislikes = document.getElementById(Button_Id).value;
      Updated_Dislikes = Number(Dislikes) + 1;
      console.log(Updated_Dislikes);
      firebase.database().ref(RoomName).child(Message_id).update({
            
            Dislike:Updated_Dislikes
      });
}
