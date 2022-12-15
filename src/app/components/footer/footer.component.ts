import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year: any = new Date().getFullYear()

  ngOnInit(): void {
   this.year = new Date().getFullYear()
 }
}
