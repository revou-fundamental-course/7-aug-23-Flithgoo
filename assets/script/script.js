// menambahkan dan menghapus class 'show' saat terjadi intersection
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

// menambahkan dan menghilangkan class show untuk dropdown button
document.addEventListener("DOMContentLoaded", () => {
  let dropdownButton = document.querySelector(".drop-down");
  let dropdownMenu = document.querySelector("nav ul");

  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });
});

//Tugas dari RevoU

// Hitung Keliling Segitiga
function hitungKeliling() {
  // ambil nilaiInput user
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let hasil = document.getElementById("hasil");

  // validasi input
  let hitung = a + b + c;
  if (isNaN(hitung)) {
    hasil.value = "Harap masukkan angka yang valid!";
  } else {
    hasil.value = hitung;
  }
}

// Hitung Luas Segitiga
function hitungLuas() {
  // ambil nilaiInput user
  let a = parseFloat(document.getElementById("a1").value);
  let t = parseFloat(document.getElementById("t1").value);
  let hasil = document.getElementById("hasil1");

  // validasi input
  let hitung = 0.5 * a * t;
  if (isNaN(hitung)) {
    hasil.value = "Harap masukkan angka yang valid!";
  } else {
    hasil.value = hitung;
  }
}

// Reset Keliling
function resetKeliling() {
  // ambil elemen input
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let c = document.getElementById("c");
  let hasil = document.getElementById("hasil");

  // set value menjadi kosong
  a.value = "";
  b.value = "";
  c.value = "";
  hasil.value = "";
}

// Reset Luas
function resetLuas() {
  // ambil elemen input
  let a = document.getElementById("a1");
  let t = document.getElementById("t1");
  let hasil = document.getElementById("hasil1");

  // set value menjadi kosong
  a.value = "";
  t.value = "";
  hasil.value = "";
}
