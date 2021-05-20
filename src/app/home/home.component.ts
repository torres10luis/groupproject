import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  btnClick(){
    this.router.navigate(['/users']);
    
  }
  // hiddenFunc() {
  //   // document.getElementById("hideDiv").style.display = 'block';
  //   // alert("Hello world")
  // }
}
