import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExamplePipe } from './pipes/example.pipe';
import { ExampleDirective } from './directives/example.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThanksComponent } from './dialogs/thanks/thanks.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExamplePipe,
    ExampleDirective,
    ThanksComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExamplePipe,
    ExampleDirective,
    SafeUrlPipe
  ]
})
export class SharedModule { }
