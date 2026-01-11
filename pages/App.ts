import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { LeavePage } from "./LeavePage";

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

    public get LeavePage(): LeavePage{
        return new LeavePage(this.page);
    }
}