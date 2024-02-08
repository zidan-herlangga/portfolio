// Tambahkan event listener untuk membuka modal
const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", openModal);

// Fungsi untuk membuka modal
function openModal() {
  const modal = document.getElementById("menuModal");
  modal.style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
  const modal = document.getElementById("menuModal");
  modal.style.display = "none";
}
