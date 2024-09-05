const _baseURL = "https://test-case.cayena.io/";
function _makeBaseURL(path: string): string {
  return _baseURL + path;
}

export const requestURL = {
  fetchToken: _makeBaseURL("oauth/token"),
};

const _localAPIURL = "/api/";
function _makeLocalURL(path: string): string {
  return _localAPIURL + path;
}

export const localRequestURL = {
  authenticateUser: _makeLocalURL("login"),
};
