import {Child as Children} from '../model/Child';
import {Person as Persona} from '../model/Person';

export function HomeController($scope) {

  $scope.init=()=>{
    let textoPrueba='Helloooooo';
    console.log("Me ejecuto al inicio, soy una Arrow function");
    console.log(textoPrueba);


    $scope.person=new Persona();
    $scope.child=new Children();
    $scope.childTED=new Children("TED");


    console.log("Recuento: "+Children.recuento);
    // let longitudpalabra=4;
    // let numletras=2;
    // let combinacionesPuras=[];
    // let elemento=[];
    // for (var i = 0; i < longitudpalabra; i++) {
    //   elemento.push(0);
    // }
    // // Crea el numero de elementos totales "vacios"
    // for (var i = 0; i < longitudpalabra*numletras; i++) {
    //   combinacionesPuras.push(elemento);
    //   let x=longitudpalabra-1;
    //   for (let x=longitudpalabra-1; x>=0; x--) {
    //     for (var j = 0; j < numletras; j++) {
    //       combinacionesPuras[combinacionesPuras.length-1][x]=j;
    //     }
    //   }
    // }
    // console.log(combinacionesPuras);
  };

}
