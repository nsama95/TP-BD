import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    //this.usedUrl = this.urlLocal;
    this.usedUrl=this.urlServer;
  }
  usedUrl = "";
  title = 'tp';
  urlLocal = "http://localhost:8080/";
  urlServer = "https://tp-ticketera-samaniego.herokuapp.com/";
  ticketsDesperfectos: any;
  ticketsAtenciones: any;
  ticketsZonales: any;
  ticketsClientes: any;
  getTicketsDesperfectos() {
    return this.http.get(this.usedUrl.concat("tickets-desperfectos"))
      .subscribe((data: any) => {
        console.log(data);
        this.ticketsDesperfectos = JSON.stringify(data)
        this.ticketsAtenciones = ""
        this.ticketsZonales = ""
        this.ticketsClientes = ""
      })
  }
}
