import { IObserver } from "../observer.interface";

export class EmailObserver implements IObserver {
  update(orderId: number): void {
    console.log(`Email enviado: Tu pedido #${orderId} fue enviado.`);
  }
}