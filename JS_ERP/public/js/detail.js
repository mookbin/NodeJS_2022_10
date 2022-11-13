document.addEventListener("DOMContentLoaded", () => {
const buyerDelete = document.querySelector("button.buyer_delete");
const buyerUpdate = document.querySelector("button.buyer_update");
const num = document.querySelector(".btn_box").dataset.num;


  buyerDelete?.addEventListener("click", () => {
    const del = confirm("삭제?");
    if (!del) {
      return false;
    }
    location.pathname = `users/delete/${num}`;
  });
    
buyerUpdate?.addEventListener("click", () => {
location.pathname = `users/add/${num}`;
  });

});