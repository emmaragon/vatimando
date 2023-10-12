import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { BondDetail } from 'src/app/shared/models/bond-detail';
import { BASE_URL } from 'src/app/shared/constants';


@Injectable({
    providedIn: 'root'
})
export class BondDetailService
{
    // Private
    // private _bondselection: BehaviorSubject<BondSelection[]> =  new BehaviorSubject<BondSelection | null>(null);
    private _bondsDetail: BehaviorSubject<BondDetail[] | null> = new BehaviorSubject<BondDetail[] | null>(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for contact
     */
    get bondsDetail$(): Observable<BondDetail[] | null>
    {
        return this._bondsDetail.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get bond
     */
    getHoldersById(bondId: string): Observable<BondDetail[]>
    {
        return this._httpClient.get<BondDetail[]>(`${BASE_URL}/api/bonds/${bondId}/holders`).pipe(
            tap((bondselection) => {
                this._bondsDetail.next(bondselection);
            })
        );
    }

}
