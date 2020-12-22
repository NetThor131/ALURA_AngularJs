import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HomeComponent } from "./home.component";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./singup/singup.component";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { HomeRoutingModule } from "./home.routing.module";
import { SignUpService } from "./singup/signup.service";

@NgModule({
  declarations: [SignInComponent, SignUpComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule,
  ],
  providers: [SignUpService],
})
export class HomeModule {}
