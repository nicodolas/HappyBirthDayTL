document.getElementById('donateBtn').addEventListener('click', function () {
    new bootstrap.Modal(document.getElementById('donateModal')).show();
});
document.addEventListener("DOMContentLoaded", function() {
    Swal.fire({
        title: "HAPPY BIRTH DAY!!!",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/img/bg.png)",
        backdrop: `
            rgba(0,0,123,0.4)
            url("./img/cat-gif.gif")
            left top
            no-repeat
        `
    });
});
