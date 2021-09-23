import { Injectable,Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
// import { AuthprofessorService } from './authprofessor.service';
import { StudentService } from './student.service';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public auth:StudentService,private injector:Injector,) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(StudentService)
    let tokenizedReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
