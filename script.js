// появление блоков
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".fade").forEach(el=>{
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const shape1 = document.querySelector('.shape-1');
        const shape2 = document.querySelector('.shape-2');

        if (shape1 && shape2) {
            shape1.style.transform = `translate3d(${scrolled * 0.15}px, ${scrolled * 0.1}px, 0)`;
            shape2.style.transform = `translate3d(${scrolled * -0.1}px, ${scrolled * -0.15}px, 0)`;
        }
    });
});