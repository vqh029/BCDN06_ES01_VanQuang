const colorList = ["pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar"];

let colorBtn = document.getElementsByClassName("color-button");
let house = document.getElementById("house");

const toggleColor = (item, index) => {
    for (let i = 0; i < colorBtn.length; i++) {
        colorBtn[i].classList.remove("active");
    }
    colorBtn[index].classList.add("active");
    house.className = "house " + item;
}

const loadColor = () => {
    let content = "";
    colorList.map((item, index) => {
        if (index == 0) {
            content += `
            <button class="color-button ${item} active" onclick=toggleColor("${item}",${index})></button>
            `;
            house.className = "house " + item;
        }
        else {
            content += `
            <button class="color-button ${item}" onclick=toggleColor("${item}",${index})></button>
            `
        }

    })
    document.querySelector("#colorContainer").innerHTML = content;
}

loadColor();
