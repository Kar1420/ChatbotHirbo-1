import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQrComponent } from './list-qr.component';

describe('ListQrComponent', () => {
  let component: ListQrComponent;
  let fixture: ComponentFixture<ListQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListQrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
