listOfUsers = new Array();// contain all users


listOfUsers = get(); // get data fron local storage
/*
This class contain for information about all users
*/
class info {
    constructor(name, email, user_mojer, user_role, bio) {
        this.name = name;
        this.email = email;
        this.user_mojer = user_mojer;
        this.user_role = user_role;
        this.bio = bio;


    }

}
/*
This function work when you click in the button(save) to save the users data and show it
*/
function formData(e) {
    e.preventDefault(); // to stop refresh

    let mojer = document.getElementById("userMajor");
    let role = document.getElementById("userRole");
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let user_mojer = mojer.options[mojer.selectedIndex].text;
    let user_role = role.options[role.selectedIndex].text;
    let bio = document.getElementById("userBio").value;
    const newInfo = new info(name, email, user_mojer, user_role, bio);//new class from class info
    let index = document.getElementById("add-index").value;
    if (uniqueEmail(email)) {
        if (document.getElementById("add-to-bottom").checked == true)
            listOfUsers.unshift(newInfo);
        else if (index != "")
            listOfUsers.splice(listOfUsers.length - index, 0, newInfo);
        else
            listOfUsers.push(newInfo);
        localStorage.clear();
        save(listOfUsers);
        clear();// reset the form in the inputs text
        printDate(listOfUsers);
    }


}
/*
This function to create div to display informatoin for the wall
*/
function shortStory(info) {
    return '<div class="short-story" id="short-story"><div class="icon"> <div class="line-inside-icon"></div></div> <div id="short-info" class="short-info"> <h1 id="nameofuser" class="name-of-user">' + info.name + '</h1>   <div class="info-specialization">  <h4 id="eemail" class="eemail">' + info.email + '</h4>  <div class="slash">/</div>   <h4 id="mojerofuser" class="mojer-of-user">' + info.user_mojer + '</h4>  <div class="slash">/</div>  <h4 id="roleofuser" class="role-of-user">' + info.user_role + '</h4>  </div><p id="bioo">' + info.bio + ' </p>  </div>';
}

function clear() {

    document.getElementById("userName").value = null;
    document.getElementById("userEmail").value = null;
    document.getElementById("userMajor").selectedIndex = "0";
    document.getElementById("userRole").selectedIndex = "0";
    document.getElementById("userBio").value = null;
}
/*
to get data from local storage
*/
function get() {
    const fromStorage = localStorage.getItem('arrlist');
    return fromStorage ? JSON.parse(fromStorage) : [];
}
/*
to save data to local storage
*/
function save(listOfUsers) {
    const jsonString = JSON.stringify(listOfUsers);
    localStorage.setItem('arrlist', jsonString);
}
function printDate(array) {
    document.getElementById('information').innerHTML = "";
    var i;
    for (i = array.length - 1; i >= 0; i--) {
        var createDiv = shortStory(array[i]);
        var htmlObject = document.createElement('div');
        htmlObject.innerHTML = createDiv;
        let obj = document.getElementById('information');
        obj.appendChild(htmlObject);
    }
    document.getElementById('number-of-users').innerHTML = listOfUsers.length + " ITEMS";

}
function sorting() {
    let arr1 = listOfUsers;
    arr1.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }


        return 0;
    });
    let sortedChoice = document.getElementById('sort');
    let choice = sortedChoice.options[sortedChoice.selectedIndex].value;
    if (choice == 1)
        printDate(arr1.reverse());
    else if (choice == 2)
        printDate(arr1);
    else
        printDate(arr);

}
function filterOfMojer() {
    let arr2 = new Array();//array just contain Computer Science
    let arr3 = new Array();//array just contain Computer Engineering
    let arr4 = new Array();//array just contain Information Technology
    let arr5 = new Array();//array just contain Information System
    var i;
    for (i = listOfUsers.length - 1; i >= 0; i--) {
        if (listOfUsers[i].user_mojer == "Computer Science")
            arr2.push(listOfUsers[i]);
        if (listOfUsers[i].user_mojer == "Computer Engineering")
            arr3.push(listOfUsers[i]);
        if (listOfUsers[i].user_mojer == "Information Technology")
            arr4.push(listOfUsers[i]);
        if (listOfUsers[i].user_mojer == "Information System")
            arr5.push(listOfUsers[i]);
    }
    
    let sortedChoice = document.getElementById('major');
    let choice = sortedChoice.options[sortedChoice.selectedIndex].value;
    if (choice == 1) {
        printDate(arr2);
        document.getElementById('number-of-users').innerHTML = arr2.length + " ITEMS";
    }
    else if (choice == 2) {
        printDate(arr3);
        document.getElementById('number-of-users').innerHTML = arr3.length + " ITEMS";
    }
    else if (choice == 3) {
        printDate(arr4);
        document.getElementById('number-of-users').innerHTML = arr4.length + " ITEMS";
    }
    else if (choice == 4) {
        printDate(arr5);
        document.getElementById('number-of-users').innerHTML = arr5.length + " ITEMS";
    }
}
function filterOfRole() {
    let arr2 = new Array();//array just contain Front-End Developer
    let arr3 = new Array();//array just contain Back-End Developer
    let arr4 = new Array();//array just contain Full-Stack Develope
    let arr5 = new Array();//array just contain UI/UX Designer
    var i;
    for (i = listOfUsers.length - 1; i >= 0; i--) {
        if (listOfUsers[i].user_role == "Front-End Developer")
            arr2.push(listOfUsers[i]);
        if (listOfUsers[i].user_role == "Back-End Developer")
            arr3.push(listOfUsers[i]);
        if (listOfUsers[i].user_role == "Full-Stack Develope")
            arr4.push(listOfUsers[i]);
        if (listOfUsers[i].user_role == "UI/UX Designer")
            arr5.push(listOfUsers[i]);
    }
   
    let sortedChoice = document.getElementById('role-filter');
    let choice = sortedChoice.options[sortedChoice.selectedIndex].value;
    if (choice == 1) {
        printDate(arr2);
        document.getElementById('number-of-users').innerHTML = arr2.length + " ITEMS";
    }
    else if (choice == 2) {
        printDate(arr3);
        document.getElementById('number-of-users').innerHTML = arr3.length + " ITEMS";
    }
    else if (choice == 3) {
        printDate(arr4);
        document.getElementById('number-of-users').innerHTML = arr4.length + " ITEMS";
    }
    else if (choice == 4) {
        printDate(arr5);
        document.getElementById('number-of-users').innerHTML = arr5.length + " ITEMS";
    }
}


function uniqueEmail(emailOfUser) {
    var i;
    for (i = listOfUsers.length - 1; i >= 0; i--) {
        if (listOfUsers[i].email == emailOfUser)
            return false;

    }

    return true;

}