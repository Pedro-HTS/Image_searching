const search = document.querySelector(".search-box input"),
  images = document.querySelectorAll(" .image-box ");

search.addEventListener("input", () => {
  let searchValue = search.value,
    value = searchValue.toLowerCase();
  images.forEach((image) => {
    val = image.dataset.name.toLowerCase();
    if (val.includes(value)) {
      return (image.style.display = "block");
    }
    image.style.display = "none";
  });
});

// ^^ Fiz a programação um pouco diferente dq apresenta no video pra poder ver os resultados alterando enquanto digita, usando o "include" invés de comparar literalmente após apertar enter

//(tambem, a partir disso, não é necessário receber um valor da key apertada, já q não é lida)

//(engráçado q eu fiquei procurando o pq a função "contains" não tava funcionando, fiquei todo confuso, até perceber q "Contains" é do java, kk, o "include" q é do js)

//troquei de "keyup" pra "input" pros resultados mudarem enquanto você segura uma tecla, também descobri a diferença entre "input" e "change"

// search.addEventListener("keyup", () => {
//   if (search.value != "") return;

//   images.forEach((image) => {
//     image.style.display = "block";
//   });
// });

// ^^ já q eu não to procurando pelo literal, essa função q mostra os filmes após a string toda ser limpa se torna des-necessária... ou pelo menos parece kk
