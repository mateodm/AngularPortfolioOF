import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent} from "./index/index.component"
import { SignInComponent} from "./sign-in/sign-in.component"

const routes: Routes = [
  {path:"sign-in", component: SignInComponent},
  {path:"", component: IndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
