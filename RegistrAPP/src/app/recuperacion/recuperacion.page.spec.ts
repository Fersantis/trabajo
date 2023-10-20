import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperacionPage } from './recuperacion.page';
import { IonicModule } from '@ionic/angular';

describe('RecuperacionPage', () => {
  let component: RecuperacionPage;
  let fixture: ComponentFixture<RecuperacionPage>;

  beforeEach(async() => {

    await TestBed.configureTestingModule({
      declarations: [RecuperacionPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
