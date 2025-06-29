import { IShippingStrategy } from "../shipping-strategy.interface";

export class ExpressShipping implements IShippingStrategy {
  calculateCost(weight: number): number {
    return 10 + weight * 1.5
  }

}