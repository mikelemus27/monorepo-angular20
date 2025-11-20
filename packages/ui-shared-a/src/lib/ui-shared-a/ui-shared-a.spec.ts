import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSharedA } from './ui-shared-a';

describe('UiSharedA', () => {
  let component: UiSharedA;
  let fixture: ComponentFixture<UiSharedA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSharedA],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSharedA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
