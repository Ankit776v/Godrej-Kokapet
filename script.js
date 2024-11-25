document.addEventListener('DOMContentLoaded', function(){
    readfn();
    fphover();
})
function readfn(){
    let readm = document.querySelector('.readm');
    let readl = document.querySelector('.readl');
    let disc = document.querySelector('.disc');
    if (disc.style.display = "none") {
        readl.style.display = "none";
    } else {
        readm.style.display = "none";
    }
}
function readall(){
    let readm = document.querySelector('.readm');
    let readl = document.querySelector('.readl');
    let disc = document.querySelector('.disc');
    readm.style.display = "none";
    readl.style.display = "block";
    disc.style.display = "block";
}
function hideall(){
    let readm = document.querySelector('.readm');
    let readl = document.querySelector('.readl');
    let disc = document.querySelector('.disc');
    readm.style.display = "block";
    readl.style.display = "none";
    disc.style.display = "none";
}
function fphover() {
    let fpElements = document.querySelectorAll('.fp');

    fpElements.forEach(fp => {
        // Get the specific fpbutton inside the current fp element
        let fpbutton = fp.querySelector('.fpbutton');

        // Add mouseover and mouseout events to the current fp element
        fp.addEventListener('mouseover', function () {
            fpbutton.style.display = "flex"; // Show the button
        });

        fp.addEventListener('mouseout', function () {
            fpbutton.style.display = "none"; // Hide the button
        });
    });
}