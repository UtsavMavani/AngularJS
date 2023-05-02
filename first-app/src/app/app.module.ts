import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { USDINRPipe } from './pipes/usd-inr.pipe';
import { TestDirective } from './directives/test.directive';
import { StudentService } from './services/student.service';
import { ParentComponent } from './lifecycle-hook/parent/parent.component';
import { ChildComponent } from './lifecycle-hook/child/child.component';
import { Child2Component } from './lifecycle-hook/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    USDINRPipe,
    TestDirective,
    ParentComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentService], // Service register here
  bootstrap: [AppComponent] // Loading starts here
})

export class AppModule { }
