import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenFormComponent } from './shorten-form/shorten-form.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ShortenedResponseComponent } from './shortened-response/shortened-response.component';
import { TopUrlsComponent } from './top-urls/top-urls.component';

@NgModule({
    declarations: [AppComponent, ShortenFormComponent, AppFooterComponent, ShortenedResponseComponent, TopUrlsComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
