var info = {
    name: ""
    , email: ""
    , user_mojer: ""
    , user_role: ""
    , bio: ""
};
function formData(e) {
    e.preventDefault();




    let mojer = document.getElementById("userMajor");
    let role = document.getElementById("userRole"); 
    info.name= document.getElementById("userName").value
    info.email= document.getElementById("userEmail").value
    info.user_mojer= mojer.options[mojer.selectedIndex].text
    info.user_role= role.options[role.selectedIndex].text
    info.bio=document.getElementById("userBio").value

    

    document.getElementById("nameofuser").innerHTML = info.name;
    document.getElementById("eemail").innerHTML = info.email;
    document.getElementById("mojerofuser").innerHTML = info.user_mojer;
    document.getElementById("roleofuser").innerHTML = info.user_role;
    document.getElementById("bioo").innerHTML = info.bio;


   
}

   document.getElementById("hh").appendChild( document.getElementById('short-story'));
   document.getElementById('short-story').style.display="flex";
     clear();











    

}

function clear() {

    document.getElementById("userName").value = null;
    document.getElementById("userEmail").value = null;
    document.getElementById("userMajor").selectedIndex = "0";
    document.getElementById("userRole").selectedIndex = "0";
    document.getElementById("userBio").value = null;
}

