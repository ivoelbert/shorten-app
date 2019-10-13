import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ShortenServiceService } from '../shorten-service.service';
import { ShortUrl } from '../models/short-url';

interface ShortUrlControl {
    originalUrl: FormControl;
}

@Component({
    selector: 'app-shorten-form',
    templateUrl: './shorten-form.component.html',
    styleUrls: ['./shorten-form.component.css'],
})
export class ShortenFormComponent {
    shortenForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private shortenService: ShortenServiceService) {
        const controls: ShortUrlControl = {
            originalUrl: new FormControl('', [Validators.required]),
        };

        this.shortenForm = this.formBuilder.group(controls);
    }

    async onSubmit(formData: ShortUrlControl): Promise<void> {
        try {
            const originalUrl: string = this.shortenForm.get('originalUrl').value;

            const entry: ShortUrl = await this.shortenService.shortenUrl(originalUrl).toPromise();

            console.log(entry);
            // We should show the user the shortened URL.
        } catch (err) {
            console.error(err);
            // We should give UI feedback based on this error.
        }
    }
}
