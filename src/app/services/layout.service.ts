import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Course } from '../models/course.model';
import { Page } from '../models/page.model';
import { Article } from '../models/article.model';
import { Block } from '../models/block.model';
import { Subject } from 'rxjs';
import { Graphics } from '../models/components/graphics.model';
import { TextBox} from '../models/components/text-box.model'; 

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public course :Course[] =[];
  public page: Page[] = [];
  public article:Article[] = [];
  public block:Block[]=[];
  public textBox: TextBox[]=[];
  public graphics : Graphics[]=[];

  PageContentAdded = new Subject();
  shareDataSubject = new Subject<any>();
  courseAdded= new Subject();


  constructor() { }
  getPageLocation(): Array<any> {
    const pageLocation = [

{ path: './dashboard', 
name: 'Dashboard' ,
},

{ path: './editor-pane', 
name: 'Page Structure' ,
},
{ path: './page-structure', 
name: 'Course Structure' ,
},

{path: './content', 
name: 'Settings',
children: [
  {path: './page', name: 'Page Settings'},
  {path: './article', name: 'Article Settings'}, 
  {path: './block', name: 'Block Settings'}, 
  {path: './course', name: 'Course Settings'},
 
]
},

{path: './final-course', 
name: 'Final Course',
children: [
  {path: './pages', name: 'Page '},
  {path: './course-object', name: 'Course-Object '},
  {path: './article', name: 'Article '},
  {path: './courses', name: 'Course '},
  {path: './blocks', name: 'Block '},
 
]
},

{path: './component-content', 
name: 'Component Settings',
children: [
  {path: './graphics', name: 'Graphics'},
  {path: './text-box', name: 'TextBox'}, 
]
}, 

    ];
    return pageLocation;
  }
  
  addCourses(value):void{
    this.course.push({
      _courseid: UUID.UUID(),
      _type:"course", 
      title: value.title !=''? value.title : 'not specified',
      displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
      description: value.description !=''? value.description : 'not specified',
      body: value.body !=''? value.body : 'not specified',
      tags:value.tags !=''? value.tags : 'not specified',
      lockType:value.lockType !=''? value.lockType : 'not specified',
     _childInfo: this.page,
      customCSS: value.customCSS !=''? value.customCSS : 'not specified',
    });
    console.log("course", this.course);
   
    
   
  
  }
  addPage(value):void{
    this.page.push({
      _pageid: UUID.UUID(),
      _type: 'Page',
      _parentId:value._parentId !=''? value._parentId : 'not specified', 
      title: value.title !=''? value.title : 'not specified',
      displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
      body: value.body !=''? value.body : 'not specified',
      pageBody: value.pageBody !=''? value.pageBody : 'not specified',
      instruction: value.instruction !=''? value.instruction : 'not specified',
      btnlinkText:value.btnlinkText !=''? value.btnlinkText : 'not specified',
      duration: value.duration !=''? value.duration : 'not specified',
      _childInfo: this.article,
      _pageLevelProgressEnabled: value._pageLevelProgressEnabled !=''? value._pageLevelProgressEnabled : 'not specified',
    });
    console.log("page", this.page);
   
    
   
  
  }
  addArticle(value):void{
    this.article.push({
      _articleid: UUID.UUID(),
      _parentId:value._parentId !=''? value._parentId : 'not specified', 
      _type: 'Article',
      _classes: value._classes !=''? value._classes : 'not specified',
      title: value.title !=''? value.title : 'not specified',
      displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
      body:value.body !=''? value.body : 'not specified',
      _childInfo: this.block,
      instruction: value.instruction !=''? value.instruction : 'not specified',
    });
    console.log("article", this.article)
    
  }



  addText(value):void{
    this.textBox.push({
      title: value.title !=''? value.title : 'not specified',
      dtitle: value.dtitle !=''? value.dtitle : 'not specified',
      body:value.body !=''? value.body : 'not specified',
      _type:'Text Component',
      _parentId:value._parentId !=''? value._parentId : 'not specified',
    });
    console.log("textbox", this.textBox);
    console.log("type text", this.textBox[0]._type);
    
    localStorage.setItem("course",JSON.stringify(this.course));

    
}

addGraphics(value):void{
  
  this.graphics.push({
    _graphicsid: UUID.UUID(),
    _parentId:value._parentId !=''? value._parentId : 'not specified',
    body:value.body !=''? value.body : 'not specified',
    _type:'Graphics Component',
    title:value.title !=''? value.title : 'not specified',
    displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
    instruction : value.instruction !=''? value.instruction : 'not specified',
    graphics_url: value.file !=''? value.file : 'not specified',
   
  });
  console.log("graphics", this.graphics);
  localStorage.setItem("course",JSON.stringify(this.course));

  
}

addBlock(value):void{
  console.log(value,'block component')
  
  this.block.push({
    _blockid: UUID.UUID(),
    _parentId:value._parentId !=''? value._parentId : 'not specified', 
    _classes: value._classes !=''? value._classes : 'not specified',
    title: value.title !=''? value.title : 'not specified',
    displayTitle: value.displayTitle !=''? value.displayTitle : 'not specified',
    body:value.body !=''? value.body : 'not specified',
    _type:'block',
    _trackingId: 1,
    instruction: value.instruction !=''? value.instruction : 'not specified',
    _childInfo: this.graphics ,
  });
  console.log("block", this.block);
  
  
}
}
