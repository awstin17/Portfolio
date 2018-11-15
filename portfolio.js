let rebootExpandSection = document.getElementById('rebootExpand');
let snapzExpandSection = document.getElementById('snapzExpand');
let stockathonExpandSection = document.getElementById('stockathonExpand');
let bankExpandSection = document.getElementById('bankExpand');
let header;

function expand(project) {

    if(project.style.height === "0px") {
        project.style.height = "auto";
        header = project.querySelector('.header');
        header.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
   
    else {
        project.style.height = "0px";
        arrow.style.display = "none";
    }
}