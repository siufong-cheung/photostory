import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule', //Lazy load account module
        data: { preload: true }
    },
    {
        path: 'pages',   //component: LayoutComponent,
        loadChildren: './pages/pages.module#PagesModule', //Lazy load account module
        data: { preload: true }
    },
    { path: '**', redirectTo: 'pages' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }