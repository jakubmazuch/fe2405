const jsonData = {
    "jmeno": "Pepa",
    "prijmeni": "Novák",
    "vek": 30,
    "mesto": "Praha",
    "email": "josefnovak@example.com",
    "telefon": "+420 123 456 789",
    "dovednosti": [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL"
    ],
    "automobil": {
        "znacka": "Škoda",
        "model": "Octavia",
        "rok_vyroby": 2015,
        "barva": "modrá",
        "vin": "1234567890",
        "SPZ": "EL2 5896"
    }
};

function zpracuj(data) {
    // Zde můžete začít psát váš kód
    console.log(`Jméno: ${data.jmeno}`);
    console.log(`Příjmení: ${data.prijmeni}`);
}

zpracuj(jsonData);