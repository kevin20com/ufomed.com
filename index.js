const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';
const observer = new IntersectionObserver((entradas, observer) => {
 entradas.forEach(entrada => {
   let indexsSeccionActiva
   
   if(entrada.isIntersecting) {
   indicador.style.transform = `translateX(${tamañoIndicador * indexsSeccionActiva}px)`;
   } indexsSeccionActiva   = [...secciones].indexOf(entrada.target);
 });
},  {
   rootMargin: '-80px 0px 0px 0px',
   threshold: 0.2
});

observer.observe(document.getElementById('hero'));

observer.observe(Inicio);
observer.observe(Nosotros);
observer.observe(Ubicacion);
observer.observe(Servicios);
observer.observe(Citas);
observer.observe(Diplomados);


const onResize = () => {

   tamañoIndicador = menu.querySelector('a').offsetWidth

   indicador.style.width = `${tamañoIndicador} px`;

   indicador.style.transform = `translateX(${tamañoIndicador * indexsSeccionActiva}px)`;
}

window.addEventListener('resize', onResize);