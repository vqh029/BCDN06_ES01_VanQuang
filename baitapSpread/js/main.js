const head = document.querySelector(".heading").innerText;


const jumpText = () => {
    let chars = [...head];
    let content = "";
    chars.forEach((char) => {
        content += `<span>${char}</span>`
    });

    document.querySelector(".heading").innerHTML = content;
}

jumpText();