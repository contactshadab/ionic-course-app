import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserPage } from './user/user';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  userPage = UserPage;

  constructor(public navCtrl: NavController) {
  }

  onClickUser(username){
    this.navCtrl.push(UserPage, {username: username});
  }

  ionViewCanEnter(): boolean{
    let rnd = Math.random();
    console.log('ionViewCanEnter', rnd);
    return rnd > 0.1;
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewCanLeave(): boolean | Promise<void>{
    const promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    return promise;
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload');
  }

}
