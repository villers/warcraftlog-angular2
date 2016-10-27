import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dificulty'})
export class Dificulty implements PipeTransform {
    transform(s: number, args: string): number {
        let type = {
            1: 'unknown',
            2: 'LFR',
            3: 'Normal',
            4: 'Héroïque',
            5: 'Mythique',
        };
        return type[s];
    }
}