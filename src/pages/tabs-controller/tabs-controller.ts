import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TicketsPage } from '../tickets/tickets';
import { PassportPage } from '../passport/passport';
import { EventTicketsPage } from '../event-tickets/event-tickets';
import { PurchasePage } from '../purchase/purchase';
import { PurchaseSchoolEventPage } from '../purchase-school-event/purchase-school-event';
import { PurchaseAfterSchoolEventPage } from '../purchase-after-school-event/purchase-after-school-event';
import { RaffleTicketsPage } from '../raffle-tickets/raffle-tickets';
import { CartPage } from '../cart/cart';
import { CalendarOfEventsPage } from '../calendar-of-events/calendar-of-events';
import { CartPage } from '../cart/cart';
import { MrAthensPage } from '../mr-athens/mr-athens';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CalendarOfEventsPage;
  tab2Root: any = CartPage;
  tab3Root: any = MrAthensPage;
  tab4Root: any = AboutPage;
  constructor(public navCtrl: NavController) {
  }
  goToTickets(params){
    if (!params) params = {};
    this.navCtrl.push(TicketsPage);
  }goToPassport(params){
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
  }goToCart(params){
    if (!params) params = {};
    this.navCtrl.push(CartPage);
  }
}
