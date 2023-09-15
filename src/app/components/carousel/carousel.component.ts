import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  customer = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/1.png?alt=media&token=c2227126-9aeb-43c7-865c-87e158728e16',
      titulo : 'Arepa1',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/2.png?alt=media&token=037d92ae-a0c9-462e-a85b-6e817838cbca',
      titulo : 'Arepa2',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/3.png?alt=media&token=b2a8aa95-b9c4-4ea5-81ec-a2bd3aa79033',
      titulo : 'Arepa3',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/4.png?alt=media&token=3ed75086-0852-4b37-8ffd-d5d3c81bdf5a',
      titulo : 'Arepa4',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/5.png?alt=media&token=b9b99466-8e53-421e-8ea9-805db15444eb',
      titulo : 'Arepa5',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/6.png?alt=media&token=7a0bacba-9ce8-4a7b-bfeb-44314a3bedd9',
      titulo : 'Arepa6',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/7.png?alt=media&token=7716db8a-fc44-4646-bbcd-0aabfb77cbce',
      titulo : 'Arepa7',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/8.png?alt=media&token=a8d50802-77db-47f9-a538-385b276f16f5',
      titulo : 'Arepa8',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/9.png?alt=media&token=de25a33f-1e3a-414a-8f92-c492af36cf99',
      titulo : 'Arepa9',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/10.png?alt=media&token=33086013-0859-4b51-ad20-59b092709952',
      titulo : 'Arepa10',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/11.png?alt=media&token=ff4c6b98-b9f3-402e-a363-cc524c131674',
      titulo : 'Arepa11',
      text:'Texto arepa'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/12.png?alt=media&token=09ba2cdf-4a41-4b31-8d61-f1ca57211608',
      titulo : 'Arepa12',
      text:'Texto arepa'
    }
  ]

}
