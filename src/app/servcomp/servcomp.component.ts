import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servcomp',
  templateUrl: './servcomp.component.html',
  styleUrls: ['./servcomp.component.css']
})
export class ServcompComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  clicknavigate(){
    let id = 10;
    this.router.navigate(['users',id])
  }

}
