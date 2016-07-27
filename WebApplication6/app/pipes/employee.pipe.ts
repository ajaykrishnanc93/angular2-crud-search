import { Pipe, PipeTransform } from 'angular2/core';
@Pipe({ name: 'employeefilter' })
export class employeePipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
       
        
        if (args[0].firstName != undefined ) {
           
           
                // filter items array, items which match and return true will be kept, false will be filtered out
                return items.filter(item => item.firstName.indexOf(args[0].firstName) !== -1);

            }
            else {
                return items;
            }
        }
            
       
    
}

