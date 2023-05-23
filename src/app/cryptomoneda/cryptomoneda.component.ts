import { Component } from '@angular/core';

// Interfaz para definir la estructura de una criptomoneda
interface Crypto {
  nombre: string;
  precio: string;
  codigo: string;
  id: number;
}

@Component({
  selector: 'app-cryptomoneda',
  templateUrl: './cryptomoneda.component.html',
  styleUrls: ['./cryptomoneda.component.css']
})
export class CryptomonedaComponent {
  crypto: Crypto[] = [
    { id: 1, nombre: "bitcoin", precio: "4500", codigo: "btc" },
    { id: 2, nombre: "monero", precio: "5000", codigo: "xmc" }
  ];

  contadorId: number = 2; // Inicializamos el contador con el último ID existente

  nuevoCrypto: string = '';
  nuevoCodigo: string = '';
  nuevoPrecio: string = '';

  filtroCodigo: string = '';
  mostrarError: boolean = false;
  mostrarVolver: boolean = false;
  cryptoEncontrada: Crypto | null = null;

  // Agrega una nueva criptomoneda a la lista
  AgregarCrypto() {
    const id = ++this.contadorId; // Incrementa el contador antes de asignar el ID
    //atravez del metodo push, al arreglo crypto le agrego los datos traidos del input por la variable nueva

    this.crypto.push({ id, nombre: this.nuevoCrypto, precio: this.nuevoPrecio, codigo: this.nuevoCodigo });

    // Limpiar los campos de entrada después de agregar la criptomoneda
    this.nuevoCrypto = '';
    this.nuevoCodigo = '';
    this.nuevoPrecio = '';
  }

  // Elimina una criptomoneda de la lista
  EliminarCrypto(id: number) {
    this.crypto = this.crypto.filter(moneda => moneda.id !== id);
  }

  // Busca una criptomoneda por código
  buscarCrypto() {
    this.mostrarError = false;
    this.mostrarVolver = false;

    const codigo = this.filtroCodigo.toLowerCase();
    const cryptoEncontrada = this.crypto.find(c => c.codigo.toLowerCase() === codigo);

    if (cryptoEncontrada) {
      this.cryptoEncontrada = cryptoEncontrada;
      this.mostrarVolver = true;
    } else {
      this.mostrarError = true;
    }
  }

  // Vuelve a mostrar la tabla principal y restablece los valores de búsqueda
  volverTablaPrincipal() {
    this.mostrarVolver = false;
    this.cryptoEncontrada = null;
    this.filtroCodigo = '';
  }
}
