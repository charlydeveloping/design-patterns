import { EmailNotification } from "./email-notification";
import { SmsNotification } from "./sms-notification";


const emailNotification = new EmailNotification();
emailNotification.send("carlos@gmail.com", "Hola Carlos, este es un correo de prueba.");


const smsNotification = new SmsNotification();
smsNotification.send("612345678", "Hola Carlos, este es un mensaje de prueba.");