function onClickActive(obj) {
  document.querySelector('#needs').classList.toggle('active');
}
document.querySelector('#needs').addEventListener('click', onClickActive);
