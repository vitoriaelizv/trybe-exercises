// 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

let chave = Object.values(order)[3];

const customerInfo = (order) => {
    let delivery = Object.values(chave)[2];
    let deliveryPerson = Object.values(delivery)[0];
    let address = Object.values(order)[2];
    console.log(`Olá, ${deliveryPerson}. 
    Entrega para: ${Object.values(order)[0]}
    Telefone: ${Object.values(order)[1]}
    R: ${Object.values(address)[0]}
    N: ${Object.values(address)[1]}
    AP: ${Object.values(address)[2]}`)

}

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
    let pizzas = Object.values(chave)[0];
    console.log(`Olá, Luiz Silva, o total do seu pedido de ${Object.keys(pizzas)[0]}, ${Object.keys(pizzas)[1]} e Coca-Cola Zero é R$50,00`);
}

orderModifier(order);
