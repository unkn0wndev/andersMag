const letterA = document.querySelector('#_aAnders_');
const letterN = document.querySelector('#_n_');
const letterD = document.querySelector('#_d_');
const letterE = document.querySelector('#_e_');
const letterR = document.querySelector('#_r_');
const letterS = document.querySelector('#_s_');
const ma = document.querySelector('#_maRechthoek_');
const hart = document.querySelector('#_hart_');
const hart = document.querySelector('#_hart_');

const alleLetters = [letterA, letterN, letterD, letterE, letterR, letterS];


const alleTimeLine = new TimelineMax({});

const tlm = new TimelineMax({});

const malijn = new TimelineMax({});

const hartlijn = new TimelineMax({});

hart.addEventListener('click', _ =>{
  hartlijn.to(hart, 10,
    {
      rotation: 360,
      transformOrigin:"center",
      scale:1.5,
      ease: Power0.easeNone,
      repeat:-1
    },
  0);
})



ma.addEventListener('click', _ =>{
malijn.to(ma, 1, {scaleX: 5});
malijn.to(ma, 1, {scaleY: 5});
})


// TweenMax.to(letterA, 2, {x:100});
letterA.addEventListener('click', _ =>{
  tlm.to(letterA, 1, {scaleX: 7});
  tlm.to(letterA, 1, {scaleY: 7});
  tlm.to(letterA, 1, {scaleZ: 7});
  tlm.to(letterA, 1, {scaleX: 1});
  tlm.to(letterA, 1, {scaleY: 1});
  tlm.to(letterA, 1, {scaleZ: 1});
})

letterD.addEventListener('click', _ =>{
alleTimeLine.to(alleLetters, 1, {scaleX:10});
alleTimeLine.to(alleLetters, 1, {scaleY:-10});
alleTimeLine.to(alleLetters, 1, {scaleZ:10});
alleTimeLine.to(alleLetters, 2, {scaleX:1});
alleTimeLine.to(alleLetters, 2, {scaleY:1});
alleTimeLine.to(alleLetters, 2, {scaleZ:1});
})
