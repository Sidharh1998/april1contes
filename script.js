let nameInput=document.getElementById("name");
let professionInput=document.getElementById("pro");
let ageInput=document.getElementById("age");

let id=0;
document.querySelector("form").addEventListener(`submit`,adding);
function adding(event){
event.preventDefault();

let name=nameInput.value;
let profession=professionInput.value;
let age=ageInput.value;
if(name.trim()=="" || profession.trim()=="" || age==0 || age=="")
{
    document.querySelector(".sucess").style.display=`none`;
    document.querySelector(".error").style.display=`block`;
    document.querySelector(".error").innerHTML=`<p style="color: red">Error : Please Make sure All the fields are filled before adding in an employee !</p>`;
    return;
}
else {
     document.querySelector(".error").style.display=`none`;
     document.querySelector(".sucess").style.display=`block`;
    document.querySelector(".sucess").innerHTML=`<p style="color: green">Success : Employee Added!</p>`;
    id++;
    document.querySelector(`form`).reset();
    if(id==0){
        document.querySelector(".noEmp").style.display="block";
    }
    else{
         document.querySelector(".noEmp").style.display="none";
        document.querySelector(".employee0").innerHTML+=`
        <div class="emp-card" id="card${id}">
        <div class="details">
        <span>Id:${id}.</span>
        <span>Name:${name}</span>
        <span>Profession:${profession}</span>
        <span>Age:${age}</span>
        </div>
        <button id="del" onclick="deleteUser(${id})">Delete User</button>
        </div>
        `;
    }
}
}

function deleteUser(iddel){
    console.log(iddel)
    let userToDel=document.getElementById(`card${iddel}`);
   console.log(userToDel);
     document.querySelector(".employee0").removeChild(userToDel);
     id--;
     if(id==0){
        document.querySelector(".noEmp").style.display="block";
        document.querySelector(".sucess").style.display=`none`;
    }
}