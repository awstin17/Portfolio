let rebootExpandSection = document.getElementById('rebootExpand');
let arrow = document.getElementById('arrow');
let  header = document.getElementById('rebootHeader');

function expand() {

    if(rebootExpandSection.style.height === "0px") {
        rebootExpandSection.style.height = "auto";
        arrow.style.display = "block";
        header.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
   
    else {
        rebootExpandSection.style.height = "0px";
        arrow.style.display = "none";
    }
}