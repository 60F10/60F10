// --- Fondo Matrix ---

    const canvas = document.getElementById("fondo");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letras = "ア01ァカ01サタ01ナハマ01ヤャラ01ワン01";
    const fontSize = 5;
    const columnas = canvas.width / fontSize;

    let lluvia = [];
    for (let i = 0; i < columnas; i++) {
      lluvia[i] = 1;
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 255, 0, 0.36)";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < lluvia.length; i++) {
        const text = letras.charAt(Math.floor(Math.random() * letras.length));
        ctx.fillText(text, i * fontSize, lluvia[i] * fontSize);

        if (lluvia[i] * fontSize > canvas.height && Math.random() > 0.975) {
          lluvia[i] = 0;
        }
        lluvia[i]++;
      }
    }
    setInterval(draw, 35);