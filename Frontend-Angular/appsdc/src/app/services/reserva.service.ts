import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Reserva } from '../models/reserva';
import { environment } from 'src/environments/environment';


@Injectable()
export class ReservaService {

  constructor(private http:HttpClient){}
  Host = 'http://' + environment.HostBackend + ':3000';

  crearReserva(reserva:Reserva){
    
    const path = this.Host + '/email/reservar';
    console.log(path)
    return this.http.post(path,reserva)
  }

}
/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
*/

/*
@Injectable()
export class ReservaService {
  reservaUrl = 'http://localhost:3000/reserva';  // URL to web api
  constructor(private http: HttpClient){}
  addReserva(reserva: Reserva){
    return this.http.post(this.reservaUrl, reserva)
  }
}
*/
  //private handleError: HandleError;

  //constructor(private http: HttpClient){}
    //httpErrorHandler: HttpErrorHandler) {
    //this.handleError = httpErrorHandler.createHandleError('HeroesService');
  

  /** GET heroes from the server 
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }
  */

  /* GET heroes whose name contains search term 
  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Hero[]>(this.heroesUrl, options)
      .pipe(
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }

  */
  //////// Save methods //////////

  /** POST: add a new hero to the database
  addReserva(reserva: Reserva){
    return this.http.post(this.reservaUrl, reserva)
  } */

  /** DELETE: delete the hero from the server 
  deleteHero(id: number): Observable<unknown> {
    const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }*/

  /** PUT: update the hero on the server. Returns the updated hero upon success. 
  updateHero(hero: Hero): Observable<Hero> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('updateHero', hero))
      );
  }
  */
//}
