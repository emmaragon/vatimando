import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';

import { TreoMockApiService } from 'src/@treo/lib/mock-api/mock-api.service';
import { bondsDetail as bondsDetailData } from './data';

@Injectable({
    providedIn: 'root'
})
export class BondDetailsMockApi
{
    private _bondsDetail: any[] = bondsDetailData;

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
            .onGet('api/apps/bondsdetail/bond')
            .reply(({request}) => {

                // Get the id from the params
                const id = request.params.get('bond');

                // Clone the contacts
                const bond = cloneDeep(this._bondsDetail);

                // Find the contact
                const contact = bond.find((item) => {
                    return item.id === id;
                });

                // Return the response
                return [200, contact];
            });
    }
}
