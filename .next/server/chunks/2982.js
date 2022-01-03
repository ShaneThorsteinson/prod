"use strict";
exports.id = 2982;
exports.ids = [2982];
exports.modules = {

/***/ 2982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4178);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ApiService {
  /**
     * @param {string} url
     * @param {import('axios').AxiosRequestConfig} extra
     * @returns {Promise}
     */
  static async request(url, extra) {
    const headers = {};
    const token = (0,helpers_storage__WEBPACK_IMPORTED_MODULE_1__/* .getUserToken */ .Nh)();

    if (token) {
      headers.Authorization = 'Bearer ' + token;
    }

    return axios__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread({
      baseURL: this.API_BASE,
      url,
      headers
    }, extra)).catch(err => {
      var _err$response, _err$response$data;

      if (err !== null && err !== void 0 && (_err$response = err.response) !== null && _err$response !== void 0 && (_err$response$data = _err$response.data) !== null && _err$response$data !== void 0 && _err$response$data.message) {
        err.message = err.response.data.message;
      }

      throw err;
    });
  }

  static async me() {
    return ApiService.request('/user/me').then(res => res.data);
  }

  static async updateMe(data) {
    return ApiService.request('/user/me', {
      method: 'PUT',
      data
    });
  }

  static async signIn(data) {
    return ApiService.request('/user/signin', {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async signUp(data) {
    return ApiService.request('/user/signup', {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async getAllAccomplishments() {
    return ApiService.request('/accomplishments', {
      method: 'GET'
    }).then(res => res.data);
  }

  static async addAccomplishment(data) {
    return ApiService.request('/accomplishments', {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async updateAccomplishment(id, data) {
    return ApiService.request('/accomplishment/' + id, {
      method: 'PUT',
      data
    }).then(res => res.data);
  }

  static async deleteAccomplishment(id) {
    return ApiService.request('/accomplishment/' + id, {
      method: 'DELETE'
    }).then(res => res.data);
  }
  /* Teams */


  static async getMyTeams(query = {}) {
    return ApiService.request('/teams/my', {
      method: 'GET',
      params: query
    }).then(res => res.data);
  }

  static async getTeam(id) {
    return ApiService.request('/teams/' + id, {
      method: 'GET'
    }).then(res => res.data);
  }

  static async createTeam(data) {
    return ApiService.request('/teams', {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async updateTeam(id, data) {
    return ApiService.request('/teams/' + id, {
      method: 'PUT',
      data
    }).then(res => res.data);
  }

  static async addUsersToTeam(id, users) {
    return ApiService.request('/teams/' + id + '/add-users', {
      method: 'POST',
      data: {
        users
      }
    });
  }

  static async joinTeam(teamId) {
    return ApiService.request('/teams/' + teamId + '/join', {
      method: 'GET'
    });
  }

  static async leaveTeam(teamId) {
    return ApiService.request('/teams/' + teamId + '/leave', {
      method: 'DELETE'
    });
  }

  static async removeTeammate(teamId, userId) {
    return ApiService.request('/teams/' + teamId + '/remove-teammate/' + userId, {
      method: 'DELETE'
    });
  }

  static async deleteTeam(teamId) {
    return ApiService.request('/teams/' + teamId, {
      method: 'DELETE'
    });
  }

  static async joinTeamByInvite(inviteCode) {
    return ApiService.request('/invite/' + inviteCode, {
      method: 'GET'
    }).then(res => res.data);
  }
  /* Scrims */


  static async getAllScrims() {
    return ApiService.request('/scrims', {
      method: 'GET'
    }).then(res => res.data);
  }

  static async addScrim(data) {
    return ApiService.request('/scrims', {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async leaveScrim() {
    return ApiService.request('/scrims/leave', {
      method: 'GET'
    });
  }

  static async sendScrimRequest(scrimId, fromScrimId) {
    return ApiService.request('/scrims/' + scrimId + '/request', {
      method: 'POST',
      data: {
        fromScrimId
      }
    }).then(res => res.data);
  }

  static async acceptScrimRequest(requestId) {
    return ApiService.request('/scrims/request/' + requestId + '/accept', {
      method: 'GET'
    }).then(res => res.data);
  }
  /* Users */


  static async searchUsers(q, params) {
    return ApiService.request('/user/search', {
      method: 'GET',
      params: _objectSpread({
        q
      }, params)
    }).then(res => res.data);
  }
  /* Notifications */


  static async notifications() {
    return ApiService.request('/notifications', {
      method: 'GET'
    }).then(res => res.data);
  }

  static async readNotifications() {
    return ApiService.request('/notifications/read', {
      method: 'GET'
    });
  }
  /* Match */


  static async getCompletedMatches() {
    return ApiService.request('/match', {
      method: 'GET'
    }).then(res => res.data);
  }

  static async getMatch(id) {
    return ApiService.request('/match/' + id, {
      method: 'GET'
    }).then(res => res.data);
  }

  static async addMatchScore(data) {
    return ApiService.request('/match/score', {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async getMatchScore(id) {
    return ApiService.request('/match/score/' + id, {
      method: 'GET'
    }).then(res => res.data);
  }

  static async acceptMatchScore(id) {
    return ApiService.request('/match/score/' + id + '/accept', {
      method: 'GET'
    }).then(res => res.data);
  }

  static async rejectMatchScore(id) {
    return ApiService.request('/match/score/' + id + '/reject', {
      method: 'GET'
    }).then(res => res.data);
  }

  static async getMatchMessages(id) {
    return ApiService.request('/match/' + id + '/messages', {
      method: 'GET'
    }).then(res => res.data);
  }

  static async postMatchMessage(matchId, data) {
    return ApiService.request('/match/' + matchId + '/messages', {
      method: 'POST',
      data
    }).then(res => res.data);
  }
  /* Wallet */


  static async getWallet() {
    return ApiService.request('/wallet', {
      method: 'GET'
    }).then(res => res.data);
  }

  static async createWallet(data) {
    return ApiService.request('/wallet/create', {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async verifyWallet(data) {
    return ApiService.request('/wallet/verify', {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async getPayoutLink() {
    return ApiService.request('/wallet/payout', {
      method: 'GET'
    }).then(res => res.data.link);
  }

  static async getRefillLink() {
    return ApiService.request('/wallet/refill', {
      method: 'GET'
    }).then(res => res.data.link);
  }
  /* Tournaments */


  static async getTournaments(query) {
    return ApiService.request('/tournaments', {
      method: 'GET',
      params: query
    }).then(res => res.data);
  }

  static async getTournament(id) {
    return ApiService.request(`/tournaments/${id}`, {
      method: 'GET'
    }).then(res => res.data);
  }

  static async registerInTournament(id, data) {
    return ApiService.request(`/tournaments/${id}/register`, {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async getTournamentStatus(id) {
    return ApiService.request(`/tournaments/${id}/status`, {
      method: 'GET'
    }).then(res => res.data);
  }

  static async payTournament(id, data) {
    return ApiService.request(`/tournaments/${id}/pay`, {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async payTournamentForFriend(userId, tournamentId, amount) {
    return ApiService.request(`/tournaments/${tournamentId}/pay`, {
      method: 'POST',
      data: {
        userId,
        amount
      }
    }).then(res => res.data);
  }

  static async getTournamentMatch(id) {
    return ApiService.request(`/tournaments/${id}/match`, {
      method: 'GET'
    }).then(res => res.data);
  }

  static async getTournamentParticipant(id) {
    return ApiService.request(`/tournaments/${id}/participant`, {
      method: 'GET'
    }).then(res => res.data);
  }

  static async getTournamentParticipants(id) {
    return ApiService.request(`/tournaments/${id}/participants`, {
      method: 'GET'
    }).then(res => res.data);
  }

  static async reportTournamentMatch(id, data) {
    return ApiService.request(`/tournaments/${id}/report`, {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async getTournamentMessages(id) {
    return ApiService.request('/tournaments/match/' + id + '/messages', {
      method: 'GET'
    }).then(res => res.data);
  }

  static async createTournamentMessage(matchId, data) {
    return ApiService.request('/tournaments/match/' + matchId + '/messages', {
      method: 'POST',
      data
    }).then(res => res.data);
  }
  /**
   * Membership
   */


  static async membershipCreateCheckout(priceId) {
    return ApiService.request('/membership/create-checkout', {
      method: 'POST',
      data: {
        priceId
      }
    }).then(res => res.data);
  }

  static async membershipCreatePortal(data) {
    return ApiService.request('/membership/create-portal', {
      method: 'POST',
      data
    }).then(res => res.data);
  }

  static async membershipMySubscription() {
    return ApiService.request('/membership/my-subscription', {
      method: 'GET'
    }).then(res => res.data);
  }

}

_defineProperty(ApiService, "API_BASE", process.env.NEXT_PUBLIC_API_URL);

_defineProperty(ApiService, "UPLOAD_URL", ApiService.API_BASE + '/upload');

/***/ }),

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nh": () => (/* binding */ getUserToken),
/* harmony export */   "Ne": () => (/* binding */ removeUserToken),
/* harmony export */   "dP": () => (/* binding */ setUserToken)
/* harmony export */ });
const getUserToken = () => {
  if (false) {}

  return null;
};
const removeUserToken = () => {
  if (false) {}

  return false;
};
const setUserToken = token => {
  if (false) {}

  return null;
};

/***/ })

};
;