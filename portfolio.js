const about=  document.getElementById("about")
const experience = document.getElementById("experience");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const education = document.getElementById("education");
const certificates = document.getElementById("certificates");
const resume = document.getElementById("resume");
const arr = [about, experience, skills, projects, education, certificates, resume];

function getDisplay(event){
    const val = event?.target?.attributes?.value?.nodeValue;

    arr.forEach((item)=>{
        item.id==val?(item.id=='about'?item.style.display = "flex":item.style.display = 'block'): item.style.display = 'none';
    })
}