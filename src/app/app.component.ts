import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  navBar = document.querySelector('nav')
  navLinks = document.querySelector('nav ul')
  constructor() { }
  ngAfterViewInit() {
    if (this.sideMenu) {
      // console.log('SideMenu initialized:', this.sideMenu.nativeElement);
    }
  }
  openMenu() {
    this.sideMenu.nativeElement.style.transform = 'translateX(-16rem)';
  }
  closeMenu() {
    this.sideMenu.nativeElement.style.transform = 'translateX(16rem)';
  }
  @HostListener('window:scroll', ['$event'])
  onscroll(event: any) {
    if (scrollY > 50) {
      this.navBar?.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
      this.navLinks?.classList.remove('bg-white', 'shadows-sm', 'bg-opacity-50')
    }
    else {
      this.navBar?.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
      this.navLinks?.classList.add('bg-white', 'shadows-sm', 'bg-opacity-50')
    }
  }
}
