document.addEventListener("DOMContentLoaded", () => {
  const btnSubmit = document.querySelector("button.submit");
  btnSubmit?.addEventListener("click", () => {
    const inputs = document.querySelectorAll("form.fd_input input");

    const fd_name = inputs[0];
    const fd_num = inputs[1];

    if (!fd_name.value) {
      alert("날짜를 입력하세요");
      fd_name.focus();
      fd_name.select();
      return false;
    }
    if (!fd_num.value) {
      alert("갯수를 입력하세요");
      fd_num.focus();
      fd_num.select();
      return false;
    }

    document.querySelector("form.fd_input").submit();
  });
});
