import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenedResponseComponent } from './shortened-response.component';

describe('ShortenedResponseComponent', () => {
  let component: ShortenedResponseComponent;
  let fixture: ComponentFixture<ShortenedResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenedResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenedResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
