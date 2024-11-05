document.getElementById('calculateDogBtn').addEventListener('click', function() {
    const dogName = document.getElementById('dogName').value; 
    const dogYears = parseInt(document.getElementById('dogYears').value) || 0; 
    const dogMonths = parseInt(document.getElementById('dogMonths').value) || 0;

    if (!dogName || (dogYears === 0 && dogMonths === 0)) {
        document.getElementById('dogResult').textContent = "Por favor, preencha o nome e a idade do cachorro.";
        return;
    }

    const totalDogAgeInYears = dogYears + dogMonths / 12; 
    let earlyYears = 2; 
    earlyYears *= 10.5; 
    let laterYears = totalDogAgeInYears - 2; 

    laterYears = laterYears > 0 ? laterYears * 4 : 0; 

    let dogAgeInDogYears = earlyYears + laterYears; 

    document.getElementById('dogResult').textContent = `Meu nome é ${dogName}. Eu tenho ${totalDogAgeInYears.toFixed(2)} anos em anos humanos, o que equivale a ${dogAgeInDogYears.toFixed(2)} anos em anos de cachorro.`;
});

document.getElementById('calculateCatBtn').addEventListener('click', function() {
    const catName = document.getElementById('catName').value; 
    const catYears = parseInt(document.getElementById('catYears').value) || 0; 
    const catMonths = parseInt(document.getElementById('catMonths').value) || 0; 

    if (!catName || (catYears === 0 && catMonths === 0)) {
        document.getElementById('catResult').textContent = "Por favor, preencha o nome e a idade do gato.";
        return;
    }

    const totalCatAgeInYears = catYears + catMonths / 12; 
    let catAgeInHumanYears;

    if (catMonths <= 2) {
        catAgeInHumanYears = catMonths * 1.25; 
    } else if (totalCatAgeInYears === 1) {
        catAgeInHumanYears = 15; 
    } else if (totalCatAgeInYears === 2) {
        catAgeInHumanYears = 24; 
    } else {
        catAgeInHumanYears = 24 + (totalCatAgeInYears - 2) * 4; 
    }

    document.getElementById('catResult').textContent = `Meu nome é ${catName}. Eu tenho ${totalCatAgeInYears.toFixed(2)} anos em anos humanos, o que equivale a ${catAgeInHumanYears.toFixed(2)} anos em anos de gato.`;
});
