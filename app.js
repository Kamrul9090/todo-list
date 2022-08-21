//step-2: set count by default 0
let count = 0;

//step-1: add handler in add items

document.getElementById("btn-add").addEventListener("click", function () {

    //step-3: increase count number 1++;

    count++;
    const input = document.getElementById("input-value");
    const value = input.value;

    const tableBody = document.getElementById("table-body")

    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <td scope="col" class=" py-3 px-28">${count}</td>
        <td scope="col" class=" py-3 px-28">${value}</td>
        <td scope="col" class=" py-3 px-28">
    
        <button class="bg-sky-700 text-white p-2 rounded font-bold btn-delete">Delete</button>
     
        <button class="bg-gray-700 text-white p-2 rounded font-bold btn-edit">Edit</button>
        </td>
        `
    tableBody.appendChild(tableRow);
    input.value = "";

    //step-4: delete Items
    const deletebt = document.getElementsByClassName("btn-delete");

    for (let button of deletebt) {
        button.addEventListener("click", function (event) {
            event.target.parentNode.parentNode.style.display = "none";
        });
    }

    //step-5: edit items
    const btnEdit = document.getElementsByClassName("btn-edit");
    for (let editbtn of btnEdit) {
        editbtn.addEventListener("click", function (e) {
            e.target.parentNode.parentNode.children[1].innerText = input.value;
        })
    }
})







