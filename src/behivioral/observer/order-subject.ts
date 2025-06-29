import { IObserver } from "./observer.interface";

export class OrderSubject {
  private observers: IObserver[] = []

  attach(observer: IObserver):void {
    this.observers.push(observer)
  }
  
  detach(observer: IObserver): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(orderId: number): void {
    for(const observer of this.observers) {
      observer.update(orderId);
    }
  }
}