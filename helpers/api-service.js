import axios from 'axios'
import { getUserToken } from 'helpers/storage'

export default class ApiService {
  static API_BASE = process.env.NEXT_PUBLIC_API_URL
  static UPLOAD_URL = ApiService.API_BASE + '/upload'
  /**
     * @param {string} url
     * @param {import('axios').AxiosRequestConfig} extra
     * @returns {Promise}
     */

  static async request (url, extra) {
    const headers = {}
    const token = getUserToken()
    if (token) {
      headers.Authorization = 'Bearer ' + token
    }

    return axios({
      baseURL: this.API_BASE,
      url,
      headers,
      ...extra
    })
      .catch(err => {
        if (err?.response?.data?.message) {
          err.message = err.response.data.message
        }
        throw err
      })
  }

  static async me () {
    return ApiService.request('/user/me')
      .then(res => res.data)
  }

  static async updateMe (data) {
    return ApiService.request('/user/me', {
      method: 'PUT',
      data
    })
  }

  static async signIn (data) {
    return ApiService.request('/user/signin', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async signUp (data) {
    return ApiService.request('/user/signup', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async getAllAccomplishments () {
    return ApiService.request('/accomplishments', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async addAccomplishment (data) {
    return ApiService.request('/accomplishments', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async updateAccomplishment (id, data) {
    return ApiService.request('/accomplishment/' + id, {
      method: 'PUT',
      data
    })
      .then(res => res.data)
  }

  static async deleteAccomplishment (id) {
    return ApiService.request('/accomplishment/' + id, {
      method: 'DELETE'
    })
      .then(res => res.data)
  }

  /* Teams */

  static async getMyTeams (query = {}) {
    return ApiService.request('/teams/my', {
      method: 'GET',
      params: query
    })
      .then(res => res.data)
  }

  static async getTeam (id) {
    return ApiService.request('/teams/' + id, {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async createTeam (data) {
    return ApiService.request('/teams', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async updateTeam (id, data) {
    return ApiService.request('/teams/' + id, {
      method: 'PUT',
      data
    })
      .then(res => res.data)
  }

  static async addUsersToTeam (id, users) {
    return ApiService.request('/teams/' + id + '/add-users', {
      method: 'POST',
      data: {
        users
      }
    })
  }

  static async joinTeam (teamId) {
    return ApiService.request('/teams/' + teamId + '/join', {
      method: 'GET'
    })
  }

  static async leaveTeam (teamId) {
    return ApiService.request('/teams/' + teamId + '/leave', {
      method: 'DELETE'
    })
  }

  static async removeTeammate (teamId, userId) {
    return ApiService.request('/teams/' + teamId + '/remove-teammate/' + userId, {
      method: 'DELETE'
    })
  }

  static async deleteTeam (teamId) {
    return ApiService.request('/teams/' + teamId, {
      method: 'DELETE'
    })
  }

  static async joinTeamByInvite (inviteCode) {
    return ApiService.request('/invite/' + inviteCode, {
      method: 'GET'
    })
      .then(res => res.data)
  }

  /* Scrims */

  static async getAllScrims () {
    return ApiService.request('/scrims', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async addScrim (data) {
    return ApiService.request('/scrims', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async leaveScrim () {
    return ApiService.request('/scrims/leave', {
      method: 'GET'
    })
  }

  static async sendScrimRequest (scrimId, fromScrimId) {
    return ApiService.request('/scrims/' + scrimId + '/request', {
      method: 'POST',
      data: {
        fromScrimId
      }
    })
      .then(res => res.data)
  }

  static async acceptScrimRequest (requestId) {
    return ApiService.request('/scrims/request/' + requestId + '/accept', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  /* Users */

  static async searchUsers (q, params) {
    return ApiService.request('/user/search', {
      method: 'GET',
      params: {
        q,
        ...params
      }
    })
      .then(res => res.data)
  }

  /* Notifications */

  static async notifications () {
    return ApiService.request('/notifications', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async readNotifications () {
    return ApiService.request('/notifications/read', {
      method: 'GET'
    })
  }

  /* Match */

  static async getCompletedMatches () {
    return ApiService.request('/match', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async getMatch (id) {
    return ApiService.request('/match/' + id, {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async addMatchScore (data) {
    return ApiService.request('/match/score', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async getMatchScore (id) {
    return ApiService.request('/match/score/' + id, {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async acceptMatchScore (id) {
    return ApiService.request('/match/score/' + id + '/accept', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async rejectMatchScore (id) {
    return ApiService.request('/match/score/' + id + '/reject', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async getMatchMessages (id) {
    return ApiService.request('/match/' + id + '/messages', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async postMatchMessage (matchId, data) {
    return ApiService.request('/match/' + matchId + '/messages', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  /* Wallet */

  static async getWallet () {
    return ApiService.request('/wallet', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async createWallet (data) {
    return ApiService.request('/wallet/create', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async verifyWallet (data) {
    return ApiService.request('/wallet/verify', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async getPayoutLink () {
    return ApiService.request('/wallet/payout', {
      method: 'GET'
    })
      .then(res => res.data.link)
  }

  static async getRefillLink () {
    return ApiService.request('/wallet/refill', {
      method: 'GET'
    })
      .then(res => res.data.link)
  }

  /* Tournaments */
  static async getTournaments (query) {
    return ApiService.request('/tournaments', {
      method: 'GET',
      params: query
    })
      .then(res => res.data)
  }

  static async getTournament (id) {
    return ApiService.request(`/tournaments/${id}`, {
      method: 'GET'
    })
      .then(res => res.data)
  }
  
  static async registerInTournament (id, data) {
    return ApiService.request(`/tournaments/${id}/register`, {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async getTournamentStatus (id) {
    return ApiService.request(`/tournaments/${id}/status`, {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async payTournament (id, data) {
    return ApiService.request(`/tournaments/${id}/pay`, {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async payTournamentForFriend (userId, tournamentId, amount) {
    return ApiService.request(`/tournaments/${tournamentId}/pay`, {
      method: 'POST',
      data: {
        userId,
        amount
      }
    })
      .then(res => res.data)
  }

  static async getTournamentMatch (id) {
    return ApiService.request(`/tournaments/${id}/match`, {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async getTournamentParticipant (id) {
    return ApiService.request(`/tournaments/${id}/participant`, {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async getTournamentParticipants (id) {
    return ApiService.request(`/tournaments/${id}/participants`, {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async reportTournamentMatch (id, data) {
    return ApiService.request(`/tournaments/${id}/report`, {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async getTournamentMessages (id) {
    return ApiService.request('/tournaments/match/' + id + '/messages', {
      method: 'GET'
    })
      .then(res => res.data)
  }

  static async createTournamentMessage (matchId, data) {
    return ApiService.request('/tournaments/match/' + matchId + '/messages', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  /**
   * Membership
   */
  static async membershipCreateCheckout (priceId) {
    return ApiService.request('/membership/create-checkout', {
      method: 'POST',
      data: {
        priceId
      }
    })
      .then(res => res.data)
  }

  static async membershipCreatePortal (data) {
    return ApiService.request('/membership/create-portal', {
      method: 'POST',
      data
    })
      .then(res => res.data)
  }

  static async membershipMySubscription () {
    return ApiService.request('/membership/my-subscription', {
      method: 'GET'
    })
      .then(res => res.data)
  }
}
