import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShortUrl } from './models/short-url';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ShortenServiceService {
    private apiURL: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    public shortenUrl(originalUrl: string): Observable<ShortUrl> {
        const endpoint: string = `${this.apiURL}/url`;
        const body = {
            url: originalUrl,
        };

        return this.http.post<ShortUrl>(endpoint, body).pipe(
            map((entry: ShortUrl) => ({
                ...entry,
                shortUrl: `${this.apiURL}/${entry.shortUrl}`,
            }))
        );
    }
}
