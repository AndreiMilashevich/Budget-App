import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxTranslateModule } from './translate/translate.module';


const importedModules = [
	MatButtonModule,
	MatTabsModule,
	MatInputModule,
	MatIconModule,
	MatCardModule,
	MatMenuModule,
	MatToolbarModule,
	NgxTranslateModule,
];
@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
	],
	imports: [
		...importedModules,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
