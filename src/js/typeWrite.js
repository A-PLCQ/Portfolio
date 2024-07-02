export function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";

  let i = 0, fin = false;

  function anim() {
    if (!fin) {
      const nbChar = 1.5;
      const caracteres = textoArray.slice(i, i + nbChar);
      elemento.innerHTML += caracteres.join("");
      i += nbChar;

      if (i >= textoArray.length) {
        fin = true;
      }

      requestAnimationFrame(anim);
    }
  }

  requestAnimationFrame(anim);
}
