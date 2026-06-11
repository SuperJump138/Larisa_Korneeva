
<script>
  // ── MOBILE NAV ──
  function openMobileNav() { document.getElementById('mobileNav').classList.add('open'); document.body.style.overflow='hidden'; }
  function closeMobileNav() { document.getElementById('mobileNav').classList.remove('open'); document.body.style.overflow=''; }

  // ── FADE IN ON SCROLL ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ── GALLERY LIGHTBOX ──
  const galleryImgs = ['img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg'];
  let lbIdx = 0;
  function openLightbox(i) { lbIdx = i; document.getElementById('lbImg').src = galleryImgs[i]; document.getElementById('lightbox').classList.add('open'); document.body.style.overflow='hidden'; }
  function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); document.body.style.overflow=''; }
  function lbPrev() { lbIdx = (lbIdx - 1 + galleryImgs.length) % galleryImgs.length; document.getElementById('lbImg').src = galleryImgs[lbIdx]; }
  function lbNext() { lbIdx = (lbIdx + 1) % galleryImgs.length; document.getElementById('lbImg').src = galleryImgs[lbIdx]; }
  document.getElementById('lightbox').addEventListener('click', function(e){ if(e.target===this) closeLightbox(); });

  // ── CERT LIGHTBOX ──
  const certImgs = ['img/cert_1.jpg','img/cert_2.jpg','img/cert_3.jpg','img/cert_4.jpg','img/cert_5.jpg','img/cert_6.jpg','img/cert_7.jpg'];
  let certIdx = 0;
  function openLightboxCert(i) { certIdx = i; document.getElementById('certLbImg').src = certImgs[i]; document.getElementById('certLightbox').classList.add('open'); document.body.style.overflow='hidden'; }
  function closeCertLightbox() { document.getElementById('certLightbox').classList.remove('open'); document.body.style.overflow=''; }
  function certLbPrev() { certIdx = (certIdx - 1 + certImgs.length) % certImgs.length; document.getElementById('certLbImg').src = certImgs[certIdx]; }
  function certLbNext() { certIdx = (certIdx + 1) % certImgs.length; document.getElementById('certLbImg').src = certImgs[certIdx]; }
  document.getElementById('certLightbox').addEventListener('click', function(e){ if(e.target===this) closeCertLightbox(); });

  // ── QUOTE LIGHTBOX ──
  const quoteImgs = ['img/quote_1.jpg','img/quote_2.jpg','img/quote_3.jpg','img/quote_4.jpg'];
  let qIdx = 0;
  function openLightboxQuote(i) { qIdx = i; document.getElementById('quoteLbImg').src = quoteImgs[i]; document.getElementById('quoteLightbox').classList.add('open'); document.body.style.overflow='hidden'; }
  function closeQuoteLightbox() { document.getElementById('quoteLightbox').classList.remove('open'); document.body.style.overflow=''; }
  function quoteLbPrev() { qIdx = (qIdx - 1 + quoteImgs.length) % quoteImgs.length; document.getElementById('quoteLbImg').src = quoteImgs[qIdx]; }
  function quoteLbNext() { qIdx = (qIdx + 1) % quoteImgs.length; document.getElementById('quoteLbImg').src = quoteImgs[qIdx]; }
  document.getElementById('quoteLightbox').addEventListener('click', function(e){ if(e.target===this) closeQuoteLightbox(); });

  // ── CERTS SLIDER ──
  function scrollCerts(dir) {
    const track = document.getElementById('certsTrack');
    const cardW = track.querySelector('.cert-card').offsetWidth + 16;
    track.scrollBy({ left: dir * cardW * 2, behavior: 'smooth' });
  }

  // ── KEYBOARD ESC for all lightboxes ──
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') { closeLightbox(); closeCertLightbox(); closeQuoteLightbox(); closeMobileNav(); }
    if(e.key === 'ArrowLeft') { if(document.getElementById('lightbox').classList.contains('open')) lbPrev(); if(document.getElementById('certLightbox').classList.contains('open')) certLbPrev(); if(document.getElementById('quoteLightbox').classList.contains('open')) quoteLbPrev(); }
    if(e.key === 'ArrowRight') { if(document.getElementById('lightbox').classList.contains('open')) lbNext(); if(document.getElementById('certLightbox').classList.contains('open')) certLbNext(); if(document.getElementById('quoteLightbox').classList.contains('open')) quoteLbNext(); }
  });
</script>
