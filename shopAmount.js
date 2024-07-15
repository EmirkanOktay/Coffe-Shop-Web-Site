
let writePrice = document.querySelector(" .totalPrice .number span")
let totalPrice = 0;


document.querySelectorAll(".box-coffe").forEach(box => {
    let writeAmount = box.querySelector(".amount-user p");
    let plus = box.querySelector(".fa-plus");
    let reduce = box.querySelector(".fa-minus");
    let priceElement = box.querySelector(".price");
    let price = parseFloat(priceElement.innerText);
    let amount = 0;

    plus.addEventListener("click", () => {
        totalPrice+=price 
        amount++; 
        writeAmount.innerHTML = amount;
        writePrice.innerHTML = totalPrice.toFixed(2) + " " +"$";
    });

    reduce.addEventListener("click", () => {
        if (amount <= 0) {
            alert("You can't reduce the amount of coffee. The amount of coffee is already 0.");
            writeAmount.innerHTML = 0;
        } else {
            
            amount--;
            writeAmount.innerHTML = amount;
            totalPrice = totalPrice-price;
            writePrice.innerHTML = totalPrice.toFixed(2) + " " +"$";;
        }
    });
});

