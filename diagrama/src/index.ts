import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Telefone from "./Telefone";
import Produto from "./Produto";
import Venda from "./Venda";

const endereco = new Endereco("Rua A", 123, "São Paulo", "SP");
const telefone = new Telefone("11", 999999999, "Celular");
const cliente = new Cliente("Maria", 123456789, 19850315, "F", endereco, [telefone]);

const produtos = [
    new Produto(1, "Camiseta", 59.90),
    new Produto(2, "Calça", 129.90)
];

const venda = new Venda(1, Date.now(), cliente, produtos);

console.log(`Total: R$ ${venda.calcularTotal().toFixed(2)}`);
console.log(`Cliente: ${venda.cliente.nome}`);