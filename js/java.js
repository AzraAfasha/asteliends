var daftarGambar = [
    "./gambar/Astelica_Kasdea_Charsheet.jpg",
    "./gambar/astelica-chibi.png",
    "./gambar/half-body.png",    
    "./gambar/Astelica_Kasdea.png",
]; 

    var indeksGambar = 0;
    var interval = 20000;
    var gambar = document.getElementById("gambar");

    function gantiGambarBerikutnya() {
        gambar.classList.remove("slide-tengah");
        gambar.classList.add("slide-kiri");
        setTimeout(function() {
            indeksGambar++;
            if (indeksGambar >= daftarGambar.length) {
                indeksGambar = 0;
            }
            gambar.src = daftarGambar[indeksGambar];
            gambar.classList.remove("slide-kiri");
            gambar.classList.add("slide-tengah");
        }, 500); // Delay 500ms untuk menghilangkan animasi slide
    }

    function gantiGambarSebelumnya() {
        gambar.classList.remove("slide-tengah");
        gambar.classList.add("slide-kanan");
        setTimeout(function() {
            indeksGambar--;
            if (indeksGambar < 0) {
                indeksGambar = daftarGambar.length - 1;
            }
            gambar.src = daftarGambar[indeksGambar];
            gambar.classList.remove("slide-kanan");
            gambar.classList.add("slide-tengah");
        }, 500); // Delay 500ms untuk menghilangkan animasi slide
    }
    setInterval(gantiGambarBerikutnya, interval);

    const header = document.querySelector(".header");
    const menu = document.querySelector(".menu");
    
    let prevScrollPos = window.pageYOffset;
    
    window.addEventListener("scroll", function() {
      let currentScrollPos = window.pageYOffset;
    
      if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
      } else {
        header.style.top = `-${menu.offsetHeight}px`;
      }
    
      prevScrollPos = currentScrollPos;
    });
    