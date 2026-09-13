// Video popup modal
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const modalTitle = document.getElementById('modal-title');

document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-video');
    const title = btn.getAttribute('data-title') || 'Project Demo';
    modalVideo.src = src;
    modalTitle.textContent = title;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modalVideo.play().catch(() => {});
  });
});

function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.src = '';
}

document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

// Revision date in footer title block
const revEl = document.getElementById('rev-date');
if (revEl){
  const d = new Date();
  const opts = { year: 'numeric', month: 'short' };
  revEl.textContent = d.toLocaleDateString('en-US', opts);
}
