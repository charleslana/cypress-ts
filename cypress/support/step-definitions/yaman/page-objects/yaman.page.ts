import { generateEmail, generateLorem, generateName } from '@/support/utils/utils';

export class YamanPage {
  private url = 'https://yaman.com.br/pt-br/';
  private closeMainDialog = '[aria-label="Fechar esta caixa de diálogo"]';
  private topBarMenu = '.topbar__menu';
  private menuContact = 'Contato';
  private inputName = '#contact-form__name';
  private inputEmail = '#contact-form__email';
  private inputSubject = '#contact-form__subject';
  private inputMessage = '#contact-form__message';
  private sendButton = 'Enviar';
  private successMessage = 'Mensagem enviada com sucesso.';
  private iconMobileMenu = '.topbar__handle__open-icon';

  public openApp(): void {
    cy.visit(this.url);
    cy.get(this.closeMainDialog).click();
  }

  public clickContactMenu(): void {
    cy.get(this.topBarMenu).contains(this.menuContact).click();
  }

  public fillName(): void {
    cy.get(this.inputName).type(generateName());
  }

  public fillEmail(): void {
    cy.get(this.inputEmail).type(generateEmail());
  }

  public fillSubject(): void {
    cy.get(this.inputSubject).invoke('val', generateLorem());
  }

  public fillMessage(): void {
    cy.get(this.inputMessage).invoke('val', generateLorem());
  }

  public sendContact(): void {
    cy.contains(this.sendButton).click();
  }

  public seeMessage(): void {
    cy.contains(this.successMessage).should('be.visible');
  }

  public setViewport(): void {
    cy.viewport('iphone-4');
  }

  public seeMobileMenu(): void {
    cy.get(this.iconMobileMenu).should('be.visible');
  }
}
