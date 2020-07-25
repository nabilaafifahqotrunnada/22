//JSON

//array barang
let barang = 
[
    {nama: "Beras", harga: 10000, jumlah: 5},
    {nama: "Gula", harga: 14000, jumlah: 5},
    {nama: "Telur", harga: 20000, jumlah: 2},
    {nama: "minyak Goreng", harga: 9000, jumlah: 10}
]

//perubahan format data menjadi json menggunakan fungsi stringify
console.log(JSON.stringify(barang));