const {VlElement} = require('vl-ui-core').Test;

class VlIntroduction extends VlElement {
  async getText() {
    const text = await super.getText();
    return text.trim();
  }
}

module.exports = VlIntroduction;
