document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table.buyer");

  table?.addEventListener("click", (tag) => {
    const target = tag.target;

    if (target.tagName === "TD") {
      const pTR = target.closest("TR");
      const num = pTR.dataset.num;

      location.pathname = `/users/detail/${num}`;
    }
  });
});