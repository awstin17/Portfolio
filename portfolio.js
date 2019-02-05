let rebootExpandSection = document.getElementById('rebootExpand');
let snapzExpandSection = document.getElementById('snapzExpand');
let stockathonExpandSection = document.getElementById('stockathonExpand');
let bankExpandSection = document.getElementById('bankExpand');
let header;
let hovers = document.getElementsByClassName('learn-more');

function expand(project, numberInList) {

    if(project.className === "unexpanded") {
        project.className = "expanded";
        header = project.querySelector('.header');
        // header.scrollIntoView({ behavior: 'smooth', block: 'center' });
        changeHoverText(numberInList);
    }
   
    else {
        project.className = "unexpanded";
        changeHoverText(numberInList);
    }
}

function changeHoverText(numberInList) {
    if(hovers[numberInList].innerHTML === "Learn More") {
        hovers[numberInList].innerHTML = "Collapse"; 
    }
    else {
        hovers[numberInList].innerHTML = "Learn More";
    }

}