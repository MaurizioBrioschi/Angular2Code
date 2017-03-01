import {Routes, RouterModule} from "@angular/router";
import {PropertydatabinbdingComponent} from "./databinding/propertydatabinbding.component";
import {LifeCycleComponent} from "./life-cycle/life-cycle.component";
import {AppComponent} from "./app.component";

const APP_ROUTES: Routes = [
    {path: 'databinding', component: PropertydatabinbdingComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);