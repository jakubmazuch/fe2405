localStorage.setItem('vek', "25");
localStorage.setItem('prijmeni', 'Novak');
localStorage.setItem('jmeno', 'Petr');

for (let i = 0; i < localStorage.length; i++) {
    const klic = localStorage.key(i);
    document.write(klic + ': ' + localStorage.getItem(klic) + '<br>');
}

document.write(localStorage.length + '<br>');
localStorage.removeItem('jmeno');
document.write(localStorage.length + '<br>');
localStorage.clear();
document.write(localStorage.getItem('jmeno') + ' ' + localStorage.getItem('prijmeni') + '<br>');
document.write(localStorage.length + '<br>');