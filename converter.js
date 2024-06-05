function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


function convertTemperature() {
   
    let conversionType = prompt("Enter 'C' to convert from Celsius to Fahrenheit, or 'F' to convert from Fahrenheit to Celsius:");

    if (conversionType.toUpperCase() === 'C') {
       
        let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
        let fahrenheit = celsiusToFahrenheit(celsius);
        console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
    } else if (conversionType.toUpperCase() === 'F') {
        
        let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
        let celsius = fahrenheitToCelsius(fahrenheit);
        console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
    } else {
        console.log("Invalid input. Please enter 'C' or 'F'.");
    }
}


convertTemperature();