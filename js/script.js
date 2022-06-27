//running function while the page charge;
document.addEventListener("DOMContentLoaded", avatar, false);

async function avatar() {
    var res = await fetch("https://api.github.com/users/yeisonandreylice");
    var data = await res.json();
    var presentation = document.querySelector(".presentation");
    img = `
    <img src="${data.avatar_url}" alt="My github profile photo"></img>`;
    presentation.innerHTML = presentation.innerHTML + img;
}


function showList() {
    var ul = document.querySelector("#list");
    ul.classList.toggle("nav-top-ms");
    ul.classList.toggle("nav-top");
    var header = document.querySelector("#headerTop");
    header.classList.toggle("header-top");
    header.classList.toggle("header-top-ms");
}

document.querySelector(".bi").addEventListener("click", showList, false);