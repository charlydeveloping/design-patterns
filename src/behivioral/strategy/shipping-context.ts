import { IShippingStrategy } from "./shipping-strategy.interface";

export class ShippingContext {
  constructor(private strategy: IShippingStrategy) {}

  setStrategy(strategy: IShippingStrategy) {
    this.strategy = strategy
  }

  getShippingCost(weight: number): number {
    return this.strategy.calculateCost(weight);
  }
}