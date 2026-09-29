const envelopeButton = document.getElementById('envelopeButton');
const envelope = document.getElementById('envelope');
const intro = document.getElementById('intro');
const invitation = document.getElementById('invitation');
const continueButton = document.getElementById('continueButton');
const musicButton = document.getElementById('musicButton');
let opened = false;

envelopeButton.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  envelope.classList.add('open');
  if (navigator.vibrate) navigator.vibrate(35);
  setTimeout(() => {
    intro.style.transition = 'opacity .7s ease';
    intro.style.opacity = '0';
  }, 1150);
  setTimeout(() => {
    intro.style.display = 'none';
    invitation.classList.add('visible');
    invitation.setAttribute('aria-hidden', 'false');
    window.scrollTo({top:0, behavior:'instant'});
  }, 1800);
});

continueButton.addEventListener('click', () => {
  alert('Aquí continuaremos con: Nuestra historia, detalles, dress code, ubicación y RSVP 💙');
});

musicButton.addEventListener('click', () => {
  alert('La música “En Vivo y en Directo” se conectará cuando tengamos una fuente de audio autorizada.');
});
