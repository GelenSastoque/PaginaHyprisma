// const pdfContainer = document.getElementById('pdf-container');

// function cambiarPDF(pdfUrl) {
//   pdfContainer.innerHTML = ''; // Limpiar el contenedor antes de cargar un nuevo PDF

//   pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
//     for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
//       pdf.getPage(pageNumber).then(page => {
//         const canvas = document.createElement('canvas');
//         pdfContainer.appendChild(canvas);
//         const context = canvas.getContext('2d');
//         const viewport = page.getViewport({ scale: 1.5 });
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         const renderContext = {
//           canvasContext: context,
//           viewport: viewport
//         };
//         page.render(renderContext);
//       });
//     }
//   });
// }

const pdfContainer = document.getElementById('pdf-container');

function cambiarPDF(pdfUrl) {
  pdfContainer.innerHTML = ''; // Limpiar el contenedor antes de cargar un nuevo PDF

  pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      pdf.getPage(pageNumber).then(page => {
        const canvas = document.createElement('canvas');
        pdfContainer.appendChild(canvas);
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      });
    }
  });
}

