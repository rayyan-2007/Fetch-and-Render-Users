const containers = document.getElementById("userContainer");
console.log(containers);

const loader = document.getElementById("loader");


async function fetchUser(){
    try{
        loader.style.display = "block";
      const userData = await fetch("https://jsonplaceholder.typicode.com/users");
      const object = await userData.json();

      console.log(object);
      //call the function and pass argument
      displayData(object);
    }
    //handle error
    catch(error){
      containers.innerHTML="<h1>Failed to load data...</h1>";
     console.log(error);
    }
    //always execute
    finally{
        loader.style.display = "none";
    }
}

fetchUser();

//pass parameter:
function displayData(object){
   
object.forEach((user)=>{
         // create a div element in javascript dynamically
        const card = document.createElement("div");
        //adding css style dynamically using class attribute
        card.classList.add("card");

        card.innerHTML = `
       <h3>${user.name}</h3>
       <p><strong>Email:</strong>${user.email}</p>
       <p><strong>Phone:</strong>${user.phone}</p>
       <p><strong>City:</strong>${user.address.city}</p>
       <p><strong>Company:</strong>${user.company.name}</p>
        `;
         //insert div element to container class
          containers.appendChild(card);
    });
}


