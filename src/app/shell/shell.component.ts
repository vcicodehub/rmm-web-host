import { Component, OnInit } from '@angular/core';
import { SrsUserLibService } from 'srs-user-lib';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  // constructor() { 
  // }

  // ngOnInit(): void {
  // }

  userName: string;
  constructor(private userService: SrsUserLibService) { 
    this.userName = "";
  }

  ngOnInit(): void {
    this.userName = this.userService.userID;
  }

}
