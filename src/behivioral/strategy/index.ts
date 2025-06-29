import { ExpressShipping } from "./concrete-strategies/express-shipping";
import { StandardShipping } from "./concrete-strategies/standard-shipping";
import { ShippingContext } from "./shipping-context";

const weight = 10;

const context = new ShippingContext(new StandardShipping());
console.log(`Costo estandar: ${context.getShippingCost(weight)}`);

context.setStrategy(new ExpressShipping());
console.log(`Costo express: ${context.getShippingCost(weight)}`);