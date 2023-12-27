
function submit() {
    var kodebarang = parseFloat(document.getElementById("kodebarang").value);
    var hargabarang = parseFloat(document.getElementById("hargabarang").value);
    var uangbayar = parseFloat(document.getElementById("uangbayar").value);

    if (!isNaN(kodebarang) && !isNaN(hargabarang) && !isNaN(uangbayar)) {
      var hasil = uangbayar - (kodebarang * hargabarang);
    alert("Total Kembalian " + hasil);
    } 
  }


