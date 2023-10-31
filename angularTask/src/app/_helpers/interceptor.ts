import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JsonInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Intercept the request
    request = request.clone({
      url: `${request.url}.json`, // Append '.json' to the URL to indicate JSON file
      responseType: 'json' // Set the response type to JSON
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // Intercept the response
        if (event instanceof HttpResponse) {
          const responseClone = event.clone({ body: this.convertResponse(event.body) });
          return responseClone;
        }
        return event;
      })
    );
  }

  // Convert the response to JSON if needed
  private convertResponse(body: any): any {
    // Perform any necessary transformations on the response body
    // For example, you can parse JSON strings to JavaScript objects
    return body;
  }
}