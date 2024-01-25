import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrawberryPage } from './strawberry.page';

describe('StrawberryPage', () => {
  let component: StrawberryPage;
  let fixture: ComponentFixture<StrawberryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StrawberryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
