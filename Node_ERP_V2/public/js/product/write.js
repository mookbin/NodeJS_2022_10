document.addEventListener("DOMContentLoaded", () => {
  const btnInput = document.querySelector("button.product.input");
  const btnList = document.querySelector("button.product.list");

  const formLegend = document.querySelector("form.product.write legend");
  const pcodeInput = document.querySelector("input[name='p_code']");

  const btnCodeCheck = document.querySelector("button.product.code_check");
  const btnCodeCreate = document.querySelector("button.product.code_create");

  btnInput?.addEventListener("click", () => {
    const productInputs = document.querySelectorAll("input");
    for (input of productInputs) {
      const tagTitle = input?.title;

      if (tagTitle) {
        const value = input.value;
        if (!value) {
          alert(`필수 입력항목 입니다\n"${tagTitle}"`);
          input.select();
          return false;
        }
      }
    }
    document.querySelector("form.product.write").submit();
  }); 


  btnCodeCreate?.addEventListener("click", async () => {

    const res = await fetch("/product/get/pcode");

    const pcode = await res.text();

    pcodeInput.value = pcode;
    document.querySelector("input[name='p_title']").select();
  });

  btnCodeCheck?.addEventListener("click", () => {

    const pcode = pcodeInput.value;
    if (!pcode) {
      alert("중복검사를 하려면 상품 코드를 입력하세요");
      pcodeInput.select();
      return false;
    }

    fetch(`/product/check/${pcode}`)
      .then((res) => res.json()) 
      .then((json) => {
        if (json.status) {
          alert(`${json.message}\n 다른코드를 입력하세요`);
          pcodeInput.select();
        } else {
          alert("사용가능한 코드입니다");
          document.querySelector("input[name='p_title']").select();
        }
      });
  });

  if (public_pcode) {
    formLegend.textContent = "상품 정보 수정";

    pcodeInput.readOnly = true;
    btnInput.style.backgroundColor = "#00AAAA";
    btnCodeCreate.disabled = "disabled";
    btnCodeCheck.disabled = "disabled";
  }
});
