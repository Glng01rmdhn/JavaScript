// Fungsi untuk menyimpan data ke localStorage
function simpanData() {
    const data = {
      nama: "John Doe",
      umur: 30,
      kota: "Jakarta"
    };
  
    // Simpan data ke localStorage dengan kunci "userData"
    localStorage.setItem("userData", JSON.stringify(data));
    console.log("Data berhasil disimpan ke localStorage");  
  }
  
  // Fungsi untuk mengambil data dari localStorage
  function ambilData() {
    const dataString = localStorage.getItem("userData");
    if (dataString) {
      const data = JSON.parse(dataString);
      document.getElementById("hasil").textContent = `Nama: ${data.nama}, Umur: ${data.umur}, Kota: ${data.kota}`;
    } else {
      console.log("Data tidak ditemukan");
    }
  }
  
  // Fungsi untuk menghapus data dari localStorage
  function hapusData() {
    localStorage.removeItem("userData");
    console.log("Data berhasil dihapus dari localStorage");
  }