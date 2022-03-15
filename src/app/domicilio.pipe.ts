import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from './usuario';

@Pipe({
  name: 'domicilio'
})
export class DomicilioPipe implements PipeTransform {

  transform(usuario:Usuario): string {
    return `
            Calle ${usuario.domicilio}
            Ciudad: ${usuario.ciudad} 
            Colonia: ${usuario.colonia} 
            CP: ${usuario.cp}            
          `;
  }

}
