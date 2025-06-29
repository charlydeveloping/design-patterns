export interface IShippingStrategy {
  calculateCost(weight: number): number;
}