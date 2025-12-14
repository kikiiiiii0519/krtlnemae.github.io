function convertNumber() {
    var decimal = document.getElementById("decimal").value;

    if (decimal === "") {
        alert("Please enter a number");
        return;
    }

    document.getElementById("binary").innerHTML = parseInt(decimal).toString(2);
    document.getElementById("octal").innerHTML = parseInt(decimal).toString(8);
    document.getElementById("hex").innerHTML = parseInt(decimal).toString(16).toUpperCase();
}