class Sejour{

	constructor(private _nom:string, private _prix:number){

	}

	getNom():string{
		return this._nom;
	}

	getPrix():number{
		return this._prix;
	}
}

class SejourService{


	constructor(private _sejour:Sejour[]){
		this._sejour=[new Sejour("Lille", 150), new Sejour("Nantes",200)]
	}

	rechercheParNom(nom:string):Sejour[] {
		return this._sejour.filter(t => t.getom == nom);
	} 

}
}

