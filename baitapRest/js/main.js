const btnK1 = document.getElementById("btnKhoi1");
const btnK2 = document.getElementById("btnKhoi2");
const tbK1 = document.getElementById("tbKhoi1");
const tbK2 = document.getElementById("tbKhoi2");

btnK1.addEventListener('click', () => {
    const valToan = parseFloat(document.getElementById("inpToan").value);
    const valLy = parseFloat(document.getElementById("inpLy").value);
    const valHoa =parseFloat(document.getElementById("inpHoa").value);

    tbK1.innerText = diemTB(valToan, valLy, valHoa);
})

btnK2.addEventListener('click', () => {
    const valVan = parseFloat(document.getElementById("inpVan").value);
    const valSu = parseFloat(document.getElementById("inpSu").value);
    const valDia =parseFloat(document.getElementById("inpDia").value);
    const valEng =parseFloat(document.getElementById("inpEnglish").value);
    tbK2.innerText = diemTB(valVan, valSu, valDia, valEng);
})

const diemTB = (...marks) => {
    let result = 0;
    marks.forEach((mark) => {
        result+= mark;
    })
    result = result / marks.length;
    return result.toFixed(2);
}

