import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente {
    private _nome: string;
    private _cpf: number;
    private _dataNascimento: number;
    private _sexo: string;
    private _endereco: Endereco;
    private _telefones: Telefone[];

    constructor(nome: string, cpf: number, dataNascimento: number, sexo: string, endereco: Endereco, telefones: Telefone[]) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefones = telefones;
    }



    
	public get nome(): string {
		return this._nome;
	}

    
	public get cpf(): number {
		return this._cpf;
	}

    
	public get dataNascimento(): number {
		return this._dataNascimento;
	}

    
	public get sexo(): string {
		return this._sexo;
	}

    
	public get endereco(): Endereco {
		return this._endereco;
	}


	public get telefones(): Telefone[] {
		return this._telefones;
	}


	public set nome(value: string) {
		this._nome = value;
	}


	public set cpf(value: number) {
		this._cpf = value;
	}


	public set dataNascimento(value: number) {
		this._dataNascimento = value;
	}


	public set sexo(value: string) {
		this._sexo = value;
	}


	public set endereco(value: Endereco) {
		this._endereco = value;
	}


	public set telefones(value: Telefone[]) {
		this._telefones = value;
	}

}
    