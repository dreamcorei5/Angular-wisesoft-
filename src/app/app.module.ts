import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import bootstrap from 'bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ManageDataComponent } from './components/manage-data/manage-data.component';
import { TransportComponent } from './components/transport/transport.component';
import { BackupComponent } from './components/backup/backup.component';
import { SettingComponent } from './components/setting/setting.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { AboutComponent } from './components/about/about.component';
import { UpdateComponent } from './components/update/update.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ManageDataComponent,
    TransportComponent,
    BackupComponent,
    SettingComponent,
    RecommendedComponent,
    AboutComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
