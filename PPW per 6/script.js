window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const pesanan = urlParams.get("pesanan");
    const total = urlParams.get("total");
  
    if (pesanan) {
      document.getElementById("pesanan").value = decodeURIComponent(pesanan);
    }
  
    if (total) {
      document.getElementById("total").value = `Rp ${decodeURIComponent(total)}`;
    }
  };
  
  document.getElementById("purchaseForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nama = document.getElementById("nama").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const nomor = document.getElementById("nomor").value.trim();
    const pesanan = document.getElementById("pesanan").value.trim();
    const total = document.getElementById("total").value.trim();
  
    if (!nama || !alamat || !nomor || !pesanan || !total) {
      alert("Semua data harus diisi!");
      return;
    }
  
    const pesan = `Halo, saya ${nama} ingin memesan:\n${pesanan}\nTotal: ${total}\nAlamat: ${alamat}\nNo. WA: ${nomor}`;
    const whatsappURL = `https://wa.me/6289676737200?text=${encodeURIComponent(pesan)}`;
  
    window.open(whatsappURL, "_blank");
  });
  