import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../service/crud-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  imports: [],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {

constructor(private crud:CrudServiceService, private activeRoute:ActivatedRoute){}

userId : {
  uId : number;
}

ngOnInit(): void {
    this.userId
}

}
