// import {one, two} from './main.js';
import {one as first} from './main.js';
import * as data from './main.js';

// import { default as sayHi } from './mainjs';
// import { sayBye } from './mainjs';
import sayBye from './main.js'; // если default

// console.log(`${one} and ${two}`);
// console.log(first);
console.log(`${data.one} and ${data.two}`);
data.sayHi();

sayBye();