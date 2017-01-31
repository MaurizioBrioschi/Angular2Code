import { AngularjsFirstAppPage } from './app.po';

describe('angularjs-first-app App', function() {
  let page: AngularjsFirstAppPage;

  beforeEach(() => {
    page = new AngularjsFirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
