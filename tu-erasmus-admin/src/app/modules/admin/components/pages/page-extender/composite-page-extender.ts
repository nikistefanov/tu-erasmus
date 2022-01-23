import { Inject, Injectable, Optional } from "@angular/core";
import { Observable } from "rxjs";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { IPage } from "../../../../../shared/models/db-models";
import { PAGE_EXTENDER_TOKEN, BasePageExtender } from "./base-page-extender";

@Injectable()
export class CompositePageExtender {

    constructor(@Optional() @Inject(PAGE_EXTENDER_TOKEN) private extenders: BasePageExtender[]) {}

    public save(pageUrl: string, formData: IPage): Observable<IPage> | undefined {
        const extender = this.getExtender(pageUrl);

        if (!extender) {
            return;
        }

        return extender.save(formData);
    }

    public getPageSettings(pageUrl: string): IPageExtenderSettings | undefined {
        return this.getExtender(pageUrl)?.getPageSettings();
    }

    public fetchData(pageUrl: string): Observable<IPage> | undefined {
        const extender = this.getExtender(pageUrl);

        if (!extender) {
            return;
        }

        return extender.fetchData();
    }

    private getExtender(pageUrl: string) {
        for (const extender of this.extenders) {
            if (extender.canHandle(pageUrl)) {
                return extender;
            }
        }

        return null;
    }
}
