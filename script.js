// let the page load...
document.addEventListener('DOMContentLoaded', () => {
  // assign the button click
  document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', e => {
   
      // first close all
      document.querySelectorAll('.dropdown-content').forEach(div => div.classList.remove('show'))
      // open the one you want which is CLOSEST
      e.target.closest('.dropdown').querySelector('.dropdown-content').classList.add('show');
      
      
    })
  })

  // catch the click outside
  document.addEventListener('click', e => {
  if (e.target.classList.contains('dropbtn')) return;
    document.querySelectorAll('.dropdown-content').forEach(div => div.classList.remove('show'))
  })



})
