

arr = [];

function setInformation() {
    let mojer = document.getElementById("userMajor");
    let role = document.getElementById("userRole");
    let info = {
        name: document.getElementById("userName").value
        , email: document.getElementById("userEmail").value
        , user_mojer: mojer.options[mojer.selectedIndex].text
        , user_role: role.options[role.selectedIndex].text
        , bio: document.getElementById("userBio").value
    };




    save(info);
   arr.push(get());
    
}

    
 
function get() {
    const fromStorage = localStorage.getItem('arrlist');
    return fromStorage ? JSON.parse(fromStorage) : [];
}
function save(info) {
    const jsonString = JSON.stringify(info);
    localStorage.setItem('arrlist', jsonString);
}
console.log(arr);
