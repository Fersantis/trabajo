import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodiguitoPage } from './codiguito.page';

describe('CodiguitoPage', () => {
  let component: CodiguitoPage;
  let fixture: ComponentFixture<CodiguitoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodiguitoPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodiguitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
