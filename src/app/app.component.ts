import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  flag: boolean = false

  public get document(): Document {
    return this._document;
  }
  public set document(value: Document) {
    this._document = value;
  }
  title = 'teal';
  @ViewChild('navBar') ham: ElementRef | undefined;
  constructor(@Inject(DOCUMENT)
  private _document: Document) { }

  @HostListener('window:scroll', [])

  onWindowScroll() {
    
    if (document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30) {
      // console.log('called')
      document?.getElementById('nav-bar')?.classList.add('shadow');
      document?.getElementById('nav-bar')?.classList.add('bg-dark');

    }

    const section1 = document.body
    

    if (window.scrollY > (document.body.clientHeight / 3)) {
      section1.style.backgroundColor = `rgb(255,255,255)`
      section1.style.animation = "fadeInAnimation ease 0.5s"
    } else {
      section1.style.backgroundColor = "rgb(0,0,0)"
    }
    // console.log("Scrolling");
    // console.log(document.body.style.backgroundColor);
    // if ((document.body.scrollTop > 1060 ||
    //   document.documentElement.scrollTop > 1060) && this.flag == false) {
    //   document.body.classList.add('dark-theme');
    //   this.flag = true
    // } else if (document.body.scrollTop < 1060 ||
    //   document.documentElement.scrollTop < 1060) {
    //   this.flag = false
    //   document.body.classList.remove('dark-theme');
    // }


  }

  ngOnInit() {
  }
}
