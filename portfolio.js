let rebootExpandSection = document.getElementById('rebootExpand');
let snapzExpandSection = document.getElementById('snapzExpand');
let stockathonExpandSection = document.getElementById('stockathonExpand');
let bankExpandSection = document.getElementById('bankExpand');
let header;
let hovers = document.getElementsByClassName('learn-more');

function expand(project, numberInList) {

    if (project.className === "unexpanded") {
        project.className = "expanded";
        header = project.querySelector('.header');
        header.scrollIntoView({ behavior: 'smooth', block: 'center' });
        changeHoverText(numberInList);
    }

    else {
        project.className = "unexpanded";
        changeHoverText(numberInList);
    }
}

function changeHoverText(numberInList) {
    if (hovers[numberInList].innerHTML === "Learn More") {
        hovers[numberInList].innerHTML = "Collapse";
    }
    else {
        hovers[numberInList].innerHTML = "Learn More";
    }

}

function nextImage(carousel) {
    el = document.querySelector('#' + carousel);

    if (el.querySelectorAll(".displayingImage")[0].nextElementSibling) {
        el.querySelectorAll(".displayingImage")[0].nextElementSibling.className = "displayingImage";
        el.querySelectorAll(".displayingImage")[0].classList.add("hiddenImage");
        el.querySelectorAll(".displayingImage")[0].classList.remove("displayingImage");
    }

    else {
        el.querySelectorAll(".displayingImage")[0].parentElement.firstElementChild.classList.add("displayingImage");
        el.querySelectorAll(".displayingImage")[0].parentElement.firstElementChild.classList.remove("hiddenImage");
        el.querySelectorAll(".displayingImage")[1].classList.add("hiddenImage");
        el.querySelectorAll(".displayingImage")[1].classList.remove("displayingImage");
    }
}

function previousImage(carousel) {

    el = document.querySelector('#' + carousel);

    if (el.querySelectorAll(".displayingImage")[0].previousElementSibling) {
        el.querySelectorAll(".displayingImage")[0].previousElementSibling.classList.remove("hiddenImage");
        el.querySelectorAll(".displayingImage")[0].previousElementSibling.classList.add("displayingImage");
        el.querySelectorAll(".displayingImage")[1].classList.add("hiddenImage");
        el.querySelectorAll(".displayingImage")[1].classList.remove("displayingImage");
    }

    else {
        el.querySelectorAll(".displayingImage")[0].parentElement.lastElementChild.classList.add("displayingImage");
        el.querySelectorAll(".displayingImage")[0].parentElement.lastElementChild.classList.remove("hiddenImage");
        el.querySelectorAll(".displayingImage")[0].classList.add("hiddenImage");
        el.querySelectorAll(".displayingImage")[0].classList.remove("displayingImage");
    }
}