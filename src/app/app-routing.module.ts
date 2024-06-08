import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { BrandsComponent } from './components/brands/brands.component';
import { authGuard } from './gaurd/auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent ,canActivate:[authGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'products',component:ProductsComponent ,canActivate:[authGuard]}
  ,{path:'login',component:LoginComponent},
  {path:'regist',component:RegistrationComponent}
,{path:'details/:id',component:ProductdetailsComponent,canActivate:[authGuard]}
,{path:'cart',component:CartComponent,canActivate:[authGuard]},
{path:'category', component:CategoryComponent,canActivate:[authGuard]}
,{path:'brands', component:BrandsComponent,canActivate:[authGuard]}
  ,{path:'**',component:ErrorComponent,canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
