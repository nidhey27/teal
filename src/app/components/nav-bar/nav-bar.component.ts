import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isCollapsed = true;

  collapse(e: any) {
    console.log(e.target.attributes);
    this.isCollapsed = !this.isCollapsed
    // alert(this.isCollapsed)
    if(this.isCollapsed){
      document.getElementById("navbarTogglerDemo01")?.classList.add("show")
      
      
    }else{
      document.getElementById("navbarTogglerDemo01")?.classList.remove("show")
    }
  }
}
