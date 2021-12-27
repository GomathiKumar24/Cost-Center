import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo : 'viewer',
    pathMatch: 'full'
  },

  {
    path :'viewer',
    loadChildren : () => import('./pages/viewer/viewer.module').then(viewerMod => viewerMod.ViewerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
