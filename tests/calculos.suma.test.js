

const {suma} = require('../controllers/calculos');

test('deberia sumar 2 numeros positivos', ()=>{
const res = suma(2, 3);
expect(res).toBe(5)
})