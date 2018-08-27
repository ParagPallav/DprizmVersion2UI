import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ChartsModule } from "ng2-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { SheetJSComponent } from "./sheetjs.component";
import { XlsxToJsonService } from "./xlsx-to-json-service";
import { MultiselectDropdownModule } from "angular-2-dropdown-multiselect";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { ProtfolioComponent } from "./protfolio/protfolio.component";
import { WebcamModule } from "ngx-webcam";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    PageNotFoundComponent,
    SheetJSComponent,
    ProtfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MultiselectDropdownModule,
    NgMultiSelectDropDownModule.forRoot(),
    WebcamModule
  ],
  providers: [XlsxToJsonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
