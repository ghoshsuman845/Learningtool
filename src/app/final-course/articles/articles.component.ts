import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @Input() articleContent:string[];
 
  pages:string;
 
  
  course: string;
  page: string;
  page1: string;
  article: string;
  articles: string;
  block: string;
  blocks: string;
  component: string;
  components: string;
  newCourse:{};
  articleIndex: string;
  blockIndex: any;
  blockIndex1: any;
  componentIndex: any;
  componentIndex1: any;
  mainComponent: any;
  mainComponent1: any;

  constructor(private layoutService:LayoutService,private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.layoutService.PageContentAdded.subscribe((data)=>{
      // this.page=  this.pageContent.push(data);
      if(data){
        console.log("this is the data that comes in final-course.ts",data);
        console.log(typeof data);
        this.course = typeof(data)==='string'? JSON.parse(data): data;
        console.log('this.course',this.course); //COURSE
        this.page =this.course[0];
        console.log('page',this.page['_childInfo']);
        this.page1 = this.page['_childInfo'];
        console.log("page1", this.page1[0]); 
        this.pages = this.page1[0]; //PAGE
        this.article = this.pages['_childInfo'];
        this.articles = this.article[0]; //ARTICLE
        console.log('this.articles',this.articles);
        this.block = this.articles['_childInfo'];
        this.blocks=this.block[0];
        console.log('this.blocks',this.blocks);//BLOCK
        
        this.component =this.blocks['_childInfo'];
        console.log('this.component',this.component);
        this.components= this.component[0];
        console.log('this.components',this.components);//Component

        
        
        

        // this.pages = typeof(data)==='string'? JSON.parse(data): data;
        // console.log("this.pages",this.pages);
        
        
        // this.articleIndex=this.pages[0];
        // console.log("article index",this.articleIndex['_childInfo']);
        //   this.blockIndex =this.articleIndex['_childInfo'];
        // console.log("block index",this.blockIndex[0]);   // PAGE
        // this.blockIndex1 =this.blockIndex[0];
        // console.log("block index 1",this.blockIndex1['_childInfo']);
  
        // this.componentIndex =this.blockIndex1['_childInfo'];
        // console.log("component index",this.componentIndex[0]); //ARTICLE
        // this.componentIndex1 =this.componentIndex[0];
        // console.log("component index 1",this.componentIndex1['_childInfo']);
        // this.mainComponent = this.componentIndex1['_childInfo'];
        // console.log("mainComponent",this.mainComponent[0]); //BLOCK
        // this.mainComponent1 = this.mainComponent[0];
        
  
  
  
  
  
        
        // console.log(typeof this.pages);
      }else{
        console.log("No page array found");
      }
      
         
  });

    
  //   this.serviceService.ArticleContentAdded.subscribe((_article)=>{
       
  //     console.log("final course data",this.route.snapshot.paramMap.get('id'));
  //   this.articleData=this.route.snapshot.paramMap.get('id');
  //   this.article = JSON.parse(this.articleData);
  //   _article = this.article;
  //   console.log("_article", this.article);
  //   this.articleContent.push(_article);
   
  //  });
   
  }

}
