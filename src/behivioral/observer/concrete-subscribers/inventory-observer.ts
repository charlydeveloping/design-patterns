import { IObserver } from "../observer.interface";

export class InventoryObserver implements IObserver {
  update(orderId: number): void {
    console.log(`Inventario actualizado para el pedido #${orderId}`);
  }

}