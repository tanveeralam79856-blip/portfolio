/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();


/* Typing rotating roles */
const roles = [
  "Consistent Learner",
  "Problem Solver",
  "Future Leader",
  "Builder of Skills",
  "Growth Mindset"
];

let i = 0;
function type(){
  document.getElementById("typing").textContent = roles[i];
  i = (i+1) % roles.length;
}
setInterval(type, 1400);
type();


/* Scroll reveal animation */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
},{threshold:.25});

reveals.forEach(el=>observer.observe(el));
