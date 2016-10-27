import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mstotime'})
export class MsToTime implements PipeTransform {
    transform(s: number, args: string): string {
        var ms: number = s % 1000;
        s = (s - ms) / 1000;
        var secs: number = s % 60;
        s = (s - secs) / 60;
        var mins: number = s % 60;

        return mins + ':' + secs;
    }
}