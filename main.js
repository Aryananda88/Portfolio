document.getElementById("Download").addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "CV.pdf";
    link.download = "CV.pdf";
    link.click();
});