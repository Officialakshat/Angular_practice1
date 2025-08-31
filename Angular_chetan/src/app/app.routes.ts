import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SignalsComponent } from './signals/signals.component';
import { BuildInPipesComponent } from './build-in-pipes/build-in-pipes.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { DirectivesComponent } from './directives/directives.component';
import { StudentDataComponent } from './student-data/student-data.component';

export const routes: Routes = [
    // {path: '' , component: UserComponent},
    {path: 'user',  component: UserComponent},
    {path: 'controlFlow', component: ControlFlowComponent},
    {path: 'data-binding', component: DataBindingComponent},
    {path: 'signal', component: SignalsComponent},
    {path: 'pipes', component: BuildInPipesComponent},
    {path: 'attribute', component: AttributeDirectivesComponent},
    {path: 'structural', component: DirectivesComponent},
    {path: 'std_data', component: StudentDataComponent},


];
