import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinosComponent } from './treinos.component';
import { LibraryComponent } from './library/library.component';
import { TabsComponent, Tab1Component, Tab2Component } from './tabs/tabs.component';

const routes: Routes = [{
  path: '',
  component: TreinosComponent,
  children: [{
      path: 'library',
      component: LibraryComponent,
  },{
    path: 'tabs',
    component: TabsComponent,
    children: [{
      path: '',
      redirectTo: 'tab1',
      pathMatch: 'full',
    }, {
      path: 'tab1',
      component: Tab1Component,
    }, {
      path: 'tab2',
      component: Tab2Component,
    }],
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinosRoutingModule { }
