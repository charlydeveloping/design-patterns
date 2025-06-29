export class ExternalEmailService {
  sendEmailTo(address: string, message: string) {
    console.log(`Servicio Externo: enviando email a: ${address}, mensaje: ${message}`);
  }
}