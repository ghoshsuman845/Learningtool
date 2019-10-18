import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { Graphics } from 'src/app/models/components/graphics.model';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {
  get graphics() :   Graphics[] {
    return this.layoutService.graphics;
  
  }
  private base64textString:String="";
  
  public imagePath;
  imgURL: any;
  public message: string;
  text1: string ;


  constructor( private layoutService: LayoutService) { }

  ngOnInit() {
  }
  // preview(files) {
  //   if (files.length === 0)
  //     return;
 
  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
  //     return;
  //   }
 
  //   var reader = new FileReader();
    
  //   this.imagePath = files;
  //   console.log(this.imagePath[0].name);
    
  //   reader.readAsDataURL(files[0]); 
  //   reader.onload = (_event) => { 
  //     this.imgURL = reader.result; 
  //     console.log(this.imgURL);
      
  //   }
  // }
  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.base64textString= btoa(binaryString);
          console.log(btoa(binaryString));
  }
  SubmitItem(graphicsCompForm:HTMLInputElement) {
    console.log(graphicsCompForm.value)
    this.layoutService.addGraphics(graphicsCompForm.value);
   console.log(JSON.stringify(graphicsCompForm.value));
   localStorage.setItem("GraphicsComponentItem",JSON.stringify(graphicsCompForm.value));
  }

}
