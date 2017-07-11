import { MyAdventurePage } from './app.po';

describe('my-adventure App', () => {
  let page: MyAdventurePage;

  beforeEach(() => {
    page = new MyAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
