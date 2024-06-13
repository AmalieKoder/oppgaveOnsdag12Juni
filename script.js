//Change color for the background :)

const switchButton = document.querySelector("#switchColor");

switchButton.addEventListener("click", () => {
    const switchMainColor = document.querySelector("#mainJs");
    switchMainColor.classList.toggle("nextColor");
});

// Open the dropdown menu and closed it
const navButton = document.querySelector("#navMenu");

navButton.addEventListener("click", () => {
    const showNavBar = document.querySelector("#show");
    showNavBar.classList.toggle("showNav");
})

