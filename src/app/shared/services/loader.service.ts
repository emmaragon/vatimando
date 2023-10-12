import { Injectable, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { LoaderComponent } from '../components/loader/loader.component';
import { SharedModule } from '../shared.module';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: SharedModule,
})
export class LoaderService {

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  private overlayRef: OverlayRef

  show() {
    let componentFactory = this.viewContainerRef.createComponent(LoaderComponent);

    this.overlayRef = this.overlayRef || 
        this.overlay.create({
          hasBackdrop: true,
          positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
        });
    if (!this.overlayRef.hasAttached()) {
      const portal = new ComponentPortal(componentFactory.componentType);
      this.overlayRef.attach<LoaderComponent>(portal);
    }
  }

  hide() {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}
