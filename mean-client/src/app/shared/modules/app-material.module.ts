import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatTableModule,
  MatSnackBarModule
} from '@angular/material';
import {FormsModule} from "@angular/forms";

const modules = [
  MatButtonModule, MatToolbarModule, MatFormFieldModule,
  MatInputModule, MatTableModule, FormsModule, MatSnackBarModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule {
}
