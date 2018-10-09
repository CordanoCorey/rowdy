import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { LibraryModule } from '@caiu/library';

import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  imports: [
    LibraryModule,
    MatIconModule,
    MatToolbarModule,
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
    MatIconModule,
    MatToolbarModule,
    ContainerComponent,
  ]
})
export class SharedModule { }
