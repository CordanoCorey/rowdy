import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'history',
        loadChildren: './history/history.module#HistoryModule'
    },
    {
        path: 'rankings',
        loadChildren: './rankings/rankings.module#RankingsModule'
    },
    {
        path: 'rules',
        loadChildren: './rules/rules.module#RulesModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
