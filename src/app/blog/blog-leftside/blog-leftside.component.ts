import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog-leftside',
  templateUrl: './blog-leftside.component.html',
  styleUrls: ['./blog-leftside.component.scss']
})
export class BlogLeftsideComponent implements OnInit, OnDestroy {


  page: any;

  constructor(
    private fix: LandingFixService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private postService : PostService
  ) { }

  ngOnInit() {
    this.fix.addFixBlog();
    this.title.setTitle( this.route.snapshot.data['title']);

    this.getAllPost();
  }


  getAllPost() {

    this.postService.getPosts()
    .subscribe(
      page => {
        this.page = page['hydra:member']
        console.log(this.page);
      }
    );
  }




  ngOnDestroy() {
    this.fix.removeFixBlog();
  }

}
