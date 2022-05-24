let dropElm = document.querySelector(".dropElm");
let table = document.querySelector(".table");
let upload = document.querySelector(".fa-file-upload");
let input = document.querySelector(".dropElm input");

upload.onclick = () => input.click();

input.onchange = function (ev) {
    uploadImage(ev.target.files);
}

dropElm.ondragover = ev => ev.preventDefault();

let counter = 1;
dropElm.ondrop = function (ev) {
    ev.preventDefault();
    uploadImage(ev.dataTransfer.files);
}

function uploadImage(files) {
    
    if (table.lastElementChild.innerText.length == 0) {
        table.style.visibility = "hidden";
        return;
    }
    [...files].forEach(file => {
        let reader = new FileReader();
        reader.onloadend = function (ev) {
            let tr =
                ` <tr class="trow">
                     <th scope="row" class="counter_row">${counter++}</th>
                     <td><img src="${ev.target.result}" alt="" style="width:200px"></td>
                     <td>${file.name}</td>
                     <td>${file.size}</td>
                 </tr> `
            table.lastElementChild.innerHTML += tablerow;
        };
        reader.readAsDataURL(file);
    })

};