import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import axios from 'axios';
import { Raza } from 'src/app/entidades/raza';

@Injectable({
  providedIn: 'root'
})
export class RazaService {

    
  //URL del servicio Rest
  readonly endpoint = axios.defaults.baseURL;

  /**
   * Encargado de hacer las peticiones HTTP a nuestro servicio REST
   * @param _httpClient 
   */
  constructor(private _httpClient : HttpClient) { 
  }

public listarRazas(): Observable<any>{
    return this._httpClient.get(`${this.endpoint}/atributos/razas`)
     .pipe(catchError(this.manejarError));
  }

  public listarRazasDeUnaEspecie(idespecie: number): Observable<any>{
    return this._httpClient.get(`${this.endpoint}/atributos/razasDeUnaEspecie/${idespecie}`)
    .pipe(catchError(this.manejarError));
  }



    /**
   * Método que maneja los posibles errores de las llamadas al servicio rest
   * @param error 
   * @returns un objeto de tipo Observable que contendrá el error que ha ocurrido
   */
    private manejarError(e: HttpErrorResponse){
        let mensajeError = ''
        //Diferenciamos si el error es del servidor o más genérico
        if (e.error instanceof ErrorEvent) {
          mensajeError = 'A ocurrido un error:' + e.error
        } else {
          mensajeError = `El servicio Rest retorno: Status: ${e.status}, ` +
                `Body: ${e.error}`
        }
        //Imprimimos el mensaje de error y lo arrojamos médiante una función lambda
        //Esta manerá tenemos que hacerla así cuando trabajamos con Observables.
        console.error(mensajeError)
        return throwError(() => new Error(mensajeError));
      }
    
      ngOnInit() {
    
      }
     
    }