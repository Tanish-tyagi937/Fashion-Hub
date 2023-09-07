let login = document.querySelector("#login");
const menu = document.querySelector('.menu');


menu.removeChild(menu.children[4]);
menu.removeChild(menu.children[4]);

let link = document.createElement('span');
link.innerHTML = `<a href="/profile" class="header" id="Profile">Profile</a>`;
menu.append(link)

let logout = document.createElement('span');
logout.innerHTML = `<a href="/logout" class="header">Logout</a>`;
menu.append(logout)


let span = document.createElement('span');
span.classList.add("orderCart");
span.innerHTML = `<a href="/cart"  onmouseout="out()"><i class="fa-solid fa-cart-shopping" style="color: white;"></i></a>`
menu.append(span);


function hover() {
    let cart = document.querySelector('.orderCart');
    cart.innerHTML = `<a href="/cart" onmouseout="out()"><i class="fa-solid fa-cart-shopping" style="color: #e85a48;"></i></a>`
};
// function hover() {
//     let cart = document.querySelector('.orderCart');
//     cart.innerHTML = `<a href="/cart" onmouseout="out()"><i class="fa-solid fa-cart-shopping" style="color: #e85a48;"></i></a>`;
// }

function out() {
    document.querySelector('.orderCart').innerHTML = `<a href="/cart"  onmouseover="hover()"><i class="fa-solid fa-cart-shopping" style="color: white;"></i></a>`
}


// slide show 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function show(type){
  console.log(type);
 fetch('/find?type='+type)
  .then((data)=>{
    return data.text()
  }).then((html)=>{
        return html;
  })
  // fetch('/find?type='+type)
  // .then((data)=>{
  //   return data.text();
  // }).then((json)=>{
  //   console.log(json);
  // })
}


        function validPass() {
            var vaildepass = document.getElementById("pass").value;
            var minNumberofChars = 6;
            var maxNumberofChars = 16;
            var regularExpression  = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/;
            if (vaildepass.length <= minNumberofChars || vaildepass.length >= maxNumberofChars) {
                document.getElementById("vaild-pass").innerHTML = "Minimum 6 characters and maximum 16 characters are allowed";
                return false;
            } 
            else if(!regularExpression.test(vaildepass)) {
                document.getElementById("vaild-pass").innerHTML= "password should contain atleast one number and one special character";
                return false;
            }
            else {
                document.getElementById("vaild-pass").innerHTML = "";
            }
        }

      //   function validUsername() {
      //     var vaildepass = document.getElementById("pass").value;
      //     var minNumberofChars = 6;
      //     var maxNumberofChars = 16;
      //     var regularExpression  = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/;
      //     if (vaildepass.length <= minNumberofChars || vaildepass.length >= maxNumberofChars) {
      //         document.getElementById("vaild-pass").innerHTML = "Minimum 6 characters and maximum 16 characters are allowed";
      //         return false;
      //     } 
      //     else if(!regularExpression.test(vaildepass)) {
      //         document.getElementById("vaild-pass").innerHTML= "password should contain atleast one number and one special character";
      //         return false;
      //     }
      //     else {
      //         document.getElementById("vaild-pass").innerHTML = "";
      //     }
      // }

        function validEmail() {
            var vaildemail = document.getElementById("email").value;
            let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
            let result = regex.test(vaildemail); 
            if (!result) {
                document.getElementById("vaild-email").innerHTML = "Please enter valid email id";
                return false;
            } 
            else {
                document.getElementById("vaild-email").innerHTML = "";
            }
        }

