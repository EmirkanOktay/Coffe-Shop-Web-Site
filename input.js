let search = document.querySelector("#search");
let coffeBox = document.querySelectorAll(".box-coffe");

search.addEventListener("input", () => {
    let searchUser = search.value.trim().toLowerCase();

    coffeBox.forEach(coffe => {
        let coffeTitle = coffe.querySelector("p").innerText.toLowerCase();
        if (coffeTitle.includes(searchUser)) {
            coffe.style.display = "block";
        } else {
            coffe.style.display = "none";
        }
    });
});
