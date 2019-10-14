arr = new Array();
arr = get();

class info {
    constructor(name, email, user_mojer, user_role, bio) {
        this.name = name;
        this.email = email;
        this.user_mojer = user_mojer;
        this.user_role = user_role;
        this.bio = bio;


    }

}
function formData(e) {
    e.preventDefault();

    let mojer = document.getElementById("userMajor");
    let role = document.getElementById("userRole");
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let user_mojer = mojer.options[mojer.selectedIndex].text;
    let user_role = role.options[role.selectedIndex].text;
    let bio = document.getElementById("userBio").value;
    const newInfo = new info(name, email, user_mojer, user_role, bio);
    let index=document.getElementById("add-index").value;
    if (document.getElementById("add-to-bottom").checked == true)
        arr.unshift(newInfo);
    else if (index != "")
        arr.splice( arr.length-index, 0, newInfo);
    else
        arr.push(newInfo);
    
    save(arr);
    clear();
    printDate()
}
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
function get() {
    const fromStorage = localStorage.getItem('arrlist');
    return fromStorage ? JSON.parse(fromStorage) : [];
}
function save(arr) {
    const jsonString = JSON.stringify(arr);
    localStorage.setItem('arrlist', jsonString);
}
function printDate() {
    document.getElementById('information').innerHTML = "";
    var i;
    for (i = arr.length - 1; i >= 0; i--) {
        var createDiv = shortStory(arr[i]);
        var htmlObject = document.createElement('div');
        htmlObject.innerHTML = createDiv;
        let obj = document.getElementById('information');
        obj.appendChild(htmlObject);
    }
    document.getElementById('number-of-users').innerHTML = arr.length + " Items";

}

