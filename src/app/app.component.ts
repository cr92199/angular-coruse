import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularcourse';

  constructor() {
    const testMap = [1, 2, 3, 4, 5, 6, 7].map((item) => item * 2);
    console.log(testMap);

    const testForeach = [1, 2, 3, 4, 5, 6, 7].forEach((item) => item * 2);
    console.log(testForeach);

    const testFind = [1, 2, 3, 4, 5, 6, 7].find((item) => item === 4);
    console.log(testFind);

    const testFilter = [1, 2, 3, 4, 5, 6, 7].filter((item) => item % 2);
    console.log(testFilter);

    const testFilterpar = [1, 2, 3, 4, 5, 6, 7].filter(
      (item) => item % 2 === 0
    );
    console.log(testFilterpar);

    const testFindIndex = [1, 2, 3, 4, 5, 80, 7].findIndex(
      (item) => item === 80
    );
    console.log(testFindIndex);

    const testindexof = [1, 2, 3, 4, 5, 80, 7].indexOf(80);
    console.log(testindexof);

    const testindexofcadtex = 'mario'.indexOf('r');
    console.log(testindexofcadtex);

    const testjoin = [1, 2, 3, 4, 5, 80, 7].join(',');
    console.log(testjoin);

    const testsplit = '1,2,3,4,5,6'.split(',');
    console.log(testsplit);

    const testsplice = [1, 2, 3, 4, 5, 80, 7].splice(0, 1);
    console.log(testsplice);

    const testsplice1 = [10, 20, 30, 40, 50, 800, 70];
    testsplice1.splice(0, 1);
    console.log(testsplice1);

    const testreduce = [1, 2, 3, 4, 5, 6, 7].reduce(
      (acumulador, valorEntra) => acumulador + valorEntra,
      100
    );
    console.log(testreduce);

    const testentries = { value: 'martin', key: 'CFK' };
    console.log('entries', Object.entries(testentries));
    console.log('value', Object.values(testentries));
    console.log('key', Object.keys(testentries));

    const array1 = [1, 2, 3, 4, 5, 6];
    const array2 = [10, 11, 12, ...array1];

    const pers1 = { name: 'oliver', edad: 18 };
    const pers2 = { data: 'cristian', ...pers1 };
    console.log('arreglos', array2 , pers2);


    // convertir este json {1: 'a', 2:'a', 3:'a',4:'a', 5:'a', 6:'a' }; en un array y sumar solo los pares

    const a = {1: 'a', 2:'a', 3:'a',4:'a', 5:'a', 6:'a' };
    const ar = Object.keys(a).map(n => parseInt(n)).reduce((acumulador , valor)=>{
      if(valor %2 === 0){
        acumulador = acumulador + valor;
      }
      return acumulador
    } , 0)
    console.log('primer ejercicicio resultado =', ar);


    //[1,2 ,3,4,5,6] filtrar los numeros impares y mostrarlos en cadena

    const d = [0,1,2 ,3,4,5,6];
    console.log(d.filter(n => n%2 !== 0).join(','))

  }

  
}
