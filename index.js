//const p = document.querySelector('p');
//p.remove();

// Query al and remove

const ps = document.querySelectorAll('p');
ps.forEach(function (p) {
  console.log(p.textContent);
});
