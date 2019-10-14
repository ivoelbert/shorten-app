import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUrlsComponent } from './top-urls.component';

describe('TopUrlsComponent', () => {
  let component: TopUrlsComponent;
  let fixture: ComponentFixture<TopUrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopUrlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
