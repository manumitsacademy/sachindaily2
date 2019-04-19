import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, MainareaComponent],
  imports: [
    CommonModule,MatMenuModule,MatButtonModule,
    RouterModule.forChild([])
  ],
  exports:[ HeaderComponent, MainareaComponent]
})
export class SharedModule { }
