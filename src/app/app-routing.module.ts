import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { DetailsProduitsComponent } from './pages/details-produits/details-produits.component';

const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: '', component : NavbarComponent },
  { path: 'about', component : AboutComponent },
  { path: '', component : HeaderComponent },
  { path: '', component : FooterComponent },
  { path: 'details-produits', component : DetailsProduitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
