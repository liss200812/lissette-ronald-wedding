const seal = document.getElementById('seal');
const envelope = document.getElementById('envelope');
const intro = document.getElementById('intro');
const reveal = document.getElementById('reveal');
const continueBtn = document.getElementById('continueBtn');
const musicBtn = document.getElementById('musicBtn');
let opened = false;

function openInvitation(){
  if(opened) return;
  opened = true;
  envelope.classList.add('open');
  setTimeout(()=>{
    intro.classList.add('done');
    setTimeout(()=>{
      document.getElementById('inicio').style.display='none';
      reveal.classList.add('show');
      reveal.setAttribute('aria-hidden','false');
      window.scrollTo({top:0,behavior:'instant'});
    },650);
  },2100);
}
seal.addEventListener('click', openInvitation);
document.getElementById('envelopeWrap').addEventListener('click', (e)=>{ if(e.target!==seal) openInvitation(); });
continueBtn.addEventListener('click', ()=>document.getElementById('contenido').scrollIntoView({behavior:'smooth'}));
musicBtn.addEventListener('click', ()=>alert('Aquí conectaremos “En Vivo y en Directo” cuando tengamos una fuente de audio autorizada.'));
