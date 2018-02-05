import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usersPage = UsersPage;

  constructor(public navCtrl: NavController) {

  }

  goToShop(){
    this.navCtrl.push(ShopPage, {}, {
      animate: true,
      animation: 'md-transition',
      direction: 'forward',
      duration: 1000,
      easing: 'ease-in'
    });
  }

}
