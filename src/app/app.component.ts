import { Component } from '@angular/core';
import { SmartComponent, StorageService, RouterService } from '@caiu/library';
import { Store } from '@ngrx/store';


@Component({
  selector: 'rowdy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends SmartComponent {

  constructor(
    public store: Store<any>,
    public storage: StorageService,
    private routerService: RouterService) {
    super(store);
  }

  get localStorageActions(): string[] {
    return [];
  }

  get localStorageMapper(): (s: any) => any {
    return state => {
      return {};
    };
  }

  get sessionStorageActions(): string[] {
    return [];
  }

  get sessionStorageMapper(): (s: any) => any {
    return state => { };
  }

  ngOnInit() {
    this.storage.init(this.localStorageMapper, this.sessionStorageMapper, this.localStorageActions, this.sessionStorageActions);

    this.initStorage();
  }

  initStorage() {
    this.storage.init(this.localStorageMapper, this.sessionStorageMapper, this.localStorageActions, this.sessionStorageActions);
  }

}