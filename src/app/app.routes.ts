import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  // {
  //   path: "",
  //   pathMatch: 'full',
  //   redirectTo: '/selection',
  // },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>/***lazy loading */
          import("./bond-selection/bond-selection.module").then((x) => x.BondSelectionModule),
      },
      {
        path: "bonds",
        loadChildren: () =>/***lazy loading */
          import("./bond/bond.module").then((x) => x.BondModule),
      }
    ]
  }

]
