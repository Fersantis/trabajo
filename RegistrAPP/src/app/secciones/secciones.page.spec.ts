import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeccionesPage } from './Secciones.page';

describe('SeccionesPage', () => {
  let component: SeccionesPage;
  let fixture: ComponentFixture<SeccionesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccionesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
