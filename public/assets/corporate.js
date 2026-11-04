const chapterControls=[...document.querySelectorAll('[data-corp-chapter]')];
const corporateChapters={
  enterprise:{image:'founder-writing',alt:'Bryn Taurai Mteki signing a document',url:'#group',label:'Explore the group'},
  art:{image:'studio',alt:'Bryn Taurai Mteki alongside a monumental stone sculpture',url:'#culture',label:'Discover the gallery'},
  music:{image:'music-stage',alt:'Sekurutau beside a concert stage',url:'#music',label:'Explore World Music'}
};
let corporateRequest=0;
chapterControls.forEach(button=>button.addEventListener('click',()=>{
  const request=++corporateRequest,data=corporateChapters[button.dataset.corpChapter];
  const image=document.querySelector('.corp-hero-image'),media=document.querySelector('.corp-hero-media');
  const pending=new Image();media.classList.add('is-changing');
  const apply=()=>{
    if(request!==corporateRequest)return;
    chapterControls.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    const destination=document.querySelector('#corp-chapter-link');destination.href=data.url;
    destination.innerHTML=data.label+' <span aria-hidden="true">↗</span>';
    document.querySelector('#corp-chapter-status').textContent=data.label;
    media.classList.remove('is-changing');
  };
  pending.onload=()=>{if(request!==corporateRequest)return;image.src=pending.src;image.alt=data.alt;apply()};
  pending.onerror=apply;pending.src='/assets/images/'+data.image+'.webp';
}));
const jumpLinks=[...document.querySelectorAll('.page-jump a')];
if(jumpLinks.length){
  const sections=jumpLinks.map(a=>document.querySelector(a.getAttribute('href')));
  let scheduled=false;
  function updateLocation(){
    scheduled=false;let active=0;
    sections.forEach((section,i)=>{if(section.getBoundingClientRect().top<Math.min(400,innerHeight*.45))active=i});
    jumpLinks.forEach((a,i)=>{if(i===active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});
  }
  window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateLocation)}},{passive:true});
  updateLocation();
}
