document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const buyerInput = document.querySelector("button.buyer_input");

  nav?.addEventListener("click", (tag) => {
    const target = tag.target;

    if (target.tagName === "LI") {
      const text = target.textContent;

      let path = "/";
      switch (text) {
        case "Home":
          path = "/";
          break;
          case "주문관리":
          path = "/";
          break;
          case "결제관리":
          path = "/";
          break;
        case "거래처관리":
          path = "/users";
          break;
          case "상품관리":
          path = "/";
          break;
      }
      location.pathname = path;
    }
  });

  buyerInput?.addEventListener("click", () => {
    location.pathname = `users/add`;
  });
});