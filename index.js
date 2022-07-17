const length1 = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


function convert() {
    let num = document.querySelector('input[name="num"]').value;
    length1.textContent = `${num} Metres = ${(num*3.2808399).toFixed(3)} Feet | ${num} Feet = ${(num*0.3048).toFixed(3)} Meters `
    volume.textContent = `${num} Litres = ${(num*0.264172052).toFixed(3)} Gallons | ${num} Gallons = ${(num*3.78541178).toFixed(3)} Litres `
    mass.textContent = `${num} Kilograms = ${(num*2.20462262).toFixed(3)} Pounds | ${num} Pounds = ${(num*0.45359237).toFixed(3)} Kilograms `
}