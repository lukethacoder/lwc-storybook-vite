import { LightningElement } from 'lwc'

export function registerCustomElement(
  elementName: string,
  elementClass: typeof LightningElement
) {
  const element = customElements.get(elementName)
  if (!element) {
    try {
      customElements.define(elementName, elementClass.CustomElementConstructor)
      return customElements.get(elementName)
    } catch (error) {
      console.warn('Error ', error)
    }
  }

  // element already exists
  return element
}
