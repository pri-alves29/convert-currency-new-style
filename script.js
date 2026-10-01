const convertbutton = document.getElementById("convert-button");
const currencyselect = document.querySelector(".currency-select-to");
 
    

function convertCurrency() {

    const inputCurrency = document.getElementById("value-origin").value;
    const currencyValueToConvert = document.getElementById("result-origin");
    const currencyValueConverted = document.getElementById("result-destination");

    const dólar = 5.2;
    const euro = 6.2;
    const libra = 7.2;
    const bitcoin = 0.0000047;
    const iene = 0.038;
    const real = 1;

    const convertedDolar = inputCurrency / dólar;
    const convertedEuro = inputCurrency / euro;

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency);
    

    if (currencyselect.value === "dolar") {
       currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedDolar);
    }

     if (currencyselect.value === "euro") {
       currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(convertedDolar);
    }

    if (currencyselect.value === "libra") {
       currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(convertedDolar);
        }
    
    if (currencyselect.value === "bitcoin") {
       currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(convertedDolar);
    }

     if (currencyselect.value === "iene") {
       currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
    }).format(convertedDolar);
    }

     if (currencyselect.value === "real") {
       currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(convertedDolar);
    }
  
}
function changeCurrency() {
    const currencyName = document.querySelector(".name-currency-destination");
    const currencyImage = document.querySelector(".national-flag-destination");

    if (currencyselect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolar.png";
    }

    if (currencyselect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }
    if (currencyselect.value === "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png";
    }
    if (currencyselect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }
    if (currencyselect.value === "iene") {
        currencyName.innerHTML = "Iene";
        currencyImage.src = "./assets/iene.png";
    }
    if (currencyselect.value === "real") {
        currencyName.innerHTML = "Real";
        currencyImage.src = "./assets/real.png";
    }

    convertCurrency();
}
currencyselect.addEventListener("change", changeCurrency);
convertbutton.addEventListener("click", convertCurrency)

