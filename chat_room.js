var firebaseConfig = {
    apiKey: "AIzaSyCwarjCHkvYnk9i-Nxi19MY8cjmINq0vO0",
    authDomain: "c101prj.firebaseapp.com",
    databaseURL: "https://c101prj-default-rtdb.firebaseio.com",
    projectId: "c101prj",
    storageBucket: "c101prj.appspot.com",
    messagingSenderId: "213083829912",
    appId: "1:213083829912:web:825cedf05e3121399942ed"
};
//ADD YOUR FIREBASE LINKS
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + username + " !";


function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}

function getData() {
    function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "chat_page.html";
    }
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}