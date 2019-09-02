import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './pages/container/container.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [ContainerComponent, PatientsListComponent, SidebarComponent],
  imports: [CommonModule, DoctorRoutingModule, SharedModule],
  exports: [DoctorRoutingModule]
})
export class DoctorModule {}
