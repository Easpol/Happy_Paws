import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Protectora } from 'src/app/entidades/protectora';
import { ProtectoraAdminService } from 'src/app/service/panel-admin/protectora-admin.service';
import { ProtectoraService } from 'src/app/service/protectora/protectora.service';

@Component({
  selector: 'app-listado-gestion-protectoras',
  templateUrl: './listado-gestion-protectoras.component.html',
  styleUrls: ['./listado-gestion-protectoras.component.css']
})
export class ListadoGestionProtectorasComponent {

  listaProtectoras: Protectora[]=[];



  constructor(private _protectoraAdminService:ProtectoraAdminService, private router:Router) { }

  ngOnInit():void{
    this.listar();
  }

  public listar(){
    this._protectoraAdminService.listaProtectoras().subscribe(dato => { 
      this.listaProtectoras = dato;
      console.log(this.listaProtectoras);
    });
  }

  public editarProtectora(id:number){
    this.router.navigate(['admin/gestion/protectoras/editar/', id]);
  }

 
}
