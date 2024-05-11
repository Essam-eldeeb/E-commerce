import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'home',component:HomeComponent ,children:[]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'products',component:ProductsComponent}
  ,{path:'login',component:LoginComponent},
  {path:'regist',component:RegistrationComponent}
,{path:'details/:id',component:ProductdetailsComponent}
,{path:'cart',component:CartComponent}
  ,{path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
