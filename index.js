var outputTime = () => {
        var d = new Date();
        const est_options = { timeZone: "America/New_York" }
        document.getElementById("date").innerHTML = d.toLocaleString({}, est_options);
};

document.addEventListener("DOMContentLoaded", function (event) {
        const myInterval = setInterval(outputTime, 1000);
});
