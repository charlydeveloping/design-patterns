import { IObserver } from "../observer.interface";

export class AnalyticsObserver implements IObserver {
  update(orderId: number): void {
    console.log(`Analytics registrado para el pedido #${orderId}}`);
  }
}