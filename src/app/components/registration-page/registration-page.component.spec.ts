import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrationPageComponent } from './registration-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

describe('RegistrationPageComponent', () => {
	let component: RegistrationPageComponent;
	let fixture: ComponentFixture<RegistrationPageComponent>;

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
			declarations: [RegistrationPageComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(RegistrationPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
