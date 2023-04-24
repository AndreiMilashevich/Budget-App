import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTranslateModule } from './translate/translate.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { SharedModule } from './shared/shared.module';


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

const components = [
	AppComponent,
	LoginPageComponent,
	RegistrationPageComponent,
	HeaderComponent,
];

@NgModule({
	declarations: [
		...components
	],
	imports: [
		...importedModules,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
