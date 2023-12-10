import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesorPage } from './profesor.page';

describe('ProfesorPage', () => {
  let component: ProfesorPage;
  let fixture: ComponentFixture<ProfesorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesorPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
it('should set proper values for input fields', () => {
  const inputElements: NodeListOf<HTMLInputElement> = fixture.nativeElement.querySelectorAll('ion-input');

  // Assuming you have some properties in your component like docenteValue and passwordValue
  component.docenteValue = 'UsuarioPrueba';
  component.passwordValue = 'ContraseñaPrueba';

  fixture.detectChanges();

  expect(inputElements[0].value).toEqual('UsuarioPrueba');
  expect(inputElements[1].value).toEqual('ContraseñaPrueba');
});

it('should have the correct image source', () => {
  const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
  expect(imgElement.src).toContain('Logo_DuocUC.svg');
});

it('should have a secondary colored button with proper size', () => {
  const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('ion-button');
  expect(buttonElement.color).toEqual('secondary');
  expect(buttonElement.size).toEqual('default');
});

it('should have the correct event binding for the button click', () => {
  spyOn(component, 'Pasarlista');
  const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('ion-button');
  buttonElement.click();
  expect(component.Pasarlista).toHaveBeenCalled();
});
