import { Mandatory1Page } from './app.po';

describe('mandatory1 App', function() {
  let page: Mandatory1Page;

  beforeEach(() => {
    page = new Mandatory1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
