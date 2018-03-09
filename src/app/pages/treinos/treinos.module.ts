import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TreinosRoutingModule } from './treinos-routing.module';
import { TreinosComponent } from './treinos.component';
import { LibraryComponent } from './library/library.component';
import { TabsComponent, Tab1Component, Tab2Component } from './tabs/tabs.component';

const components = [
  TreinosComponent,
    LibraryComponent,
     TabsComponent,
  Tab1Component,
  Tab2Component,
];

@NgModule({
  imports: [
    ThemeModule,
    TreinosRoutingModule,
  ],
    
  declarations: [
    ...components,
  ],
  entryComponents: [
  ],
})
export class TreinosModule { }
