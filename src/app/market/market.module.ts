import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewListingsComponent } from 'app/market/overview-listings/overview-listings.component';
import { PreviewListingComponent } from 'app/market/overview-listings/preview-listing/preview-listing.component';

import { routing } from './market.routing';
import { CoreUiModule } from 'app/core-ui/core-ui.module';
import { ListingComponent } from './listing/listing.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { AddItemComponent } from './sell/add-item/add-item.component';
import {SendConfirmationModalComponent} from "../wallet/wallet/send/send-confirmation-modal/send-confirmation-modal.component";
import {WalletModule} from "../wallet/wallet/wallet.module";



@NgModule({
  imports: [
    CommonModule,
    routing,
    CoreUiModule.forRoot(),
    WalletModule.forRoot()
  ],
  declarations: [
    OverviewListingsComponent,
    PreviewListingComponent,
    ListingComponent,
    BuyComponent,
    SellComponent,
    AddItemComponent
  ],
  entryComponents: [
    ListingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarketModule { }

export { OverviewListingsComponent } from 'app/market/overview-listings/overview-listings.component';
export { PreviewListingComponent } from 'app/market/overview-listings/preview-listing/preview-listing.component';
