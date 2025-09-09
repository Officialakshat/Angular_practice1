import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../service/crud-service.service';
import { UserData } from '../user-data';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [NgFor],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CRUDComponent implements OnInit {
  // API_data = 'https://dummy-json.mock.beeceptor.com/posts'

  apiData : UserData[] = []

  constructor(private crud: CrudServiceService , private router: Router){}

  ngOnInit(): void{
     this.getAllData();
  }
 getAllData(){
  this.crud.getData().subscribe(res => {
     this.apiData = res;
  })

  
 }

 onAddUser(){
   this.router.navigateByUrl('addUser')
  }

  onUpdate(id: number){
   this.router.navigate(['updateUser', id]);
  }
}
