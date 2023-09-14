import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { OurFlavorsComponent } from './our-flavors/our-flavors.component';
import { OrderComponent } from './order/order.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BannerComponent, OurFlavorsComponent, OrderComponent, CarouselComponent],
  imports: [CommonModule, NgbCarouselModule],
  exports: [BannerComponent, OurFlavorsComponent, OrderComponent, CarouselComponent],
})
export class ComponentsModule {}
