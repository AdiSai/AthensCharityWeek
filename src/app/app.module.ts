import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { PassportPage } from '../pages/passport/passport';
import { EventTicketsPage } from '../pages/event-tickets/event-tickets';
import { RaffleTicketsPage } from '../pages/raffle-tickets/raffle-tickets';
import { TicketsPage } from '../pages/tickets/tickets';
import { MrAthensPage } from '../pages/mr-athens/mr-athens';
import { AboutPage } from '../pages/about/about';
import { CalendarOfEventsPage } from '../pages/calendar-of-events/calendar-of-events';
import { CartPage } from '../pages/cart/cart';
import { PurchasePage } from '../pages/purchase/purchase';
import { PurchaseSchoolEventPage } from '../pages/purchase-school-event/purchase-school-event';
import { PurchaseAfterSchoolEventPage } from '../pages/purchase-after-school-event/purchase-after-school-event';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    PassportPage,
    EventTicketsPage,
    RaffleTicketsPage,
    TicketsPage,
    MrAthensPage,
    AboutPage,
    CalendarOfEventsPage,
    CartPage,
    PurchasePage,
    PurchaseSchoolEventPage,
    PurchaseAfterSchoolEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    PassportPage,
    EventTicketsPage,
    RaffleTicketsPage,
    TicketsPage,
    MrAthensPage,
    AboutPage,
    CalendarOfEventsPage,
    CartPage,
    PurchasePage,
    PurchaseSchoolEventPage,
    PurchaseAfterSchoolEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}