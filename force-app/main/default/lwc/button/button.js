import { LightningElement, api } from 'lwc'

export default class Button extends LightningElement {
  @api
  get label() {
    return this._label || 'Label'
  }
  set label(value) {
    this._label = value
  }

  _label
}
