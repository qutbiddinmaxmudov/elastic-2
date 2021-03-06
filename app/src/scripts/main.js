const bookForm = document.getElementById("book");

bookForm.onreset = (event) => {
  event.preventDefault();
  const checkboxes = event.target.querySelectorAll("input[type='checkbox']:checked");
  const inputs = event.target.querySelectorAll("input");
  console.log(checkboxes);
};
