alert("Selamat datang di KalkulatorKu!")

function calculatorPage() {
    // Pilih menu
    const valueMenu = prompt(`Pilih menu:
    1. Penjumlahan
    2. Pengurangan
    3. Pembagian
    4. Perkalian
    5. Pangkat 2
    6. Akar Pangkat 2
    7. Akar Pangkat 3`);

    // function matematika
    const penjumlahan = (a, b) => parseFloat(a) + parseFloat(b);
    const pengurangan = (a, b) => a - b;
    const pembagian = (a, b) => a / b;
    const perkalian = (a, b) => a * b;
    const pangkat2 = (a) => a ** 2;
    const akarPangkat2 = (a) => Math.sqrt(a);
    const akarPangkat3 = (a) => Math.cbrt(a);

    let val1;
    let val2;

    // Ambil angka
    if (valueMenu > 0 && valueMenu < 5) {
        val1 = prompt("Masukan angka pertama:")
        val2 = prompt("Masukan angka kedua:")
    } else if (valueMenu >= 5 && valueMenu <= 7) {
        val1 = prompt("Masukan angka:")
    } else {
        alert("Pilih salah satu opsi dari 1 - 8")
        calculatorPage();
    }
    // console.log(val1, val2);
    let result;

    // Case matematika
    switch (valueMenu) {
        case "1":
            result = penjumlahan(val1, val2);
            alert(`hasil penjumlahan dari ${val1} + ${val2} = ${result}`);
            break;
        case "2":
            result = pengurangan(val1, val2);
            alert(`hasil penjumlahan dari ${val1} - ${val2} = ${result}`);
            break;
        case "3":
            result = pembagian(val1, val2);
            alert(`hasil pembagian dari ${val1} : ${val2} = ${result}`);
            break;
        case "4":
            result = perkalian(val1, val2);
            alert(`hasil perkaliam dari ${val1} x ${val2} = ${result}`);
            break;
        case "5":
            result = pangkat2(val1);
            alert(`hasil dari ${val1} pangkat 2 = ${result}`);
            break;
        case "6":
            result = akarPangkat2(val1);
            alert(`hasil dari ${val1} akar pangkat 2 = ${result}`);
            break;
        case "7":
            result = akarPangkat3(val1);
            alert(`hasil dari ${val1} akar pangkat 3 = ${result}`);
            break;
    };

    // confirm
    const valConfirm = confirm("Apakah anda ingin ke menu awal?");
    if (valConfirm == true) {
        calculatorPage();
    } else {
        alert("Sampai jumpa lagi!")
    }
}

calculatorPage();
