import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './shared/shared.module';
import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				TranslateModule.forRoot(),
				MatTabsModule,
				MatButtonModule,
				MatTabsModule,
				MatInputModule,
				MatIconModule,
				MatCardModule,
				MatMenuModule,
				MatToolbarModule,
				SharedModule,
			],
			declarations: [
				AppComponent,
				HeaderComponent,
				LoginPageComponent,
				RegistrationPageComponent,
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'Budget-App'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('Budget-App');
	});

	it('test shared module', () => {
		const module = TestBed.inject(SharedModule);
		expect(module).toBeTruthy();
	});
});
