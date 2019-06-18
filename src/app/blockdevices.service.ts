import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, map, tap, timeout } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from "./message.service";
import {Blockdevices} from './blockdevices';


@Injectable({
  providedIn: 'root'
})
export class BlockdevicesService {
  
  private backUrl = 'back.json';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getBlockdevices(): Observable<Blockdevices> {
    return this.http.get<Blockdevices>(this.backUrl).pipe(
      timeout(2000),
      tap(_ => this.log("getBlockdevices.. Done")),
      catchError(this.handleError<Blockdevices>("getBlockdevices", new Blockdevices()))
    );
  }

  /** Log a HostnameService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BlockdevicesService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
