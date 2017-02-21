import { PlumstPage } from './app.po';

describe('plumst App', function() {
  let page: PlumstPage;

  beforeEach(() => {
    page = new PlumstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
