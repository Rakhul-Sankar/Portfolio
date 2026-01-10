var tablinks = document.getElementsByClassName("tab-links"); 
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

  function showTab(tab) {
    const skills = document.getElementById("skills");
    const education = document.getElementById("education");

    const skillsBtn = document.getElementById("skills-btn");
    const educationBtn = document.getElementById("education-btn");

    if (tab === "skills") {
      skills.classList.remove("hidden");
      education.classList.add("hidden");

      skillsBtn.classList.add("border-b-2", "border-red-600");
      educationBtn.classList.remove("border-b-2", "border-red-600");
    } else {
      education.classList.remove("hidden");
      skills.classList.add("hidden");

      educationBtn.classList.add("border-b-2", "border-red-600");
      skillsBtn.classList.remove("border-b-2", "border-red-600");
    }
  }

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}
