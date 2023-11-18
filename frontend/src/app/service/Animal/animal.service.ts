import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Animal } from 'src/app/entidades/animal';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {

  
  //URL del servicio Rest
  readonly endpoint = 'http://localhost:8087';
  
  constructor(private _httpClient : HttpClient) { }

  // Método que lista todos los animales del servicio Rest
  public listarAnimales(): Observable<any> {
    return this._httpClient.get(`${this.endpoint}/animales/listado`)
      .pipe(catchError(this.manejarError));
  }

  // Método para ver un animal por su id
  public verAnimal(idanimal: number): Observable<any> {
    return this._httpClient.get(`${this.endpoint}/animales/verUno/${idanimal}`)
      .pipe(catchError(this.manejarError));
  }

  // Método para dar de alta un animal
  
  public altaAnimal(animal: Animal): Observable<Object> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._httpClient.post(`${this.endpoint}/animales/gestion/alta`, 
      animal.toString(), 
      {headers: headers })
      .pipe(catchError(this.manejarError));
  }

  // Método para eliminar un animal
  public eliminarAnimal(idanimal: number): Observable<any> {
    return this._httpClient.delete(`${this.endpoint}/animales/gestion/eliminar/${idanimal}`)
      .pipe(catchError(this.manejarError));
  }


  // Método para modificar un animal
  public modificarAnimal(idanimal: number, animal : Animal): Observable<any> {
    return this._httpClient.put(`${this.endpoint}/animales/gestion/modificar/${idanimal}`, animal)
      .pipe(catchError(this.manejarError));
  }

  // Método para cambiar a enabled un animal



  // Método para buscar animales por provincia
  public listarAnimalPorProvincia(provincia: string): Observable<any> {
    return this._httpClient.get(`${this.endpoint}/animales/buscar/porprovincia/${provincia}`)
      .pipe(catchError(this.manejarError));
  }


  // Método que lista todos los animales de una protectora por su nombre
  public listarAnimalPorProtectora(nombre: String): Observable<any> {
    return this._httpClient.get(`${this.endpoint}/animales/buscar/porprotectora/${nombre}`)
      .pipe( catchError(this.manejarError));
  }

  //Método que lista todos los animales de una protectora por su id 
  public listarAnimalPorIdProtectora(idprotectora: number): Observable<any> {
    return this._httpClient.get(`${this.endpoint}/animales/buscar/poridprotectora/${idprotectora}`)
      .pipe( catchError(this.manejarError));  
  }                         // faltaria impler el método en el backend  comentado en el controller









    /**
   * Método que maneja los posibles errores de las llamadas al servicio rest
   * @param error 
   * @returns un objeto de tipo Observable que contendrá el error que ha ocurrido
   */
    private manejarError(e: HttpErrorResponse){
      let mensajeError = ''
      //Diferenciamos si el error es del servidor o más genérico
      if (e.error instanceof ErrorEvent) {
        mensajeError = 'Ha ocurrido un error:' + e.error
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