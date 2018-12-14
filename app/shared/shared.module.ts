import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/app/shared/highlight.directive';
import { CapitalizePipe } from 'src/app/shared/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HighlightDirective,
    CapitalizePipe
  ],
  exports:[
    CommonModule,
    FormsModule,
    HighlightDirective,
    CapitalizePipe
  ]
})
export class SharedModule { }
