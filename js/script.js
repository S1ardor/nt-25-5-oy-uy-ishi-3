let pswInp = document.querySelector('.psw-input')
let iconEl = document.querySelector(".eye-clicker");


iconEl.addEventListener("click", () => handleChangeTypeInput(pswInp))

function handleChangeTypeInput(pswInp) {
    if (pswInp.type == "password") {
        pswInp.type = "text"
        toggleIcon("hide")
    } else if (pswInp.type == "text") {
        pswInp.type = "password"
        toggleIcon("show")
    }
}

function toggleIcon(option) {
    iconEl.src = `./images/${option}.png`;
};