import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostofficeService } from './postoffice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Post Office Details';
  status: string;
  errorMessage: string;
  requestFinished = false;
  requestValid = false;
  newForm = new FormGroup({
    fieldVal: new FormControl('607807')
  });

  public postofficeDetails: any;

  constructor(private postofficeService: PostofficeService) {

  }

  ngOnInit() {

  }

  onSearch() {
    let enteredPinCode = this.newForm.get('fieldVal')?.value;
    this.postofficeService.getPostOfficeDetails(enteredPinCode)
      .subscribe(
        data => {
          this.postofficeDetails = data[0].PostOffice;
          this.status = data[0].Status;
          this.requestFinished = true;
          if (this.status === "404" || this.status === "Error") {
            this.errorMessage = "Invalid Pincode " + enteredPinCode + "! Enter a valid one."
            this.requestValid = false;
          }
          else {
            this.errorMessage = "";
            this.requestValid = true;
          }
        },
        error => {
          this.errorMessage = "Unexpected Error Occurred!";
          this.requestValid = false;
          console.log(this.errorMessage);
        }
      );
  }

}
