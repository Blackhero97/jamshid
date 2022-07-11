const sr = ScrollReveal({
    origin: 'top',
    distance: '200px',
    duration: 1500,
    reset:true,
    delete: 500,
  })
sr.reveal( `.info, .cardd, .sozz,  .data , .home , .bir, .kar`)
sr.reveal( `.footer__content`,{interval: 100})
sr.reveal( `.meny, .stor, .wen, .cheg, .aske, .our, .carousel-inner, .sozzz, .affor, .plan, .start, .kluch`,{origin: 'left'})
sr.reveal( ` `,{origin: 'right'})