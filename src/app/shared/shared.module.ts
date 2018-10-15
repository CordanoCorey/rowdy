import { NgModule } from '@angular/core';
import { LibraryModule } from '@caiu/library';

import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  imports: [
    LibraryModule,
  ],
  declarations: [
    ContainerComponent,
    HeaderComponent,
    NavbarComponent,
    SidenavComponent,
    SocialIconsComponent,
  ],
  exports: [
    LibraryModule,
    ContainerComponent,
  ]
})
export class SharedModule { }
