let savedInfo

try {
  savedInfo = JSON.parse(localStorage.getItem("book"));
} catch (error) {
  console.log('localStorage is empty!');
}

const bookForm = document.getElementById('book')

bookForm.onreset = e=>{
  e.preventDefault()
  const allInfo = [...bookForm.querySelectorAll('[name]')].forEach(input=>console.log(input.value))
  console.log(allInfo);
}
// 0
// ''
// false
// NaN
// undefined
// null