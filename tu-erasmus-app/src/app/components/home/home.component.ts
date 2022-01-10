import { Component } from '@angular/core';
import { delay, first } from 'rxjs';
import { RootService } from '../../modules/http/root.service';
import { COUNTRIES, ICountry, IUniversity } from '../../shared/models/db-models';

declare var svgMap: any;

@Component({
    selector: 'tu-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(private rootService: RootService) {
        this.rootService.universities.getAll().pipe(
            first(),
            delay(1000)
        ).subscribe({
            next: (universities: IUniversity[]) => {
                let values: any = {};
                universities.forEach((uni: IUniversity) => {
                    const country = COUNTRIES.find(c => c.name === uni.countryName) as ICountry;
                    let partners = `<span class="svg-map__university">${uni.name}</span>`;
                    if (values[country.code]) {
                        partners = `${values[country.code].partners} <br> ${partners}`
                    }
                    values[country.code] = {
                        partners: partners,
                        link: `universities/${country.code}`
                    }
                })

                new svgMap({
                    targetElementID: 'svgMap',
                    initialPan: { x: 750, y: 150 },
                    initialZoom: 5,
                    data: {
                        data: {
                            partners: {
                                name: '',
                                format: '{0}',
                                thousandSeparator: ','
                            }
                        },
                        applyData: 'partners',
                        values: values
                    }
                });
            }
        });
    }
}

