

arr =Array();
let info = {
        name:""
        , email: ""
        , user_mojer:""
        , user_role: ""
        , bio: ""
    };
function setInformation() {
    let mojer = document.getElementById("userMajor");
    let role = document.getElementById("userRole"); 
info.name= document.getElementById("userName").value
info.email= document.getElementById("userEmail").value
info.user_mojer= mojer.options[mojer.selectedIndex].text
info.user_role= role.options[role.selectedIndex].text
info.bio=document.getElementById("userBio").value



    arr.push(info);
   save(arr);
}

function get() {
    const fromStorage = localStorage.getItem('arrlist');
    return fromStorage ? JSON.parse(fromStorage) : [];
}
function save(arr) {
    const jsonString = JSON.stringify(arr);
    localStorage.setItem('arrlist', jsonString);
}
console.log(get());
