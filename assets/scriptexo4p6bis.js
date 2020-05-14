let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

var week = days.length -1; 

for(i = 0; i <= week; i++){
   console.log('mon index' + i)
  if(i <= 4) {
    var p= document.createElement('P')
    //amorce la création d'un élément
    p.innerHTML= days[i]
    document.body.appendChild(p)
     // ajoute l'élement P crée ci dessus dans le html

  }
  else {
  var p = document.createElement('P');

  p.innerHTML = days[i];
  p.style.fontWeight = 'bold';
  document.body.appendChild(p);
  }
}