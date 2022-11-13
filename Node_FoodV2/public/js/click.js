

const tdClickHandlerV1 = (tag) => {
  const target = tag.target;
  if (target.tagName === "TD") {


  }
};
const tdClickHandlerV2 = (tag) => {
  const target = tag.target;

  const parentTR = target.closest("TR");
  const t_date = parentTR.dataset.t_date;

  document.location.href = `/food/${t_date}/`;
};

document.addEventListener("DOMContentLoaded", () => {

  fdTable?.addEventListener("click", tdClickHandlerV2);
});
