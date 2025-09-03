import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../service/crud-service.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CRUDComponent implements OnInit {
  // API_data = 'https://dummy-json.mock.beeceptor.com/posts'

  apiData : UserData[] = []

  constructor(private crud: CrudServiceService ){}

  ngOnInit(): void{
     this.getAllData();
  }
 getAllData(){
  this.crud.getData().subscribe(res => {
     this.apiData = res;
  })
 }
}
