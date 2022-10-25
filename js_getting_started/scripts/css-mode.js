/* add your JavaScript code here! */
document.addEventListener("DOMContentLoaded", function(e) {
    var toggleBtn = document.getElementById('btn-mode');
    toggleBtn.addEventListener("click", function(e) {
        document.body.classList.toggle("darkmode");

    });

});