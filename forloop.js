// [!] For Loop
/* ALUR
for (bikin variable; ngecek kondisi; maka... (aksinya) apa seteah looping sebelumnya) {
    aksi jika kondisi = true
}
*/

/* ALUR
for (bikin variable (i); selama i masih... ; maka... ) {
    aksi jika kondisi = true
}
*/

for (let i = 0; i < 8; i++) {
    console.log(i);
}

// 

for (let c = 5; c > 0; c--) {
    console.log(c);
}

console.log("border");

// continue = untuk ngeskip/continue ke loop selanjutnya tanpa menjalankan aksi
for (let e = 4; e > 0; e--) {
    if (e === 3) continue;   // 3 di skip
    console.log(e);
}

