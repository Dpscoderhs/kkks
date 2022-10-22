//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCwarjCHkvYnk9i-Nxi19MY8cjmINq0vO0",
    authDomain: "c101prj.firebaseapp.com",
    databaseURL: "https://c101prj-default-rtdb.firebaseio.com",
    projectId: "c101prj",
    storageBucket: "c101prj.appspot.com",
    messagingSenderId: "213083829912",
    appId: "1:213083829912:web:825cedf05e3121399942ed"
};

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        likes: 0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}