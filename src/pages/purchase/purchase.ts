import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PurchaseSchoolEventPage } from '../purchase-school-event/purchase-school-event';
import { PurchaseAfterSchoolEventPage } from '../purchase-after-school-event/purchase-after-school-event';

@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html'
})
export class PurchasePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToPurchaseSchoolEvent(params){
    if (!params) params = {};
    this.navCtrl.push(PurchaseSchoolEventPage);
  }goToPurchaseAfterSchoolEvent(params){
    if (!params) params = {};
    this.navCtrl.push(PurchaseAfterSchoolEventPage);
  }
}
