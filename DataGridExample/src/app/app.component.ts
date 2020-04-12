import { Component } from '@angular/core';
import {  DataServiceService } from './data-service.service';
import { Company } from './dataFields';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataGridExample';
  dataSource: Company[];

  constructor(service: DataServiceService) {
    this.dataSource = service.getCompanies();
}
} 
