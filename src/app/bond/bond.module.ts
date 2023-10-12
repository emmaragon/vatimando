import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { routes } from "./bond.routes";

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BondModule {}
