/* =============================================================================
   Safe DOM + CSV helpers (references/15 §15.5, references/10 §10.12).
   Never build data-driven content with innerHTML. Exposes window.CGDDom.
   ============================================================================= */
(() => {
  /* Build an element with text + attributes + children. Uses textContent only. */
  function element(tag, options = {}, children = []) {
    const node = document.createElement(tag);
    if (options.className) node.className = options.className;
    if (options.text != null) node.textContent = String(options.text);
    for (const [name, value] of Object.entries(options.attributes || {})) {
      node.setAttribute(name, String(value));
    }
    for (const child of children) node.append(child);
    return node;
  }

  /* SVG-namespaced element with attributes (charts need this). */
  function svgEl(tag, attrs = {}) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [name, value] of Object.entries(attrs)) {
      node.setAttribute(name, String(value));
    }
    return node;
  }

  function csvCell(value) {
    if (value == null) return '';
    const text = String(value);
    return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  }

  /* columns: [{key, label}]; rows: [{key: value}]. Downloads current scope only. */
  function downloadCsv(filename, columns, rows) {
    const lines = [
      columns.map(c => csvCell(c.label)).join(','),
      ...rows.map(row => columns.map(c => csvCell(row[c.key])).join(','))
    ];
    const blob = new Blob(['﻿' + lines.join('\r\n')], {
      type: 'text/csv;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  /* ---- Quick tip (references/10 §10.9) ----
     The house replacement for native `title` tooltips, which browsers delay by
     about a second, never show on touch, and cannot style. Write
     data-tip="…" where you would have written title="…": the tip appears at
     once on hover, tap and keyboard focus, and renders inside the fullscreen
     element when there is one. Add data-tip-if-truncated to show it only when
     the element's own text is cut off (full names behind an ellipsis).
     Delegated, so elements rendered later need no wiring. */
  let tipNode = null, tipOwner = null;
  function tipElement() {
    if (!tipNode) {
      tipNode = element('div', { className: 'cgd-quicktip', attributes: { role: 'tooltip' } });
      tipNode.hidden = true;
    }
    const host = document.fullscreenElement || document.body;
    if (tipNode.parentNode !== host) host.append(tipNode);
    return tipNode;
  }
  function tipText(target) {
    const text = target.getAttribute('data-tip');
    if (!text) return '';
    if (target.hasAttribute('data-tip-if-truncated') &&
        !(target.scrollWidth > target.clientWidth + 1 || target.scrollHeight > target.clientHeight + 1)) return '';
    return text;
  }
  function showTip(target) {
    const text = tipText(target);
    if (!text) { hideTip(); return; }
    const tip = tipElement();
    tip.textContent = text;
    tip.hidden = false;
    tipOwner = target;
    const box = target.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = `${Math.min(window.innerWidth - w - 6, Math.max(6, box.left))}px`;
    const above = box.top - h - 6;
    tip.style.top = `${above >= 6 ? above : box.bottom + 6}px`;
  }
  function hideTip() { if (tipNode) tipNode.hidden = true; tipOwner = null; }
  document.addEventListener('pointerover', event => {
    const target = event.target.closest && event.target.closest('[data-tip]');
    if (!target) hideTip();
    else if (target !== tipOwner) showTip(target);
  });
  document.addEventListener('focusin', event => {
    const target = event.target.closest && event.target.closest('[data-tip]');
    if (target) showTip(target);
  });
  document.addEventListener('focusout', hideTip);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hideTip(); });
  document.addEventListener('scroll', hideTip, true);

  window.CGDDom = { element, svgEl, csvCell, downloadCsv, hideTip };
})();
