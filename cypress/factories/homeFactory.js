var faker = require('faker');


export default {

    finance: function(){

        var data ={
            descricao: faker.lorem.words(),
            descricao2: faker.lorem.words(),
            valor: faker.datatype.float({min: 10, max: 500, precision: .01}),
            valorNeg: faker.datatype.float({min: -10, max: -300, precision: .01}),
            data: '2022-07-03',
        }
        return data;
    }
    
}