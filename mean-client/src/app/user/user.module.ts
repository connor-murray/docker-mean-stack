import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user/user.component';
import {AppMaterialModule} from "../shared/modules/app-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {UserCreationComponent} from './user-creation/user-creation.component';
import {UserListComponent} from './user-list/user-list.component';
import {NotificationService} from "../shared/services/notification.service";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  declarations: [
    UserComponent,
    UserCreationComponent,
    UserListComponent
  ],
  providers: [
    UserService,
    NotificationService
  ]
})
export class UserModule {
}
