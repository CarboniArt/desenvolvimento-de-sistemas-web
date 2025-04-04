export default class Telefone{

    private _ddd: string;
    private _numero: number;
    private _tipo: string;

    constructor(ddd: string, numero: number, tipo: string) {  
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }

    


    
	public get ddd(): string {
		return this._ddd;
	}

    
	public get numero(): number {
		return this._numero;
	}

   
	public get tipo(): string {
		return this._tipo;
	}

    
	public set ddd(value: string) {
		this._ddd = value;
	}

    
	public set numero(value: number) {
		this._numero = value;
	}

    
	public set tipo(value: string) {
		this._tipo = value;
	}


}