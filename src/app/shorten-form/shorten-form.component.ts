import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface ShortUrlControls {
    originalUrl: string;
}

@Component({
    selector: 'app-shorten-form',
    templateUrl: './shorten-form.component.html',
    styleUrls: ['./shorten-form.component.css'],
})
export class ShortenFormComponent {
    shortenForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        const controls: ShortUrlControls = {
            originalUrl: '',
        };

        this.shortenForm = this.formBuilder.group(controls);
    }

    async onSubmit(formData: ShortUrlControls): Promise<void> {
        const { originalUrl } = formData;

        this.shortenForm.reset();
    }
}
