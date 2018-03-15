import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

@Component({
    selector: 'reddits',
    templateUrl: 'reddits.html'
})
export class RedditsPage {
    items:any;
    category: any;
    limit:any;

    constructor(public navCtrl: NavController, private redditService: RedditService) {
        this.getDefaults();
    }

    ngOnInit() {
        this.getPosts(this.category,this.limit);
    }

    getPosts(category, limit){
        this.redditService.getPosts(category, limit).subscribe(response => {
            this.items =response.data.children;
        });
    }

    viewItem(item){
        this.navCtrl.push(DetailsPage, {
            item:item
        });
    }

    getDefaults(){
        this.category = 'sports';
        this.limit = 10;
    }

    changeCategory(){
        this.getPosts(this.category, this.limit);
    }
}
