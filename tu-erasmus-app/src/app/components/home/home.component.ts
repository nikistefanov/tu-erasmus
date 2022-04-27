import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { delay, first } from 'rxjs';
import { RootService } from '../../modules/http/root.service';
import { LOADING_TIME } from '../../shared/constants/constants';
import { API, COUNTRIES, ICountry, IHomePage, IUniversity } from '../../shared/models/db-models';

declare var svgMap: any;

@Component({
    selector: 'tu-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    loading: boolean = true;
    loadingMap: boolean = true;
    pageData: IHomePage;

    constructor(private rootService: RootService, private detector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.rootService.pageService.get<IHomePage>(API.ADMIN_HOME).pipe(
            first(),
            delay(LOADING_TIME / 2)
        ).subscribe({
            next: data => {
                this.pageData = data;
                this.loading = false;

                if (!this.pageData.hideMap) {
                    this.detector.detectChanges();

                    this.getMapData();
                }
            }
        })
    }

    private getMapData() {
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
                        link: `partners`
                    }
                })

                new svgMap({
                    targetElementID: 'svgMap',
                    initialPan: { x: 850, y: 175 },
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

                this.loadingMap = false;
            }
        });
    }
}

