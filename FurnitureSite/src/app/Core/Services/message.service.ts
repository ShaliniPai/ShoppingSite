import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    public collection = new Subject<any>();
    public color = new Subject<any>();
    public category = new Subject<any>();
    public searchTerm = new Subject<any>();

    setCollection(message: string) {
        this.collection.next(message);
    }

    setColor(colorVar) {
        this.color.next(colorVar);
    }

    setCategory(categoryVal) {
        this.category.next(categoryVal);
    }

    setSearchTerm(value) {
        this.searchTerm.next(value);
    }

    clearMessage() {
        this.collection.next();
    }


}
