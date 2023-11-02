import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuantityPopupComponent } from './edit-quantity-popup.component';

describe('EditQuantityPopupComponent', () => {
  let component: EditQuantityPopupComponent;
  let fixture: ComponentFixture<EditQuantityPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditQuantityPopupComponent]
    });
    fixture = TestBed.createComponent(EditQuantityPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
