document.addEventListener("DOMContentLoaded", () => {
  const tTable = document.querySelector("table.today");
  const tForm = document.querySelector("form.today");
  const tInputs = document.querySelectorAll("input");
  const btnInput = document.querySelector("button.today.input");
  const btnReset = document.querySelector("button.today.reset");

  tTable?.addEventListener("click", (tag) => {
    const target = tag.target;

    if (target.tagName === "TD") {
      // 클릭된 td 를 감싸고 있는 tr을 찾기
      const pTR = target.closest("TR");
      const t_seq = pTR.dataset.seq; // tr 에 부착된 data-seq 값 getter
      const tds = pTR.childNodes;

      for ([index, td] of tds.entries()) {
        // document.querySelector("input[name='t_date']")
        // 배열의 index 를 사용하여 어떤 값을 getter, setter 하는 경우
        // 정확히 원하는 index 를 지정이 안되는 경우가 있다
        //inputs[index].value = td.textContent

        if (td?.title) {
          const input = document.querySelector(`input[name=${td.title}]`);
          input.value = td.textContent;
        }
      }
      document.querySelector("input[name='t_seq']").value = t_seq;
      // button.input tag 에 update 라는 클래스를 부착하라
      btnInput.classList.add("update");
    }
  });
  btnReset?.addEventListener("click", () => {
    btnInput.classList.remove("update");
  });
});
