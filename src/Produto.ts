export default class Produto{
    private _codigo: number;
    private _descricao: string;
    private _valor: number;


    constructor(codigo: number, descricao: string, valor: number) {
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;

    }
    
	public get codigo(): number {
		return this._codigo;
	}

    
	public get descricao(): string {
		return this._descricao;
	}

    
	public get valor(): number {
		return this._valor;
	}

	public set codigo(value: number) {
		this._codigo = value;
	}

    
	public set descricao(value: string) {
		this._descricao = value;
	}

    public set valor(value: number) {
		this._valor = value;
	}


}