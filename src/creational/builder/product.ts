export class SalesReport {
  public title!: string;
  public dateRange!: string;
  public category!: string;
  public region!: string;

  show(): void {
    console.log("===Reporte Ventas===");
    console.log(`Título: ${this.title}`);
    console.log(`Rango de fechas: ${this.dateRange}`);
    console.log(`Categoría: ${this.category}`);
    console.log(`Región: ${this.region}`);
  }
}