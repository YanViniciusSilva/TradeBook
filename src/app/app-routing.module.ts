import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Pages/Login/Form/Form.component';

const routes: Routes = [
{
  path:'',
  loadChildren: () => import('./Pages/pages.module').then(p => p.PagesModule)
},
{
  path: '',
  component: FormComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
