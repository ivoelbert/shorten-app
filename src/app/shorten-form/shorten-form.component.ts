import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ShortenService } from '../shorten-service.service';
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
    isSubmitting: boolean;
    urlEntry: ShortUrl;

    constructor(private formBuilder: FormBuilder, private shortenService: ShortenService) {
        const controls: ShortUrlControl = {
            originalUrl: new FormControl('', [Validators.required]),
        };

        this.shortenForm = this.formBuilder.group(controls);
        this.isSubmitting = false;

        this.urlEntry = null;
    }

    canSubmit(): boolean {
        return !this.isSubmitting && this.shortenForm.valid;
    }

    async onSubmit(): Promise<void> {
        try {
            this.urlEntry = null;
            this.isSubmitting = true;
            const originalUrl: string = this.shortenForm.get('originalUrl').value;

            const entry: ShortUrl = await this.shortenService.shortenUrl(originalUrl).toPromise();

            this.urlEntry = entry;
        } catch (err) {
            console.error(err);
            // We should give UI feedback based on this error.
        } finally {
            this.isSubmitting = false;
        }
    }
}
