import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

export const routes: Routes = [
    {path: '' , component: UserComponent},
    {path: 'user',  component: UserComponent},
    {path: 'controlFlow', component: ControlFlowComponent},
    {path: 'ng-for', component: NgForComponent},
    {path: 'ng-switch', component: NgSwitchComponent}
];
