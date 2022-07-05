import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ArticlesService } from 'src/app/services/articles.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  loading:boolean = false;
  article:any;
  comments: any[] =[];
  anotherPosts: any[] =[];
  articlesViews: any[] =[];
  indexForNumbers: any;
  articleImage:string = `${environment.imageUrl}posts/`;
  categoryImage:any = `${environment.imageUrl}Category/`;

  constructor(
    private _ArticlesService:ArticlesService,
    private _ActivatedRoute:ActivatedRoute,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.getDetails();
    this.showArticlesViews();
  }
  commentForm:FormGroup = new FormGroup({
    'title' : new FormControl('', Validators.required),
    'text' : new FormControl('', Validators.required),
    'comment_status' : new FormControl('0', Validators.required),
  })

  getDetails(){
    this.indexForNumbers = this._ActivatedRoute.snapshot.params["id"];

    this._ActivatedRoute.paramMap.subscribe(
      (params:Params) => {
        this.loading = true;
        this._ArticlesService.getArticleDetails(params['params'].id).subscribe(
          (response) => {
            this.article = response.Post;
            const commentArray = response.Post.comment_re.filter(
              (array:any) => {
                return array.comment_status != 0;
              }
            )
            this.comments = commentArray;
            this.anotherPosts = response.AnotherPosts;
            this.loading = false;

          }
        )
      }
    )
  }
  showArticlesViews(){
    this.loading  = true;
    this._ArticlesService.getArticles().subscribe(
      (response) => {
        // this.articles = response.row
        const newArray =  response.row.sort(
          (views:any , view_counter:any)=> {
            return view_counter.view_counter - views.view_counter;
          }
        ).filter((x:any) => {
          return x.post_status != 0;
        })
        console.log(newArray);
        this.articlesViews = newArray;
        this.loading  = false;

      }

    )
  }
  submitMessageForm(){
    this.loading = true;

    this._ArticlesService.createComment(
      this.commentForm.value.title,
      this.commentForm.value.text,
      this.indexForNumbers,
      this.commentForm.value.comment_status,

    ).subscribe(
      (response) => {
        console.log(response);
        this.getDetails();
        this.loading = false;

      }
    )
  }
  otherArticles: OwlOptions = {

    loop:true,
    margin:40,
    dots: false,
    autoplay:true,
    rtl: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
  }
}
