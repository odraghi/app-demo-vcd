import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from "./message.service";
import { Hostname } from "./hostname";

@Injectable({
  providedIn: "root"
})
export class HostnameService {
  private TEST: Hostname = {
    name: "Test2"
  };

  private hostnameUrl = "hostname.json";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHostname(): Observable<Hostname> {
    //return of(this.TEST);
    return this.http.get<Hostname>(this.hostnameUrl).pipe(
      tap(_ => this.log("getHostname.. Done")),
      catchError(this.handleError<Hostname>("getHostname", new Hostname()))
    );
  }

  /** Log a HostnameService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HostnameService: ${message}`);
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
