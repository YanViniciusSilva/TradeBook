import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnnouncesInfosComponent } from './my-announces-infos.component';

describe('MyAnnouncesInfosComponent', () => {
  let component: MyAnnouncesInfosComponent;
  let fixture: ComponentFixture<MyAnnouncesInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAnnouncesInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnnouncesInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
