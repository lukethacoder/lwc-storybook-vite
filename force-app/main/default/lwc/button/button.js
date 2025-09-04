import { LightningElement, api } from 'lwc'
import { add } from 'c/utils'

export default class Button extends LightningElement {
  @api
  get label() {
    return this._label || 'Label'
  }
  set label(value) {
    this._label = value
  }

  _label

  handleOnClick() {
    console.log('handleOnClick')
    console.log(`example importing JS only module `, add(1, 2))
  }
}
