import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {
  @Input() graphicsContent:string[];

  pages:string;
 
  articleIndex: string;
  blockIndex: any;
  blockIndex1: any;
  componentIndex: any;
  componentIndex1: any;
  component: any;
  mainComponent: any;
  mainComponent1: any;

  constructor(private layoutService:LayoutService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.layoutService.PageContentAdded.subscribe((data)=>{
      // this.page=  this.pageContent.push(data);
      if(data){
        console.log("this is the data that comes in final-course.ts",data);
        console.log(typeof data);
        this.pages = typeof(data)==='string'? JSON.parse(data): data;
        console.log("this.pages",this.pages);
        
        
        this.articleIndex=this.pages[0];
        console.log("article index",this.articleIndex['_childInfo']);
        this.blockIndex =this.articleIndex['_childInfo'];
        console.log("block index",this.blockIndex[0]);
        this.blockIndex1 =this.blockIndex[0];
        console.log("block index 1",this.blockIndex1['_childInfo']);
  
        this.componentIndex =this.blockIndex1['_childInfo'];
        console.log("component index",this.componentIndex[0]);
        this.componentIndex1 =this.componentIndex[0];
        console.log("component index 1",this.componentIndex1['_childInfo']);
        this.mainComponent = this.componentIndex1['_childInfo'];
        console.log("mainComponent",this.mainComponent[0]);
        this.mainComponent1 = this.mainComponent[0];
  
  
  
  
  
        
        // console.log(typeof this.pages);
      }else{
        console.log("No page array found");
      }
      
      
         
  });
  }

}
