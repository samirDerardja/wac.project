import { Component, HostListener } from '@angular/core';
import {ColorPickerService} from '../../shared/services/color-picker.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public showScroll: boolean;
  public showScrollHeight = 500;
  public hideScrollHeight = 10;
  public open:boolean=false;
  today: number = Date.now();

  constructor(public customize: ColorPickerService){}

  onActivate() {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}

openPicker(){
  this.open=!this.open
}

customizeColorScheme(val){
  this.customize.setColorScheme(val)
}

@HostListener('window:scroll', [])
    onWindowScroll() 
    {
      if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) 
      {
        this.showScroll = true;
      } 
      else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) 
      { 
        this.showScroll = false; 
      }
    }
}
