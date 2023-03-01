import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Dishwasher emptied', 'LC Prep Work finished', 'Groceries finished'];

   targetImage = 'https://www.launchcode.https://www.applesfromny.chttps://preppykitchen.com/wp-content/uploads/2016/11/Apple-pie-cookie-feature-2.jpgom/wp-content/uploads/2020/06/SnapdragonNEW.pngorg/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';

   constructor() { }

   ngOnInit() {
   }

}
//'Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'