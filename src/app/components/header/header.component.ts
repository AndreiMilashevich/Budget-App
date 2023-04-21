import { Component } from '@angular/core';
import { IDropdownConfig } from './header.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	public selectedLanguage: string = 'English';

	public dropdownConfig: IDropdownConfig[] = [
		{title: 'Belarussian',	code: 'by'},
		{title: 'Łacinka',	code: 'byl'},
		{title: 'English',	code: 'en'},
		{title: 'Polish',	code: 'pl'},
		{title: 'Russian',	code: 'ru'},
	];

	constructor(private readonly translate: TranslateService) {}

	public trackByFn(_index: number, item: IDropdownConfig): string {
		return item.code;
	}

	public clickHandler(index: number): void {
		this.selectedLanguage = this.dropdownConfig[index].title;
		this.translate.use(this.dropdownConfig[index].code);
	}
}
