import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { RecuperarPage } from './recuperar.page';

describe('RecuperarPage', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;
  let emailComposerSpy: jasmine.SpyObj<EmailComposer>;
  beforeEach (async () => {
    const spy = jasmine.createSpyObj('EmailComposer', ['open']);
    await TestBed.configureTestingModule({
      providers: [
        { provide: EmailComposer, useValue: spy }
      ],
      declarations: [RecuperarPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    emailComposerSpy = TestBed.inject(EmailComposer) as jasmine.SpyObj<EmailComposer>;
    fixture = TestBed.createComponent(RecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // prueba para enviar e-mail en recuperación 
  it('should call EmailComposer.open when sendEmail is called', () => {
    const subject = 'Test Subject';
    const body = 'Test Body';
    const to = 'test@example.com';

    component.sendEmail(subject, body, to);

    expect(emailComposerSpy.open).toHaveBeenCalledOnceWith({
      to: to,
      subject: subject,
      body: body,
      isHtml: true
    });
  });
});
