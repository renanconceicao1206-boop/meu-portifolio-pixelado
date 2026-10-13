const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filters=document.querySelectorAll('.filter');const projects=document.querySelectorAll('.project');filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;projects.forEach(p=>{p.style.display=(filter==='all'||p.dataset.category===filter)?'block':'none'})}));



<a
  href="https://wa.me/5598989205288"
  target="_blank"
  rel="noopener noreferrer"
  class="btn-whatsapp"
>
  ENVIAR MENSAGEM
</a>


document.getElementById('whatsappLink').href='https://wa.me/5598989205288?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.';
document.getElementById('instagramLink').href='https://instagram.com/c_rzim20';

document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const name=e.target.querySelector('input').value;alert(`Obrigado, ${name}! Agora configure o formulário para enviar para seu WhatsApp ou e-mail.`)});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.pixel-card,.section-title').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .5s ease,transform .5s ease';observer.observe(el)});document.addEventListener('DOMContentLoaded',()=>{});const style=document.createElement('style');style.textContent='.show{opacity:1!important;transform:translateY(0)!important}';document.head.appendChild(style);