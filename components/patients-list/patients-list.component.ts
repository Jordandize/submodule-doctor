import { Component, OnInit } from '@angular/core';
import { patientsList } from './../../mocks/patients.mock';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.sass']
})
export class PatientsListComponent implements OnInit {
  list = patientsList;
  constructor() {}

  ngOnInit() {}
}
