
import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.component.html',
  styleUrls: ['./videopage.component.css']
})
export class VideopageComponent implements OnInit {

  video = "https://www.youtube.com/embed/y_GfaSCNlkk"

  @Input()
  url: string = this.video;
  urlSafe: SafeResourceUrl;

  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  troca(link:string){
    this.video=link
    this.url = this.video;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log(this.video)
  }

}
