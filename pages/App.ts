import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";

export class App {
    protected page: Page;
    
    constructor(page: Page){
        this.page = page;
    }

    public get LoginPage(): LoginPage{
        return new LoginPage(this.page);
    }

    public get DashboardPage(): DashboardPage{
        return new DashboardPage(this.page);
    }
}