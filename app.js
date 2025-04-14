window.addEventListener("load", solve);

function solve() {
    let yourNameElement = document.getElementById("customer-name");
    let chooseBaseElement = document.getElementById("base-choice");
    let chooseFruitElement = document.getElementById("fruit-choice");
    let sweetenerElement = document.getElementById("sweetener-amount");

    let previewNameElement = document.getElementById("preview-name");
    let previewBaseElement = document.getElementById("preview-base");
    let previewFruitElement = document.getElementById("preview-fruit");
    let previewSweetenerElement = document.getElementById("preview-sweetener");

    let previewElement = document.getElementById("order-preview");
    let orderSuccessElement = document.getElementById("order-success");

    let orderBtnElement = document.getElementById("order-btn");
    orderBtnElement.addEventListener("click", onAdd);

    function onAdd(e) {
        e.preventDefault();

        if (yourNameElement.value == "" || chooseBaseElement.value == "" || chooseFruitElement.value == "" || sweetenerElement.value == "") {
            return;
        }

        previewNameElement.textContent = yourNameElement.value;
        previewBaseElement.textContent = chooseBaseElement.value;
        previewFruitElement.textContent = chooseFruitElement.value;
        previewSweetenerElement.textContent = sweetenerElement.value;

        previewElement.style.display = 'block';
        orderBtnElement.disabled = true;

        yourNameElement.value = "";
        chooseBaseElement.value = "";
        chooseFruitElement.value = "";
        sweetenerElement.value = "";
    }

    let editBtnElement = document.getElementById("edit-btn");
    editBtnElement.addEventListener("click", onEdit);

    function onEdit() {
        yourNameElement.value = previewNameElement.textContent;
        chooseBaseElement.value = previewBaseElement.textContent;
        chooseFruitElement.value = previewFruitElement.textContent;
        sweetenerElement.value = previewSweetenerElement.textContent;

        previewElement.style.display = 'none';
        orderBtnElement.disabled = false;
    }

    let confirmBtnElement = document.getElementById("confirm-btn");
    confirmBtnElement.addEventListener("click", onBuy);

    function onBuy() {
        previewElement.style.display = 'none';
        orderSuccessElement.style.display = 'block';
    }

    let backBtnElement = document.getElementById("back-btn");
    backBtnElement.addEventListener("click", onBack);

    function onBack() {
        orderSuccessElement.style.display = 'none';
        orderBtnElement.disabled = false;
    }
}
