(() => {
  let productTitle = "My amazing product";
  productTitle = "My amazing product changed";
  console.log("productTitle", productTitle);

  //Aquí no se podria usar comillas sencillas dentro del string
  const productDescription = 'Ejemplo';
  console.log("productDescription", productDescription);

  const summary = `Ejemplo de templates ${productTitle}`;
  console.log("summary", summary);

  let isNew = true;

  const ejemplo = `
    title: ${productTitle}
    description: ${productDescription}
    isNew: ${isNew}
  `;

  console.log("ejemplo", ejemplo);

  //Esto es una mala practica debe este en minúscula
  let myStrings: String;
})();
