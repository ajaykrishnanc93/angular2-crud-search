﻿import {Component} from 'angular2/core';
import {EmployeeService} from './employees/services/employee.service';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeEditComponent} from './employees/edit/employee-edit.component';
import {EmployeeAddComponent} from './employees/add/employee-add.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {SearchComponent} from './employees/search/search';


@RouteConfig([
    {
        path: '/employees',
        name: 'Employees',
        component: EmployeesComponent,
        useAsDefault: true
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: EmployeeEditComponent
    },
    {
        path: '/add',
        name: 'Add',
        component: EmployeeAddComponent
    },

    {
        path: '/search',
        name: 'Search',
        component: SearchComponent
    }

])

@Component({
    selector: 'directory-app',
    template: `
		
	<h1>{{title}}</h1>
	 <router-outlet></router-outlet>
       
`,
    directives: [
        ROUTER_DIRECTIVES,SearchComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        EmployeeService
    ]
})

export class AppComponent { }