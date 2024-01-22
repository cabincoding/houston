import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { GuideComponent } from './guide/guide.component';
import { UpdatesComponent } from './updates/updates.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'works', component: WorksComponent },
    { path: 'guide', component: GuideComponent },
    { path: 'updates', component: UpdatesComponent },
];
