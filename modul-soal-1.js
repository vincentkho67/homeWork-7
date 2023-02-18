function persegi(sisi) {
    let luas = sisi * sisi;
    let keliling = 4 * sisi;
    console.log(`Persegi ini memiliki luas : ${luas}, keliling : ${keliling}`);
}

function persegiPanjang(panjang,lebar) {
    let luas = panjang * lebar;
    let keliling = 2 * (panjang + lebar);
    console.log(`Persegi panjang ini memiliki luas : ${luas}, keliling : ${keliling}`);
}

const fungsi = {persegi, persegiPanjang};
module.exports = {fungsi};