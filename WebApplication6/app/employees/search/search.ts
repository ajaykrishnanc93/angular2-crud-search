



import {Component, OnInit, EventEmitter, Input, Output} from 'angular2/core';
import {Employee} from '../models/employee';
import {Router, RouteParams} from 'angular2/router';
import {EmployeeService} from '../services/employee.service';

@Component({
    selector: 'search',
    templateUrl: 'app/employees/search/search.html'
})

export class SearchComponent {


    @Input() firstName: string;
    @Output() firstNameChange = new EventEmitter();


    change(newValue) {
       
            console.log('newvalue', newValue)

            this.firstName = newValue;
            //newValue = newValue.replace(/\s/g, "");
            newValue = newValue.remove(/\s/g);
            this.firstNameChange.emit(newValue);
           
    }
    
}
   








