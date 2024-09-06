const _baseURL = "https://test-case.cayena.io/";
export function makeBaseURL(path: string): string {
  return _baseURL + path;
}

export const authRequestURL = {
  fetchToken: makeBaseURL("oauth/token"),
};

const _localAPIURL = "/api/";
function _makeLocalURL(path: string): string {
  return _localAPIURL + path;
}

export const localRequestURL = {
  authenticateUser: _makeLocalURL("login"),
};

function _makeProxyURL(path: string): string {
  return _makeLocalURL("proxy/" + path);
}

export const requestURL = {
  fetchSupplierList: _makeProxyURL("suppliers"),
  fetchSupplierById: _makeProxyURL("suppliers/{{id}}"),
  updateSupplier: _makeProxyURL("suppliers"),
};
