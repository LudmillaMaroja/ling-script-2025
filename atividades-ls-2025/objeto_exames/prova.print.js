import Exam from './prova.js';

const gabarito = { q1: 'a', q2: 'b', q3: 'c' };
const prova = new Exam(gabarito, 2);

const aluno1 = { q1: 'a', q2: 'b', q3: 'c' };
const nota1 = prova.add(aluno1);
const aluno2 = { q1: 'a', q2: 'c', q3: 'c' };
const nota2 = prova.add(aluno2)
const aluno3 = { q1: 'b', q2: 'a', q3: 'a' };
const nota3 = prova.add(aluno3);

console.log(nota1);
console.log(nota2);
console.log(nota3);

const media = prova.avg();
console.log(media);
const min = prova.min(2);
console.log(min);
const max = prova.max(1);
console.log(max);
const lt = prova.lt(6);
console.log(lt);
const gt = prova.gt(3);
console.log(gt);
