import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    this.data();
  }
  name = 'Angular 6';

  PrintSerials = []
  
 data(){
  let data = {
    SerialId: 12345,
    Name: 'Aniket Sanjay Giram',
    quantity:100,
    batchno:1
  };
   for (let index = 0; index < 10; index++) {
    this.PrintSerials.push(data);
   }

   for (let index = 0; index < 10; index++) {
    console.log(this.PrintSerials[index]);
  }
 }


}
