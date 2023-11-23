import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 // prueba de creación de la página por defecto
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // prueba login válido
  it('Should Make a Login Valid', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance
    fixture.detectChanges() //TODO: <---------------

    app.inputValue= "Perez"
    app.inputValue2="mariaperez"
    app.Ingresar()
    expect(app.errorMessage).toBeNull(); 
  });

  //prueba para login inválido 
  it('Should Make a Login Invalid', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance
    fixture.detectChanges() //TODO: <---------------

    app.inputValue= "test"
    app.inputValue2="testPassword"
    app.Ingresar()
    expect(app.errorMessage).toBe("Los datos ingresados son incorrectos"); 
  });
  
  
});
