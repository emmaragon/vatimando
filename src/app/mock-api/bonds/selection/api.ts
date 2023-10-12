import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';

import { TreoMockApiService } from 'src/@treo/lib/mock-api/mock-api.service';
import { bondselection as bondSelectionData } from './data';

@Injectable({
    providedIn: 'root'
})
export class BondDetailsMockApi
{
    private _bondselection: any[] = bondSelectionData;

    /**
     * Constructor
     */
    constructor(private _treoMockApiService: TreoMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Contacts - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/apps/bonds/all')
            .reply(() => {

                // Clone the contacts
                const bondselection = cloneDeep(this._bondselection);

                // // Sort the contacts by the name field by default
                // contacts.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));

                // Return the response
                return [200, bondselection];
            });
    }
}
