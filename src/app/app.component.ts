import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temp:boolean = false;

  title = 'AngularTestWithApi';
  showRegister: boolean = false;

  clickCard() {
    this.showRegister = true;
  }

  onSubmittingDone(){
    this.temp = true;

  }
  Book(){
    alert("succefully booked a ticket!");
  }
  
}
