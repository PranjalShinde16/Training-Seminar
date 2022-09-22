import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsFaQComponent } from './about-us/about-us-faq/about-us-faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { HomeComponent } from './home.component';
import { AndroidSdkComponent } from './sdks/android-sdk/android-sdk.component';
import { IosSdkComponent } from './sdks/ios-sdk/ios-sdk.component';
import { RestApiComponent } from './sdks/rest-api/rest-api.component';
import { WebSdkComponent } from './sdks/web-sdk/web-sdk.component';
import { AccountManagementComponent } from './using-panel/account-management/account-management.component';
import { AccountToppingComponent } from './using-panel/account-topping/account-topping.component';
import { ConnectAppComponent } from './using-panel/connect-app/connect-app.component';
import { UsingPanelComponent } from './using-panel/using-panel.component';

const routes: Routes = [
  { path: '', redirectTo: 'gettingStarted', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent
    , children: [
      { path: 'gettingStarted', component: GettingStartedComponent }
      , { path: 'about-us', component: AboutUsComponent }
      , { path: 'about-us/faq', component: AboutUsFaQComponent }
      , { path: 'using-panel', component: UsingPanelComponent }
      , { path: 'using-panel/how-do-i-connect-an-app', component: ConnectAppComponent }
      , { path: 'using-panel/topping-up-account', component: AccountToppingComponent }
      , { path: 'using-panel/account-management', component: AccountManagementComponent }
      , { path: 'start-to-verify/ios-sdk', component: IosSdkComponent }
      , { path: 'start-to-verify/android-sdk', component: AndroidSdkComponent }
      , { path: 'start-to-verify/web-sdk', component: WebSdkComponent }
      , { path: 'start-to-verify/rest-api', component: RestApiComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
