const panels = document.querySelectorAll('.panel');
function toggleOpen() {
  this.classList.toggle('open');
};

//////////Starting Transition **after** flex-grow ////////////////
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {      //cannot use === due to firefox bug
  this.classList.toggle('open-active');
  }
};
////////////////////////////

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));