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
      image: 'https://comidaschilenas.com/wp-content/uploads/2022/02/Receta-de-arepas-de-maiz-venezolanas.jpg',
      buttonTxt: 'QUIERO ORDENAR',
      url: 'https://api.whatsapp.com/send?phone=573177009946&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20y%20quisiera%20encargar%20arepas%20de%20peto',
      id: 'peto'
    },
    {
      titulo: 'Pelao',
      texto: 'Nuestra arepa pelao representa la simplicidad y la tradición culinaria colombiana.',
      image: 'https://comidaschilenas.com/wp-content/uploads/2022/02/Receta-de-arepas-de-maiz-venezolanas.jpg',
      buttonTxt: 'QUIERO ORDENAR',
      url: 'https://api.whatsapp.com/send?phone=573177009946&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20y%20quisiera%20encargar%20arepas%20de%20maiz%20pelao',
      id: 'pelao'
    },
    {
      titulo: 'Sal',
      texto: 'La esencia misma de nuestras arepas colombianas, con su crujiente por fuera y suavidad por dentro.',
      image: 'https://comidaschilenas.com/wp-content/uploads/2022/02/Receta-de-arepas-de-maiz-venezolanas.jpg',
      buttonTxt: 'QUIERO ORDENAR',
      url: 'https://api.whatsapp.com/send?phone=573177009946&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20y%20quisiera%20encargar%20arepas%20de%20sal',
      id : 'sal'
    },
    {
      titulo: 'Dulce',
      texto: 'Una opción perfecta para satisfacer tu gusto por lo dulce, ideal para cualquier momento del día.',
      image: 'https://comidaschilenas.com/wp-content/uploads/2022/02/Receta-de-arepas-de-maiz-venezolanas.jpg',
      buttonTxt: 'QUIERO ORDENAR',
      url: 'https://api.whatsapp.com/send?phone=573177009946&text=Hola,%20estuve%20en%20su%20p%C3%A1gina%20y%20quisiera%20encargar%20arepas%20de%20dulce',
      id: 'dulce'

    }
  ]

}
