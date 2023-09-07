export function listen(
  element: HTMLElement,
  type: string | string[],
  handler: () => void
) {
  var types = isArray(type) ? type : trim(type).split(/\s+/);
  var k = types.length;

  if (k) {
    while (k--) {
      type = types[k];
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      }
    }
  }
}

export function trim(str: string) {
  return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, "");
}

export function isArray(obj: Object): obj is string[] {
  return isType(obj, "Array");
}

function isType(obj: Object, type: string) {
  return Object.prototype.toString.apply(obj) == `[object ${type}]`;
}
