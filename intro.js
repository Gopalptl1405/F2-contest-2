// var users = [
//     { name: "John", age: "18", profession: "developer" },
//     { name: "Jack", age: "20", profession: "developer" },
//     { name: "Karen", age: "19", profession: "admin" }
//   ];

//   function printdata(user){
//     var data = document.createElement("div");
//     data.className="userdata";
//     data.innerHTML= `<p>Name: ${user.name}</p>
//                     <p>Age: ${age.name}</p>
//                     <p>Profession: ${user.Profession}</p>`

//         document.getElementById("userdata").appendChild(data);
//   }

//   function Modifiedlist(users){
//        var userdata = document.getElementById("userdata");
//        userdata.innerHTML =  ""; 
//         //clr privious data in body

//        users.forEach((user)=>{
//            printdata(user);
//        });
//   }
  
//   function filterByprofession(){
//     let profession = document.getElementById("profession").value;
//     let filteredusers = users;
    
//     if(profession !== ""){
//         filteredusers = users.filter((user)=>{
//             return user.profession === profession;
//         })
//     }
//     return  Modifiedlist(filteredusers);
//   }

//   function adduser(){
//     var name = document.getElementById("name");
//     var age = document.getElementById("age");
//     var profession = document.getElementById("newProfession");
//     if(name !=="" && age !== "" && profession !==""){
//         var new_user_data = {
//             name: name,
//             age: age,
//             profession: profession
//         }
//         users.push(new_user_data);
//         printdata(new_user_data);
//     }else{
//         alert("Please fill all the data !");
//     }
//   }
  
// // if any condition else block run and press ok on alert so print same data in html page; 
// Modifiedlist(users); 


var users = [
    { id:1,  name: "John", age: "18", profession: "developer" },
    { id:2,  name: "Jack", age: "20", profession: "developer" },
    { id:3,  name: "Karen", age: "19", profession: "admin" }
];

function printData(user) {
    var data = document.createElement("div");
    data.className = "userData";
   /* display: flex;
    column-gap: 20px;
    border: 1px solid aliceblue;
    padding: 5px;
    border-radius: 45px;
    width: 70%;*/
    data.style.display = "flex";
    data.style.gap = "20px";
    data.style.margin = "15px 0px";
    data.style.border = "1px solid aliceblue";
    data.style.padding = "5px";
    data.style.borderRadius = "45px";
    data.style.width = "35%";
    
    data.innerHTML = `<p>${user.id}</p>
                      <p>Name: ${user.name}</p>
                      <p>Profession: ${user.profession}</p>
                      <p>Age: ${user.age}</p>`;

    document.getElementById("userData").appendChild(data);
}

function clearUserList() {
    var userData = document.getElementById("userData");
    userData.innerHTML = ""; // Clear previous user cards
}

function renderUsers(users) {
    clearUserList();

    users.forEach(function(user) {
        printData(user);
    });
}

function filterByProfession() {
    var profession = document.getElementById("profession").value;
    var filteredUsers = [];

    if (profession === "") {
        filteredUsers = users;
    } else {
        filteredUsers = users.filter(function(user) {
            return user.profession === profession;
        });
    }

    renderUsers(filteredUsers);
}

function addUser() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var profession = document.getElementById("newProfession").value;

    if (name !== "" && age !== "" && profession !== "") {
        var newUser = {
            id: users.length+1,
            name: name,
            age: age,
            profession: profession
        };
        alert("Sucessfully New User Add..")
        users.push(newUser);
        printData(newUser);
    } else {
        alert("Please fill in all the data.");
    }
}

renderUsers(users);

