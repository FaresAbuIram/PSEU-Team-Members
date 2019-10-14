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
    console.log("obj.className");
    var s =shortStory();
    var htmlObject = document.createElement('div');
    console.log(htmlObject);
    htmlObject.innerHTML = s;
    let obj = document.getElementById('information');
    console.log(obj.id);
   obj.appendChild(htmlObject);
   //console.log( htmlObject);
   clear();
}
function shortStory(){
     return '<div class="short-story" id="short-story"><div class="icon"> <div class="line-inside-icon"></div></div> <div id="short-info" class="short-info"> <h1 id="nameofuser" class="name-of-user">'+info.name+'</h1>   <div class="info-specialization">  <h4 id="eemail" class="eemail">'+info.email+'</h4>  <div class="slash">/</div>   <h4 id="mojerofuser" class="mojer-of-user">'+ info.user_mojer+'</h4>  <div class="slash">/</div>  <h4 id="roleofuser" class="role-of-user">'+info.user_role+'</h4>  </div><p id="bioo">'+info.bio+' </p>  </div>';
}

function clear() {

    document.getElementById("userName").value = null;
    document.getElementById("userEmail").value = null;
    document.getElementById("userMajor").selectedIndex = "0";
    document.getElementById("userRole").selectedIndex = "0";
    document.getElementById("userBio").value = null;
}

