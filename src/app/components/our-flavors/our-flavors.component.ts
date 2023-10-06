import { Component } from '@angular/core';

@Component({
  selector: 'app-our-flavors',
  templateUrl: './our-flavors.component.html',
  styleUrls: ['./our-flavors.component.scss']
})
export class OurFlavorsComponent {

  flavors = [
    {
      titulo: 'Peto',
      texto: 'Un clásico suave y delicioso que te recordará a los sabores tradicionales de Colombia.',
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/arepas-edit%2Fpeto-removebg.png?alt=media&token=25e5ca21-db44-4bae-92e7-e4c51adcb258&_gl=1*1nwozje*_ga*NTc1OTU2MDAwLjE2OTAxOTg2NDA.*_ga_CW55HF8NVT*MTY5NjYwNTE2NC4xMi4xLjE2OTY2MDU1MDguNDQuMC4w',
      buttonTxt: 'QUIERO ORDENAR',
      url: 'https://api.whatsapp.com/send?phone=573108585105&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20y%20quisiera%20encargar%20arepas%20de%20peto',
      id: 'peto'
    },
    {
      titulo: 'Pelao',
      texto: 'Nuestra arepa pelao representa la simplicidad y la tradición culinaria colombiana.',
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/arepas-edit%2Fpelao-removebg.png?alt=media&token=54b9ace1-a410-4d99-a51a-5f36fb77d054&_gl=1*110yi9u*_ga*NTc1OTU2MDAwLjE2OTAxOTg2NDA.*_ga_CW55HF8NVT*MTY5NjYwNTE2NC4xMi4xLjE2OTY2MDU0OTIuNjAuMC4w',
      buttonTxt: 'QUIERO ORDENAR',
      url: 'https://api.whatsapp.com/send?phone=573108585105&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20y%20quisiera%20encargar%20arepas%20de%20maiz%20pelao',
      id: 'pelao'
    },
    {
      titulo: 'Sal',
      texto: 'La esencia misma de nuestras arepas colombianas, con su crujiente por fuera y suavidad por dentro.',
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/arepas-edit%2FSal-removebg.png?alt=media&token=775a4718-2f64-4dc0-a526-7871318f5990&_gl=1*xq6t5o*_ga*NTc1OTU2MDAwLjE2OTAxOTg2NDA.*_ga_CW55HF8NVT*MTY5NjYwNTE2NC4xMi4xLjE2OTY2MDU0MjEuNjAuMC4w',
      buttonTxt: 'QUIERO ORDENAR',
      url: 'https://api.whatsapp.com/send?phone=573108585105&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20y%20quisiera%20encargar%20arepas%20de%20sal',
      id : 'sal'
    },
    {
      titulo: 'Dulce',
      texto: 'Una opción perfecta para satisfacer tu gusto por lo dulce, ideal para cualquier momento del día.',
      image: 'https://firebasestorage.googleapis.com/v0/b/arepas-el-eden.appspot.com/o/arepas-edit%2Fdulce-removebg.png?alt=media&token=a99f1212-a2ee-4b1b-8571-ddd194412245&_gl=1*oi58dl*_ga*NTc1OTU2MDAwLjE2OTAxOTg2NDA.*_ga_CW55HF8NVT*MTY5NjYwNTE2NC4xMi4xLjE2OTY2MDU0NzUuNi4wLjA.',
      buttonTxt: 'QUIERO ORDENAR',
      url: 'https://api.whatsapp.com/send?phone=573108585105&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20y%20quisiera%20encargar%20arepas%20de%20dulce',
      id: 'dulce'

    }
  ]

}
