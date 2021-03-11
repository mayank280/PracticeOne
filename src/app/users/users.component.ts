import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : [
    {
      id: 1,
      name : 'Mayank'
    },
    {
      id: 2,
      name : 'Arpit'
    },
    {
      id: 3,
      name : 'Sushant'
    },
  ];

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  seeUser(){
    this.route.navigate(['users',1]);
  }

}
