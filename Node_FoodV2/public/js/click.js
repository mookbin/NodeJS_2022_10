const tdClickHandler = (tag) => {
  const target = tag.target;
  const parentTR = target.closest("TR");
  const t_date = parentTR.dataset.t_date;
  document.location.href = `/`;
};
