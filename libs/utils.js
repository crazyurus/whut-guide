export function getPagePath(page) {
  return page.route + '?' + getQueryString(page.options);
}

export function getQueryString(params) {
  return Object.keys(params).map(key => key + '=' + params[key]).join('&');
}