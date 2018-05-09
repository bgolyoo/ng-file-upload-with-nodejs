import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UploadModule } from './upload/upload.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
