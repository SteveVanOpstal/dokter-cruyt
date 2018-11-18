import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

const BACKEND_PARTIAL_URLS = ['/api/'];

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isBackendUrl(req.url)) {
      return next.handle(req.clone({url: environment.base_url + req.url}));
    } else {
      return next.handle(req);
    }
  }

  private isBackendUrl(url: string): boolean {
    return this.containsOneOfPartialUrls(url, BACKEND_PARTIAL_URLS);
  }

  private containsOneOfPartialUrls(url: string, urls: string[]) {
    for (const partial of urls) {
      if (this.urlContains(url, partial)) {
        return true;
      }
    }
    return false;
  }

  private urlContains(url: string, partial: string): boolean {
    return url.indexOf(partial) > -1;
  }
}
