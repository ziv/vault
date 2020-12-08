import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vault, NameSpace } from '@xpr/vaultier';

@Injectable({
  providedIn: 'root',
})
export class VaultService {
  base = '/api';

  constructor(private http: HttpClient) {
  }

  status(): Observable<any> {
    return this.http.get<any>(`${this.base}/status`);
  }

  store(ns: NameSpace, vault: Vault): Observable<boolean> {
    return this.http.post<boolean>(`${this.base}/store/${ns}`, vault);
  }

  fetch(ns: NameSpace): Observable<Vault> {
    return this.http.get<Vault>(`${this.base}/fetch/${ns}`);
  }

  flush(ns: NameSpace): Observable<boolean> {
    return this.http.delete<boolean>(`${this.base}/flush/${ns}`);
  }
}
