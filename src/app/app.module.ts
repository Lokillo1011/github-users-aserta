import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TablaUsuariosComponent} from './tabla-usuarios/tabla-usuarios.component';
import {TabViewModule} from "primeng/tabview";
import {ChipsModule} from "primeng/chips";
import {FormsModule} from "@angular/forms";
import {ListboxModule} from "primeng/listbox";
import {HttpClientModule} from "@angular/common/http";
import {AvatarModule} from "primeng/avatar";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";
import {DividerModule} from "primeng/divider";

@NgModule({
  declarations: [
    AppComponent,
    TablaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    ChipsModule,
    FormsModule,
    ListboxModule,
    HttpClientModule,
    AvatarModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
