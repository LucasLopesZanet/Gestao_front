import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoComponent } from './lancamento/lancamento.component';

const routes: Routes = [
  {
    path: 'lancamentos',
    component: LancamentoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
