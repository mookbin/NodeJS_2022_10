const tdClickHandler = (tag) => {
  const target = tag.target;
  const parentTR = target.closest("TR");
  const t_date = parentTR.dataset.t_date;
  document.location.href = `/`;
};

const tdClickHandlerV1 = (tag) => {
  const target = tag.target;
  if (target.tagName === "TD") {

    const t_date = target.dataset.t_date;


    document.location.href = `/food/detail/${t_date}`;
  }
};
const tdClickHandlerV2 = (tag) => {
  const target = tag.target;

  const parentTR = target.closest("TR");

  const t_date = parentTR.dataset.t_date;

  document.location.href = `/food/${t_date}/detail`;
};

document.addEventListener("DOMContentLoaded", () => {
  const fdTable = document.querySelector("table.food.list");

  fdTable?.addEventListener("click", tdClickHandlerV2);
});
