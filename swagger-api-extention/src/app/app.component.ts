import { Component, Directive } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

/*@Directive({ selector: 'FileSelectDirective', })
@Directive({ selector: 'FileDropDirective', })
@Directive({
  selector: '[red]'
})
@NgModule({
  imports: [],
  declarations: [ FileSelectDirective, FileDropDirective ],
  providers:[ FileSelectDirective, FileDropDirective ],
  bootstrap:[  ]
})*/

export class AppComponent {
  title = 'app works!';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  public uploader:FileUploader = new FileUploader({url: '/api/'});

  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
