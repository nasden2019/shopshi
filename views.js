const count = document.getElementById("count");

// 2) call function:
updateVisitCount();

// 1) create function and display data:
function updateVisitCount() {
    fetch("https://api.countapi.xyz/update/alex-declercq/youtube/?amount=1")
        .then((res) => res.json())
        .then((res) => {
            count.innerHTML = res.value;
        });
}