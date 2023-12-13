const linkArray = ["alclad", "teflon", "wash-polish"];

function addEventListener(array) {
  array.forEach((name) => {
    const openPdfBtn = document.querySelector(`#${name}-link`);
    openPdfBtn.addEventListener("click", () => {
      const pdfId = `#${name}-pdf`;
      const pdf = document.querySelector(pdfId);
      console.log(pdf);
      const closeBtn = pdf.querySelector(".close-pdf-btn");
      closeBtn.addEventListener("click", () => {
        pdf.className = "pdf-overlay";
      });
      pdf.className = "pdf-overlay show-pdf";
    });
  });
}

addEventListener(linkArray);
