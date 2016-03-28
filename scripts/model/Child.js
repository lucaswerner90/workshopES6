import {Person} from './Person';

class Child extends Person {
	constructor(name='Lucas') {
		super();
    this._name=name;
    Child._numeroDeHijos++;
    console.log(Child._numeroDeHijos);
	}
  static get recuento(){
    return Child._numeroDeHijos;
  }
	get name() {
		return this._name;
	}

};
Child._numeroDeHijos=0;

export {Child};
