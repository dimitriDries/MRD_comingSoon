/**
 * GTM dataLayer helpers – event schema for GA4.
 * Events: page_impression, overlay_view, overlay_close, button_click, link_click, form_submit.
 */

function ensureDataLayer() {
  if (typeof window === 'undefined') return []
  window.dataLayer = window.dataLayer || []
  return window.dataLayer
}

export function pushEvent(payload) {
  const dataLayer = ensureDataLayer()
  dataLayer.push(payload)
}

export function pushPageImpression({ pageName, pageType, pageLanguage }) {
  pushEvent({
    event: 'page_impression',
    pageName: pageName || '',
    pageType: pageType || '',
    pageLanguage: pageLanguage || '',
    component: 'page',
  })
}

export function pushOverlayView(overlayId) {
  pushEvent({
    event: 'overlay_view',
    overlayId: overlayId || '',
  })
}

export function pushOverlayClose(overlayId) {
  pushEvent({
    event: 'overlay_close',
    overlayId: overlayId || '',
  })
}

export function pushButtonClick({ componentName, componentType, componentTarget, componentText, section }) {
  pushEvent({
    event: 'button_click',
    component: 'button',
    componentName: componentName || '',
    componentType: componentType || '',
    componentTarget: (componentTarget || '').toLowerCase(),
    componentText: (componentText || '').toLowerCase(),
    section: section || '',
  })
}

export function pushLinkClick({ componentName, componentType, componentTarget, componentText, section }) {
  pushEvent({
    event: 'link_click',
    component: 'link',
    componentName: componentName || '',
    componentType: componentType || '',
    componentTarget: (componentTarget || '').toLowerCase(),
    componentText: (componentText || '').toLowerCase(),
    section: section || '',
  })
}

export function pushFormSubmit({ formName, formId }) {
  pushEvent({
    event: 'form_submit',
    component: 'form',
    formName: formName || '',
    formId: formId || '',
  })
}
