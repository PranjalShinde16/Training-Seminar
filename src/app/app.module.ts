import { ClipboardModule } from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , HomeModule
    , BrowserAnimationsModule
    , MatIconModule
    , FormsModule
    , ReactiveFormsModule
    , HttpClientModule
    , ClipboardModule
    , MatSidenavModule
    , MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
