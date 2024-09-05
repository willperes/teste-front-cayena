const _localAPIURL = "/api/";
// const _baseURL = "https://test-case.cayena.io/";

function _makeLocalURL(path: string): string {
  return _localAPIURL + path;
}

// function _makeBaseURL(path: string): string {
//   return _baseURL + path;
// }

export const requestURL = {
  // authenticateUser: _makeBaseURL("oauth/token"),
  authenticateUser: _makeLocalURL("login"),
};
