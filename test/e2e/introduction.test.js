const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlIntroductionPage = require('./pages/vl-introduction.page');

describe('vl-introduction', async () => {
  const vlIntroductionPage = new VlIntroductionPage(driver);

  before(() => {
    return vlIntroductionPage.load();
  });

  it('als gebruiker kan in de introductie lezen', async () => {
    const introduction = await vlIntroductionPage.getIntroduction();
    await assert.eventually.equal(introduction.getText(), 'Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.');
  });
});
