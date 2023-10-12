import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { BondSelection } from '../shared/models/bond-selection';
import { BASE_URL } from '../shared/constants';


@Injectable({
    providedIn: 'root'
})
export class BondSelectionService
{
    // Private
    // private _bondselection: BehaviorSubject<BondSelection[]> =  new BehaviorSubject<BondSelection | null>(null);
    private _bonds: BehaviorSubject<BondSelection[] | null> = new BehaviorSubject<BondSelection[] | null>(null);

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
    get bonds$(): Observable<BondSelection[] | null>
    {
        return this._bonds.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get contacts
     */
    getBonds(taxId: string): Observable<BondSelection[]>
    {
        return this._httpClient.get<BondSelection[]>(`${BASE_URL}/api/clients/${taxId}/bonds`).pipe(
        // return this._httpClient.get<BondSelection[]>('api/apps/bonds/all').pipe(
            tap((bondselection) => {
                this._bonds.next(bondselection);
            })
        );
    }
}
