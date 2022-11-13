document.addEventListener("DOMContentLoaded", () => {
const buyerSave = document.querySelector("button.buyer_save");
  const buyerList = document.querySelector("button.buyer_list");
  const formAdd = document.querySelector("form.add");
  const inputs = document.querySelectorAll("form.add input");


  if (inputs[0].value) {
    inputs[0].setAttribute("readonly", "readonly");
  }

  buyerSave?.addEventListener("click", () => {
 const btnSave = document.querySelectorAll("input");
    console.log(btnSave);
    for (const tag of btnSave) {
      if (tag.name !== "c_num") {
        const value = tag.value;
        if (!value) {
          alert(`값을 입력해주세요\n"${tag.title}"`);
          tag.select(); 
          return false;
        }
      }
    } 
    formAdd.submit();
  });

  buyerList?.addEventListener("click", () => {
     document.location.href = `/users`;
  });
});


