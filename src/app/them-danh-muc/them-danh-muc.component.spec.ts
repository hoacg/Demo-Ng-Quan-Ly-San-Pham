import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemDanhMucComponent } from './them-danh-muc.component';

describe('ThemDanhMucComponent', () => {
  let component: ThemDanhMucComponent;
  let fixture: ComponentFixture<ThemDanhMucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemDanhMucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
