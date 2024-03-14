/************hamberger menu open and close functinality */

let openCloseMenu = document.querySelector(".open-close-menu");
console.log(openCloseMenu);
let navheader = document.querySelector(".header");
console.log(navheader) 
let toggleNavbar=()=>{
    navheader.classList.toggle("active")
  } 
openCloseMenu.addEventListener("click" , ()=>toggleNavbar())

/*   toggle **/

let inputElm = document.querySelector(".input");
inputElm.addEventListener('change', function(e){
  if(inputElm.checked){
    document.body.classList.add("dark")
  }else{
    document.body.classList.remove("dark")
  }
})

/********* about link hide and display tab content */

let tabLink = document.getElementsByClassName("tab-link");
console.log(tabLink)
let tabContent = document.getElementsByClassName("tab-content");
console.log(tabContent);

function handleClick(tabname){
  for(tablink of tabLink){
     tablink.classList.remove("active-link")
  }
  for(tabcontent of tabContent){
    tabcontent.classList.remove("active-tab")
 };
 event.currentTarget.classList.add("active-link");
 document.getElementById(tabname).classList.add("active-tab")
}

/*********portfolio section button and img grid functionality**** */

let e_btns = document.querySelector('.e-btns');
let e_btn = document.querySelectorAll('.exp-btn');
console.log(e_btn)
const e_img= document.querySelectorAll(".exp-image-parent");
e_btns.addEventListener('click', function(e){
let e_btn_clicked= e.target;
console.log(e_btn_clicked);
if(e_btn_clicked.classList.contains("e-btn")) {
  return;
}
e_btn.forEach(el=> {
 return el.classList.remove("exp-btn-active");
});
e_btn_clicked.classList.add("exp-btn-active");

/* getting button nu***/
let btn_no = e_btn_clicked.dataset.btnNo;
console.log(btn_no);
/**********imgage handling********* */


/* hide image */ 
e_img.forEach(el=> {
  return el.classList.add("e-img-not-active")
});

let active_im = document.querySelectorAll(`.${btn_no}`)
console.log(active_im)
active_im.forEach(el=> el.classList.remove("e-img-not-active") )
});



/* intercepetr observer for stick nabar */
/*1 create obj , entries is array , */
let heroelm = document.querySelector(".hero");

let observerObj = new IntersectionObserver((entries)=>{
let ent = entries[0];
console.log(ent)
!ent.isIntersecting ? 
document.body.classList.add("sticky"):document.body.classList.remove("sticky")
},{
  root:null,
  threshold:0,
})
observerObj.observe(heroelm)