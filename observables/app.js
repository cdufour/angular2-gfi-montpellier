$(document).ready(function() {

  // Promesse (jquery)
  $.get('http://localhost:5000/books').then(
    function(res) {
      //console.log(res);
    },
    function(res) {
      //console.log(res);
    }
  );

  var query = $.get('http://localhost:5000/books');

  var successCb = function(res) {
    //console.log('retour requete');
  };

  query.then(successCb);

  //console.log('coucou');

});


var tab = [3, 60, 7, 28];

tab.forEach(function(x) {
  //console.log(x);
});

var tabObs =
Rx.Observable
  .from(tab)
  //.take(2)
  .subscribe(createSubscriber('from'));

Rx.Observable
  .range(4, 2)
  .subscribe(createSubscriber('range'));

/*
Rx.Observable
  .interval(500)
  .subscribe(createSubscriber('interval'));
*/

Rx.Observable
  .from([3, 60, 7, 28])
  .filter(function(x) {
    return x % 2 === 0;
  })
  .subscribe(createSubscriber('fromMap'));




function createSubscriber(tag) {
  return {
    next: function(item) {console.log(tag + '.next ' + item);},
    error: function(item) {console.log(tag + '.error ' + item);},
    complete: function(item) {console.log(tag + '.complete ');}
  };
}
