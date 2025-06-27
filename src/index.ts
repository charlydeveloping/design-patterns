import { OrderFacade } from "./structural/facade/OrderFacade";

async function main() {
  console.log("Backend tienda arrancado");
  const facade = new OrderFacade();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
