import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('click boton de profesor muestra qr y el estado de show qr pasa a true', () => {
    const button = fixture.debugElement.query(By.css('button'));

    // Simular un clic en el botón
    button.triggerEventHandler('click', null);

    // Forzar la actualización de la vista después del clic
    fixture.detectChanges();

    // Verificar que el método del botón haga click
    expect(component.showQr).toBe(true);
  });


  it('validacion de rol del usuario logeado como alumno', () => {
    component.setRolUser("alumno")
    // Verificar que el método del botón haga click
    expect(component.showQr).toBe(true);
  });

  it('validacion de rol del usuario logeado como profesor', () => {
    component.setRolUser("profesor")
    // Verificar que el método del botón haga click
    expect(component.showQr).toBe(false);
  });
});
