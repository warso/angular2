import { Component, OnInit } from '@angular/core';
import {Sejour} from '../shared/domain/sejour';
import {SejourService} from '../shared/service/sejour.service'

@Component({
	selector: 'app-carousel-sejours',
	templateUrl: './carousel-sejours.component.html',
	styleUrls: ['./carousel-sejours.component.css']
})
export class CarouselSejoursComponent implements OnInit {

	listeSejours:Sejour[];
	sejourCourant:Sejour;
	i:number;
	constructor(private sejourservice:SejourService) {}

	ngOnInit() {
		
	/*	this.listeSejours = this.sejourservice.findAll();
	this.sejourCourant=this.listeSejours[this.i]*/

	this.i=0;
	setInterval(() => {
		if(this.i< this.listeSejours.length){
			this.i++
			
		}
		else{this.i = 0}

	}, 1000)
	this.listeSejours = this.sejourservice.findAll();
	this.sejourCourant=this.listeSejours[this.i];

}
}


/*	start(){
		this.i=(this.i+1)%this.listeSejours.length;
		this.sejourCourant=this.listeSejours[this.i]
	}
	*/



/*import { Component, OnInit } from '@angular/core';
import { Sejour } from '../shared/domain/sejour'
import { SejourService}from  '../shared/service/sejour.service'



@Component({
  selector: 'app-carousel-sejours',
  templateUrl: './carousel-sejours.component.html',
  styleUrls: ['./carousel-sejours.component.css']
})
export class CarouselSejoursComponent implements OnInit {

  afficheVille : Sejour[]
  indexCourant:number

  constructor(private sejourservice : SejourService) { }

  ngOnInit() {
    this.indexCourant = 0
    setInterval(() => {
      if(this.indexCourant < this.afficheVille.length){
 this.indexCourant++
      }
      else{this.indexCourant = 0}
     
    }, 2000)
    this.afficheVille = this.sejourservice.findAll()
  }

}*/