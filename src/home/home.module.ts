import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CareerComponent } from './containers/career/career.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'career',
    component: CareerComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [IndexComponent, NavbarComponent, CareerComponent, ServicesComponent, FooterComponent, ProjectsComponent]
})
export class HomeModule {}
