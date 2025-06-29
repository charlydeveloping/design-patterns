import { EmailAdapter } from "./email-adapter";

const notifier = new EmailAdapter();
notifier.send("carlos@gmail.com", "Tu pedido ha sido procesado.")

