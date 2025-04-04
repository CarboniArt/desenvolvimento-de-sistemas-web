import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda {
    private _codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produtos: Produto[];

    constructor(codigo: number, data: number, cliente: Cliente, produtos: Produto[]) {
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos;
    }

    public calcularTotal(): number {
        return this._produtos.reduce((total, produto) => total + produto.valor, 0);
    }

    
    public get codigo(): number {
        return this._codigo;
    }

    public get data(): number {
        return this._data;
    }

    public get cliente(): Cliente {
        return this._cliente;
    }

    public get produtos(): Produto[] {
        return this._produtos;
    }

    public set codigo(value: number) {
        this._codigo = value;
    }

    public set data(value: number) {
        this._data = value;
    }

    public set cliente(value: Cliente) {
        this._cliente = value;
    }

    public set produtos(value: Produto[]) {
        this._produtos = value;
    }
}