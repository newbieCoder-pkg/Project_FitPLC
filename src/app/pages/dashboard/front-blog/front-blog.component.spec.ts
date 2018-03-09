import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBlogComponent } from './front-blog.component';

describe('FrontBlogComponent', () => {
  let component: FrontBlogComponent;
  let fixture: ComponentFixture<FrontBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontBlogComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
