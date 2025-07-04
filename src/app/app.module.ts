import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PoModule, PoFieldModule } from "@po-ui/ng-components";
import { PoTemplatesModule } from "@po-ui/ng-templates";
import { PoCodeEditorModule } from "@po-ui/ng-code-editor";
import { PoStorageModule } from "@po-ui/ng-storage";
import { PoSyncModule } from "@po-ui/ng-sync";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SelectComponent } from './components/select/select.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    PoModule,
    PoFieldModule,
    PoTemplatesModule,
    PoCodeEditorModule,
    PoStorageModule.forRoot(),
    PoSyncModule,
  ],
  declarations: [AppComponent, SelectComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
