import { Component, OnInit } from '@angular/core';
import { ShortenService } from '../shorten-service.service';
import { ShortUrl } from '../models/short-url';

@Component({
    selector: 'app-top-urls',
    templateUrl: './top-urls.component.html',
    styleUrls: ['./top-urls.component.css'],
})
export class TopUrlsComponent implements OnInit {
    top100: ShortUrl[];

    constructor(private shortenService: ShortenService) {}

    async ngOnInit() {
        this.top100 = await this.shortenService.getTopN(100).toPromise();
    }
}
