function abrirModal(carregarModal) {
  if (window.innerWidth > 600) {
    let modal = document.getElementById(carregarModal);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function fecharModal(fecharModal) {
  if (window.innerWidth > 600) {
    let modal = document.getElementById(fecharModal);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function abrirModal2(carregarModal2) {
  if (window.innerWidth > 600) {
    let modal2 = document.getElementById(carregarModal2);
    modal2.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function fecharModal2(fecharModal2) {
  if (window.innerWidth > 600) {
    let modal2 = document.getElementById(fecharModal2);
    modal2.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}
