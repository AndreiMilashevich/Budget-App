import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'percents'
})
export class PercentPipe implements PipeTransform {
	public transform(value: number | string): string {
		return `${value} %`;
	}
}
