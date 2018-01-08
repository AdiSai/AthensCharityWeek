import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PassportPage } from '../passport/passport';
import { EventTicketsPage } from '../event-tickets/event-tickets';
import { PurchasePage } from '../purchase/purchase';
import { PurchaseSchoolEventPage } from '../purchase-school-event/purchase-school-event';
import { PurchaseAfterSchoolEventPage } from '../purchase-after-school-event/purchase-after-school-event';
import { RaffleTicketsPage } from '../raffle-tickets/raffle-tickets';

@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToPassport(params){
    if (!params) params = {};
    this.navCtrl.push(PassportPage);
  }goToEventTickets(params){
    if (!params) params = {};
    this.navCtrl.push(EventTicketsPage);
  }goToPurchase(params){
    if (!params) params = {};
    this.navCtrl.push(PurchasePage);
  }goToPurchaseSchoolEvent(params){
    if (!params) params = {};
    this.navCtrl.push(PurchaseSchoolEventPage);
  }goToPurchaseAfterSchoolEvent(params){
    if (!params) params = {};
    this.navCtrl.push(PurchaseAfterSchoolEventPage);
  }goToRaffleTickets(params){
    if (!params) params = {};
    this.navCtrl.push(RaffleTicketsPage);
  }
}
