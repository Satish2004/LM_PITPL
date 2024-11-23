// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-loc',
//   templateUrl: './loc.page.html',
//   styleUrls: ['./loc.page.scss'],
// })
// export class LocPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-loc',
  templateUrl: './loc.page.html',
   styleUrls: ['./loc.page.scss'],
})
export class LocationMasterComponent {
  locationName: string = '';
  roadType: string = '';
  locationType: string = '';
  description: string = '';

  roadOptions: string[] = [
    'Highway',
    'Bypass',
    'City Road',
    'Service Road',
    'Expressway',
    'Country Road',
    'Gravel Road',
    'Dirt Track',
    'Cobblestone Road',
    'Brick Paved Road',
  ];

  locationOptions: string[] = [
    'Residential',
    'Commercial',
    'Industrial',
    'Rural',
    'Urban',
    'Suburban',
  ];

  onSubmit() {
    console.log('Location Name:', this.locationName);
    console.log('Road Type:', this.roadType);
    console.log('Location Type:', this.locationType);
    console.log('Description:', this.description);
    alert('Form Submitted Successfully!');
  }

  constructor() {
    console.log('LocationMasterComponent initialized');
  }
}



