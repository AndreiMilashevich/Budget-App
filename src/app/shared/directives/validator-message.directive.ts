import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appValidator]',
})
export class ValidatorMessageDirective {
	@Input() private readonly condition!: boolean;

	private hasView: boolean = false;

	constructor(
		private readonly template: TemplateRef<any>,
		private readonly container: ViewContainerRef,
	) {}

	@Input() public set appValidator(condition: boolean) {
		if (!condition && !this.hasView) {
			this.container.createEmbeddedView(this.template);
			this.hasView = true;
		}
		else if (condition && this.hasView) {
			this.container.clear();
			this.hasView = false;
		}
	}
}