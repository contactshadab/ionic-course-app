import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserPage } from './user/user';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  onClickUser(username){
    this.navCtrl.push(UserPage, {username: username});
  }

}
