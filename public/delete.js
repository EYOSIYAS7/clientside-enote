const deleteLink = document.querySelectorAll(".trash");
deleteLink.forEach((deleteLink) => {
  deleteLink.addEventListener("click", () => {
    const endpoint = deleteLink.dataset.req;
    console.log("delete link clicked");
    fetch(endpoint, { method: "DELETE" })
      .then((data) => {
        data.json().then((result) => {
          window.location.href = result.redirect;

          return result.redirect;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
