import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { ApiCallService } from "../../services/api-call.service";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"]
})
export class DiscoverPage implements OnInit {
  public tagInput: string = "";
  public tags: any[] = [];
  @ViewChild("slides", { static: true }) slider: IonSlides;
  segment = 0;
  public photos: any;

  public relatedSearch: any[] = [
    {
      tag: "#flatshoes",
      post: "16k posts"
    },
    {
      tag: "#hells",
      post: "5k posts"
    },
    {
      tag: "#redshoes",
      post: "6k posts"
    },
    {
      tag: "#sportshoes",
      post: "1k posts"
    }
  ];

  constructor(private apiService: ApiCallService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe(photos => {
      this.photos = photos;
    });
  }

  addTag(formValue: any) {
    if (formValue.tagValue) {
      this.tags.push(formValue.tagValue);
      this.tagInput = "";
    }
  }

  removeTag(index: number) {
    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
}
