document.addEventListener("DOMContentLoaded", () => {
  const updateBTN = document.querySelector("button.buyer.update");
  const deleteBTN = document.querySelector("button.buyer.delate");
  const buttonBox = document.querySelector("article.detail.button");

  buttonBox?.addEventListener("click", (tag) => {
    const button = tag.target;
    if (button.tagName === "BUTTON") {
      const bcode = button.closest("article")?.dataset.b_code;
      //alert(button.classList);
      const classList = Array.from(button.classList);
      let url = "/buyer";
      if (classList.indexOf("update") > 0) {
        //alert(`update ${bcode}`);
        url += `/update/${bcode}`; // buyer/update/b0001
        //location.href : GET method 로 새로운 페이지를 요청하기
        //현재 보이는 화면이 뒤로 밀리고 새로운 페이지가 열린다
        document.location.href = url;
      } else if (classList.indexOf("delete") > 0) {
        if (!confirm("정말로 삭제하겠습니까?")) {
          return false;
        }
        //alert(`삭제 ${bcode}`);
        url += `/delete/${bcode}`; // ==> /buyer/delete/B0001
        //location.replace()함수 : 현재 화면(페이지) 를 url 페이지로 덮어쓰기
        // 뒤로가기를 할 때 이 페이지를 건너뛴다
        // 현재 보고있는 detail 데이터가 삭제되었는데
        // 뒤로가기를 했을 때 다시 detail 화면이 나타나는 것은 매우 어색하다
        // 이럴 때는 replace() 함수를 사용한다
        document.location.replace(url);
      }
    }
  });

  //   updateBTN?.addEventListener("click", () => {
  //     const parents = updateBTN.closest("article");
  //     const bcode = parents.dataset.bcode;
  //     alert(bcode);
  //   });
});
