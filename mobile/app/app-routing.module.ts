
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AuthGuard } from './frontendcommons/guard/authguard';
import { LoginComponent } from './modules/login/login.component';
import { Resolver } from './frontendcommons/services/serverstream/resolver';


const routes: Routes = [
    { path: '', redirectTo: '/tabs', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'tabs',
        loadChildren: './modules/tabs/tabs.module#TabsModule' ,
        canActivate: [AuthGuard],
       /* resolve: { message: Resolver }*/
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
