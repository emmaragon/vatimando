import { Routes } from "@angular/router";
import { BondDetailComponent } from "./components/bond-detail/bond-detail.component";

export const routes: Routes = [
  {
    path: "bond-detail",
    loadChildren: () =>
      import("./components/bond-detail/bond-detail.module").then(
        (x) => x.BondDetailModule
      ),
  },
  {path: 'bond-detail/:cod_bond/:id', component: BondDetailComponent},
  {
    path: "bond-list",
    loadChildren: () =>
      import("./components/bond-list/bond-list.module").then(
        (x) => x.BondListModule
      ),
  },
  {
    path: "",
    redirectTo: "bond-list",
    pathMatch: "full"
  }
];
