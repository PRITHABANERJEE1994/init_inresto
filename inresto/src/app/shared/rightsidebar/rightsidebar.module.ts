import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';

@NgModule({
  declarations: [RightsidebarComponent],
  imports: [
    CommonModule
  ],
  exports : [
    RightsidebarComponent
  ]
})
export class RightsidebarModule { }
