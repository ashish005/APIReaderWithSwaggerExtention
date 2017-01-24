import { SwaggerApiExtentionPage } from './app.po';

describe('swagger-api-extention App', function() {
  let page: SwaggerApiExtentionPage;

  beforeEach(() => {
    page = new SwaggerApiExtentionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
