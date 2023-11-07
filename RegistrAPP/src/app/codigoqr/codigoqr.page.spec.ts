import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodigoqrPage } from './Codigoqr.page';

describe('CodigoqrPage', () => {
  let component: CodigoqrPage;
  let fixture: ComponentFixture<CodigoqrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodigoqrPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodigoqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
