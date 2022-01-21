import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { UPLOAD_API, UPLOAD_FILES_API } from '../../../shared/constants/constants';
import { IDocument } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class DocumentsService extends ApiService {

    getAll(): Observable<IDocument[]> {
        return this.getInternal<IDocument[]>(UPLOAD_FILES_API);
    }

    create(document: IDocument): Observable<IDocument[]> {
        return this.postInternal<IDocument[]>(UPLOAD_API, document);
    }

    delete(documentId: number | undefined) {
        return this.deleteInternal<IDocument>(`${UPLOAD_FILES_API}/${documentId}`);
    }
}
