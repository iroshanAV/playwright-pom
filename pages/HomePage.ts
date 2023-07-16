import { Page } from "@playwright/test";

export class HomePage {
protected page: Page;

    constructor(page: Page){
        this.page = page;
    }

    
}