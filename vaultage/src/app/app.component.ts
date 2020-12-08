import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';
import { NameSpace } from '@xpr/vaultier';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  status: Observable<any> | undefined;

  constructor(private readonly service: VaultService) {
  }

  ngOnInit(): void {
    this.status = this.service.status();
  }

  flush(ns: NameSpace) {
    this.status = this.service.flush(ns).pipe(mergeMap(() => this.service.status()));
  }
}
