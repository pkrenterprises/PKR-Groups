document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='72px';nav.style.left='16px';nav.style.right='16px';nav.style.padding='18px';nav.style.border='1px solid rgba(255,255,255,.1)';nav.style.borderRadius='16px';nav.style.background='#0b1020';nav.style.flexDirection='column'});


// PKR Groups enquiry routing
const enquiryForm=document.getElementById('enquiryForm');
const enquiryWhatsAppNumbers=['919381661029','918088804976','918660384137'];
enquiryForm?.addEventListener('submit',(e)=>{
  e.preventDefault();
  const fd=new FormData(enquiryForm);
  const name=fd.get('name')||'';
  const email=fd.get('email')||'';
  const type=fd.get('type')||'';
  const message=fd.get('message')||'';
  const text=`PKR Groups Enquiry\n\nName: ${name}\nEmail: ${email}\nEnquiry Type: ${type}\nMessage: ${message}`;
  const encoded=encodeURIComponent(text);
  // WhatsApp opens with the first official enquiry number. The three numbers are all configured as PKR enquiry contacts.
  window.open(`https://wa.me/${enquiryWhatsAppNumbers[0]}?text=${encoded}`,'_blank','noopener');
});
