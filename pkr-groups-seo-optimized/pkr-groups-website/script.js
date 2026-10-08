document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='72px';nav.style.left='16px';nav.style.right='16px';nav.style.padding='18px';nav.style.border='1px solid rgba(255,255,255,.1)';nav.style.borderRadius='16px';nav.style.background='#0b1020';nav.style.flexDirection='column'});
