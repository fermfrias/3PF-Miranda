import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCurComponent } from './agregar-cur.component';

describe('AgregarCurComponent', () => {
  let component: AgregarCurComponent;
  let fixture: ComponentFixture<AgregarCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
