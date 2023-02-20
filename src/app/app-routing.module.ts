import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./view/front/homepage/homepage.module').then(m=>m.HomepageModule)},
    {path:'loginuser',loadChildren:()=>import('./view/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)}
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./view/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'loginadmin',loadChildren:()=>import('./view/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
