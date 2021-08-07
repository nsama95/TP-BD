import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userUrl = "";
  title = 'tp';
  urlServer = "https://tp-ticketera-samaniego.herokuapp.com/";
  ticketsDesperfectos:any=[] ;
  ticketsEmpleados: any=[];
  ticketsZona: any =[];
  ticketsClientes: any=[];
  desperfecto='';
  zona='';
  empleado='';
  cliente='';
  constructor(private http: HttpClient) {
    this.userUrl=this.urlServer;
  }

  getTicketsDesperfectos() {
    return this.http.get(this.userUrl.concat("tickets-desperfectos"))
      .subscribe((data: any) => {
        this.desperfecto=JSON.stringify(data);
        data.forEach((element: any) => {
          this.ticketsDesperfectos.push(element);
        });
        this.zona='';
        this.empleado='';
        this.cliente='';
      })
  }

  getTicketsDesperfectosResueltos(){
    return this.http.get(this.userUrl.concat("tickets-desperfectos-cantidad"))
    .subscribe((data: any) => {
      this.desperfecto=JSON.stringify(data);
      data.forEach((element: any) => {
        this.ticketsDesperfectos.push(element);
      });
      this.zona='';
      this.empleado='';
      this.cliente='';
    })
  }


  getTicketsDesperfectosCadaCuanto(){
    return this.http.get(this.userUrl.concat("tickets-desperfectos-cada-cuanto"))
    .subscribe((data: any) => {
      this.desperfecto=JSON.stringify(data);
      this.ticketsDesperfectos=JSON.stringify(data);
      this.zona='';
      this.empleado='';
      this.cliente='';
    })
  }

  getTicketsDesperfectosZona(){
    return this.http.get(this.userUrl.concat("zona-desperfectas"))
    .subscribe((data: any) => {
      this.zona=JSON.stringify(data);

      this.desperfecto='';
      this.empleado='';
      this.cliente='';
      this.ticketsZona = JSON.stringify(data);

    })
  }

  getTicketsZonaCentros(){
    return this.http.get(this.userUrl.concat("zona-centros"))
    .subscribe((data: any) => {
      this.zona=JSON.stringify(data);
      this.desperfecto='';
      this.empleado='';
      this.cliente='';

      this.ticketsZona = JSON.stringify(data);

    })
  }
  getTicketsZonaClientes(){
    return this.http.get(this.userUrl.concat("zona-clientes"))
    .subscribe((data: any) => {
      this.zona=JSON.stringify(data);
      this.desperfecto='';
      this.empleado='';
      this.cliente='';
      this.ticketsZona = JSON.stringify(data);

    })
  }

  getTicketsEmpleado(){
    return this.http.get(this.userUrl.concat("empleado-mayor-tickets"))
    .subscribe((data: any) => {
      this.empleado=JSON.stringify(data);
      this.desperfecto='';
      this.zona='';
      this.cliente='';
      this.ticketsEmpleados = JSON.stringify(data);

    })
  
  }

  getTicketsSinResolverEmpleado(){
    return this.http.get(this.userUrl.concat("empleado-mayor-tickets-sin-resolver"))
    .subscribe((data: any) => {
      this.empleado=JSON.stringify(data);
      this.desperfecto='';
      this.zona='';
      this.cliente='';
      this.ticketsEmpleados = JSON.stringify(data);

    })
  
  }

  getTicketsDeEmpleado(){
    return this.http.get(this.userUrl.concat("empleado-con-tickets"))
    .subscribe((data: any) => {
      this.empleado=JSON.stringify(data);
      this.desperfecto='';
      this.zona='';
      this.cliente='';
      this.ticketsEmpleados = JSON.stringify(data);

    })
  
  
  }

  getTicketsCliente(){
    return this.http.get(this.userUrl.concat("cliente-con-mayor-tickets"))
    .subscribe((data: any) => {
      this.cliente=JSON.stringify(data);
      this.desperfecto='';
      this.zona='';
      this.empleado='';
      this.ticketsClientes = JSON.stringify(data);

    })
  }

  getTicketsClienteCentro(){
    return this.http.get(this.userUrl.concat("centros-clientes"))
    .subscribe((data: any) => {
      this.cliente=JSON.stringify(data);
      this.desperfecto='';
      this.zona='';
      this.empleado='';
      this.ticketsClientes = JSON.stringify(data);

    })
  }

}
