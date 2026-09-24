let i = 0;

let running = false;
let timeoutId = null;

// var listeSons=['sons/boowomp.mp3','sons/auugh.mp3','sons/riregoofy.mp3','sons/goofychute.mp3','sons/PROUT.mp3','sons/chocoounoirs.mp3','sons/tpd.mp3','sons/etcetc.mp3',
//     'sons/rocksus.mp3','sons/procedure.mp3','sons/traindebranler.mp3','sons/founkytown.mp3','sons/Babylaugh.mp3','sons/bebe.mp3','sons/boi.mp3','sons/bucheron.mp3','sons/cpatoi.mp3',
//     'sons/Huh.mp3','sons/OHMAGAD.mp3','sons/PUSSY.mp3','sons/riff.mp3','sons/tagueule.mp3','sons/yadezarab.mp3', 'sons/THEONEPIECEISREAL.mp3', 'sons/ambatakum.mp3', 'sons/thugshaker.mp3', 
//     'sons/kidnamedfinger.mp3', 'sons/quandale.mp3', 'sons/Necoarc.mp3', 'sons/tesgayouhetero.mp3', 'sons/sussy.mp3', 'sons/lobster.mp3', 'sons/ltgkys.mp3']

// version corpo, on enlève des sons qui paraîtraient offensifs
var listeSons=['sons/boowomp.mp3','sons/auugh.mp3','sons/riregoofy.mp3','sons/goofychute.mp3','sons/PROUT.mp3',
    'sons/rocksus.mp3','sons/procedure.mp3','sons/founkytown.mp3','sons/Babylaugh.mp3','sons/bebe.mp3','sons/boi.mp3','sons/bucheron.mp3','sons/cpatoi.mp3',
    'sons/Huh.mp3','sons/OHMAGAD.mp3','sons/riff.mp3','sons/tagueule.mp3','sons/THEONEPIECEISREAL.mp3','sons/thugshaker.mp3', 
    'sons/kidnamedfinger.mp3', 'sons/quandale.mp3', 'sons/Necoarc.mp3', 'sons/tesgayouhetero.mp3', 'sons/sussy.mp3', 'sons/lobster.mp3']

function playRandom() {
  const src = listeSons[Math.floor(Math.random() * listeSons.length)];
  new Audio(src).play();
  scheduleNext();
}

function scheduleNext() {
  const delay = (Math.floor(Math.random() * (120 - 30 + 1)) + 30) * 1000; // 30–120 s
  timeoutId = setTimeout(playRandom, delay);
}


function toggle(btn) {
  if (running) {
    running = false;
    clearTimeout(timeoutId);
    document.body.classList.remove('awake');
    new Audio('sons/stop.mp3').play();
    btn.textContent = 'Détente';
  } else {
    running = true;
    document.body.classList.add('awake');
    new Audio('sons/start.mp3').play();
    scheduleNext();
    btn.textContent = 'Stop';
  }
}

// function alert(){

//     var listeSons=['sons/boowomp.mp3','sons/auugh.mp3','sons/riregoofy.mp3','sons/goofychute.mp3','sons/PROUT.mp3','sons/chocoounoirs.mp3','sons/tpd.mp3','sons/etcetc.mp3',
//     'sons/rocksus.mp3','sons/procedure.mp3','sons/traindebranler.mp3','sons/founkytown.mp3','sons/Babylaugh.mp3','sons/bebe.mp3','sons/boi.mp3','sons/bucheron.mp3','sons/cpatoi.mp3',
//     'sons/Huh.mp3','sons/OHMAGAD.mp3','sons/PUSSY.mp3','sons/riff.mp3','sons/tagueule.mp3','sons/yadezarab.mp3', 'sons/THEONEPIECEISREAL.mp3', 'sons/ambatakum.mp3', 'sons/thugshaker.mp3', 
//     'sons/kidnamedfinger.mp3', 'sons/quandale.mp3', 'sons/Necoarc.mp3', 'sons/tesgayouhetero.mp3', 'sons/sussy.mp3', 'sons/lobster.mp3', 'sons/ltgkys.mp3']
//     var random = listeSons[Math.floor(Math.random() * listeSons.length)]
//     console.log('test random: ' + random)
//     new Audio(random).play()
//     timer();
// }

// function timer(){       // entre 10 et 60 secs

//     // if(active){
//     //     if(active == 1){           // var définie mais on a mis sa valeur sur 1 pr finir le processus du bouton
//     //         console.log('arrivé');
//     //         return;
//     //     }
//     // } 
//     //else{
//     //var active = 0;
//         var test = Math.floor(Math.random() * (120 - 30 + 1)) + 30;
//         console.log(test*1000);

//         //for(var i =0; i<101;i++){
//             setTimeout(() => {
//                 alert();
//             },  test*1000 )
    
//     //}

//     //active = 1;
//     //}


// }