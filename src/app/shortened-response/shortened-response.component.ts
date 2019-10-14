import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ShortUrl } from '../models/short-url';

@Component({
    selector: 'app-shortened-response',
    animations: [
        trigger('visibleHidden', [
            state(
                'visible',
                style({
                    transform: 'translateY(0)',
                    height: '5em',
                    opacity: 1,
                })
            ),
            state(
                'hidden',
                style({
                    transform: 'translateY(-100%)',
                    height: '1em',
                    opacity: 0,
                })
            ),
            transition('visible => hidden', [animate('100ms')]),
            transition('hidden => visible', [animate('100ms')]),
        ]),
    ],
    templateUrl: './shortened-response.component.html',
    styleUrls: ['./shortened-response.component.css'],
})
export class ShortenedResponseComponent {
    @Input() urlEntry: ShortUrl;
    copiedLink: string;

    constructor() {
        this.copiedLink = null;
    }

    isVisible() {
        return !!this.urlEntry;
    }

    isCopied() {
        const shortUrl = this.urlEntry && this.urlEntry.shortUrl;
        return this.copiedLink === shortUrl;
    }

    // Horrible function to copy URL to clipboard
    copyLink() {
        const shortUrl = this.urlEntry && this.urlEntry.shortUrl

        const el = document.createElement('textarea');
        el.value = shortUrl;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this.copiedLink = shortUrl;
    }
}
