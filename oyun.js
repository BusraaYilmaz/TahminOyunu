alert("Adınız Derinsu ise oynayabilirsiniz 😜");
//!{1-20-->Floor(Math.random*20+1)}
//Bilgisayar 1-20 arasında bir sayı tut!

let rastgeleSayi = Math.floor(Math.random() * 20 + 1);

let puanPc = 10;
let rekorPc = 0;

//Her kontrol et butonuna tiklandiginda calisacak fonksiyon
document.querySelector(".kontrol").onclick = function () {
  //todo *Eger tahminim dogru ise;*
  const tahmin = document.querySelector(".tahmin").value;

  if (tahmin == rastgeleSayi) {
    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".question").textContent = rastgeleSayi;

    document.querySelector(".mesaj").textContent =
      "Tebrikleeeeer Bildin Derinsuu 🎈🎈";

    //todo *Rekoru guncelle*
    if (puanPc > rekorPc) {
      rekorPc = puanPc;
      document.querySelector(".rekorSkor").textContent = puanPc;
    }

    //todo *Eger tahminim yanlıs ise;*
  } else {
    if (puanPc > 1) {
      puanPc--;

      let mesaj = document.querySelector(".mesaj");
      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttır 👆")
        : (mesaj.textContent = "Azalt👇");
      document.querySelector(".skor").textContent = puanPc;
    } else {
      document.querySelector(".mesaj").textContent =
        "Oyunu Kaybettin minik farem 😢";
      document.querySelector(".skor").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
};
//Tekrar butonuna basildiginda oyun baslangıc degerleri yuklensin
//! ()=>  ==  Function() yazmak ile ayniiii
document.querySelector(".tekrar").onclick = () => {
  rastgeleSayi = Math.floor(Math.random() * 20 + 1);

  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".question").textContent = "?";
  document.querySelector(".mesaj").textContent = "Tahmine Başlanıyooor!";
  puanPc = 10;
  document.querySelector(".skor").textContent = puanPc;
  document.querySelector(".tahmin").value = "";
};

//Klavyeden bir tuşa basildiginda cali
document.querySelector(".tahmin").onkeydown = function (olay) {
  if (olay.keyCode == 13) {
    document.querySelector(".kontrol").onclick();
  }
  if (olay.keyCode == 82) {
    document.querySelector(".tekrar").onclick();
  }
};
