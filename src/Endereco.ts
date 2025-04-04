export default class Endereco{

    private _rua: string;
    private _numero: number;
    private _cidade: string;
    private _estado: string;
    
    constructor(rua: string, numero: number, cidade: string, estado: string) {  
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }

    
	public get rua(): string {
        return this._rua;
	}
    
    
	public get numero(): number {
		return this._numero;
	}

   
	public get cidade(): string {
		return this._cidade;
	}

    
	public get estado(): string {
		return this._estado;
	}

    
	public set rua(value: string) {
		this._rua = value;
	}


	public set numero(value: number) {
		this._numero = value;
	}

   
	public set cidade(value: string) {
		this._cidade = value;
	}

    
	public set estado(value: string) {
		this._estado = value;
	}
    


	

    
  
    
}