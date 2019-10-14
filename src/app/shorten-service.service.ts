import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShortUrl } from './models/short-url';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ShortenService {
    private apiURL: string = 'http://localhost:3000';
    private shortURL: string = 'localhost:3000';

    constructor(private http: HttpClient) {}

    public shortenUrl(originalUrl: string): Observable<ShortUrl> {
        const endpoint: string = `${this.apiURL}/url`;
        const body = {
            url: originalUrl,
        };

        return this.http.post<ShortUrl>(endpoint, body).pipe(
            map(
                (entry: ShortUrl): ShortUrl => ({
                    ...entry,
                    shortUrl: `${this.shortURL}/${entry.shortUrl}`,
                })
            )
        );
    }

    public getTopN(count: number = 100): Observable<ShortUrl[]> {
        const endpoint: string = `${this.apiURL}/top?count=${count}`;

        return this.http.get<ShortUrl[]>(endpoint).pipe(
            map((response: ShortUrl[]) =>
                response.map(
                    (entry: ShortUrl): ShortUrl => ({
                        ...entry,
                        shortUrl: `${this.shortURL}/${entry.shortUrl}`,
                    })
                )
            )
        );
    }
}
