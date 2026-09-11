// Accordion pada bagian "Bagaimana penerapannya"
document.querySelectorAll('.acc-trigger').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item = btn.closest('.acc-item');
    const panel = item.querySelector('.acc-panel');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(i=>{
      i.classList.remove('open');
      i.querySelector('.acc-panel').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

// Buka accordion pertama saat halaman dimuat
window.addEventListener('load', ()=>{
  document.querySelectorAll('.acc-item.open .acc-panel').forEach(p=>{
    p.style.maxHeight = p.scrollHeight + 'px';
  });
});