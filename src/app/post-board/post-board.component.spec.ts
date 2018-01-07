import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBoardComponent } from './post-board.component';

describe('PostBoardComponent', () => {
  let component: PostBoardComponent;
  let fixture: ComponentFixture<PostBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
