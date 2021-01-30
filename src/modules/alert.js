const customAlert = (message) => {
  const html = `
      <div class=" ml-3 top-0 w-6/12 h-10 text-center bg-red-700 text-white transition-all">
        ${message}
      </div>
    `;

  return html;
};

export default customAlert;
