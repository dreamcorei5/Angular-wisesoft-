import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { ManageDataComponent } from './components/manage-data/manage-data.component'; 
import { TransportComponent } from './components/transport/transport.component'; 
import { BackupComponent } from './components/backup/backup.component'; 
import { SettingComponent } from './components/setting/setting.component'; 
import { RecommendedComponent } from './components/recommended/recommended.component'; 
import { AboutComponent } from './components/about/about.component'; 
import { UpdateComponent } from './components/update/update.component'; 

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"manageData", component:ManageDataComponent},
  {path:"transport", component:TransportComponent},
  {path:"backup", component:BackupComponent},
  {path:"setting", component:SettingComponent},
  {path:"recommended", component:RecommendedComponent},
  {path:"about", component:AboutComponent},
  {path:"update", component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
