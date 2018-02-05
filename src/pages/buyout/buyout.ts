import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { NavController } from "ionic-angular/navigation/nav-controller";

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit{

    product: {name: string, quantity: number};

    constructor(private navParams: NavParams, private navCtrl: NavController){

    }

    ngOnInit(){
        this.product = this.navParams.data;
    }

    buy(){
        this.navCtrl.popToRoot();
    }
    
}