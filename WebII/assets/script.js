function convertNumber() {
    var decimal = document.getElementById("decimal").value;

    if (decimal === "") {
        alert("Oopsie! Please enter a number first 🌸");
        return;
    }

    let bin = parseInt(decimal).toString(2);
    let oct = parseInt(decimal).toString(8);
    let hex = parseInt(decimal).toString(16).toUpperCase();
    
    document.getElementById("binary").innerText = bin;
    document.getElementById("octal").innerText = oct;
    document.getElementById("hex").innerText = hex;
}