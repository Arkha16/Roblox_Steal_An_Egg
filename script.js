const semuaGambar = document.querySelectorAll(".pet-image");

semuaGambar.forEach(function(gambar) {
   
    gambar.addEventListener("click",function() {
        const animasi = gambar.dataset.animation;

        gambar.classList.remove(
            "bounce",
        );

        void gambar.offsetWidth;

        gambar.classList.add(animasi);

        gambar.addEventListener("animationend",function() {
            gambar.classList.remove(animasi);
        }, { once: true });

    });

});

