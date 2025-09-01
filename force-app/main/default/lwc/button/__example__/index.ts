import { html } from 'lit'
import { registerCustomElement } from '../../../../../../utils'

import ButtonExampleLwc from './basic/basic'

export const ButtonLwc = ({ label }) => {
  registerCustomElement('c-story-button', ButtonExampleLwc)

  return html`
    <div>
      <c-story-button label=${label}></c-story-button>
    </div>
  `
}
