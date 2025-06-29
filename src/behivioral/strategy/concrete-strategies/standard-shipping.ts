import { IShippingStrategy } from "../shipping-strategy.interface";

export class StandardShipping implements IShippingStrategy {
  calculateCost(weight: number): number {
    return 5 + weight * 0.5;
  }
}