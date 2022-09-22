import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AboutUsFaQComponent } from './about-us/about-us-faq/about-us-faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AndroidSdkComponent } from './sdks/android-sdk/android-sdk.component';
import { IosSdkComponent } from './sdks/ios-sdk/ios-sdk.component';
import { RestApiComponent } from './sdks/rest-api/rest-api.component';
import { WebSdkComponent } from './sdks/web-sdk/web-sdk.component';
import { AccountManagementComponent } from './using-panel/account-management/account-management.component';
import { AccountToppingComponent } from './using-panel/account-topping/account-topping.component';
import { UsingPanelComponent } from './using-panel/using-panel.component';

@NgModule({
  declarations: [
    HomeComponent
    , AboutUsComponent
    , AboutUsFaQComponent
    , GettingStartedComponent
    , UsingPanelComponent
    , AccountToppingComponent
    , AccountManagementComponent
    , IosSdkComponent
    , AndroidSdkComponent
    , WebSdkComponent
    , RestApiComponent
  ],
  imports: [
    HomeRoutingModule
    , CommonModule
    , MatIconModule
    , FormsModule
    , ReactiveFormsModule
    , ClipboardModule
    , MatSidenavModule
    , MatListModule
  ],
  providers: []
})
export class HomeModule { }
