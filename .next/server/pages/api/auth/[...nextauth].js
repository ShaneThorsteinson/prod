"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
const providers_namespaceObject = require("next-auth/providers");
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
;// CONCATENATED MODULE: ./helpers/prisma-adapter.js
const _excluded = ["session", "secret"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const PrismaAdapter = prismaQuery => {
  return {
    async getAdapter(_ref) {
      let {
        session,
        secret
      } = _ref,
          appOptions = _objectWithoutProperties(_ref, _excluded);

      const sessionMaxAge = session.maxAge * 1000; // default is 30 days

      const sessionUpdateAge = session.updateAge * 1000; // default is 1 day

      /**
       * @todo Move this to core package
       * @todo Use bcrypt or a more secure method
       */

      const hashToken = token => (0,external_crypto_namespaceObject.createHash)('sha256').update(`${token}${secret}`).digest('hex');

      return {
        displayName: 'PRISMA',

        createUser(profile) {
          var _profile$emailVerifie, _profile$emailVerifie2;

          return prismaQuery({
            model: 'user',
            action: 'create',
            data: {
              name: profile.name,
              email: profile.email,
              image: profile.image,
              emailVerified: (_profile$emailVerifie = (_profile$emailVerifie2 = profile.emailVerified) === null || _profile$emailVerifie2 === void 0 ? void 0 : _profile$emailVerifie2.toISOString()) !== null && _profile$emailVerifie !== void 0 ? _profile$emailVerifie : null
            }
          });
        },

        getUser(id) {
          return prismaQuery({
            model: 'user',
            action: 'findUnique',
            where: {
              id
            }
          });
        },

        getUserByEmail(email) {
          if (!email) return Promise.resolve(null);
          return prismaQuery({
            model: 'user',
            action: 'findUnique',
            where: {
              email
            }
          });
        },

        async getUserByProviderAccountId(providerId, providerAccountId) {
          var _account$user;

          const account = await prismaQuery({
            model: 'account',
            action: 'findUnique',
            where: {
              providerId_providerAccountId: {
                providerId,
                providerAccountId
              }
            },
            select: {
              user: true
            }
          });
          return (_account$user = account === null || account === void 0 ? void 0 : account.user) !== null && _account$user !== void 0 ? _account$user : null;
        },

        updateUser(user) {
          var _user$emailVerified$t, _user$emailVerified;

          return prismaQuery({
            model: 'user',
            action: 'update',
            where: {
              id: user.id
            },
            data: {
              name: user.name,
              email: user.email,
              image: user.image,
              emailVerified: (_user$emailVerified$t = (_user$emailVerified = user.emailVerified) === null || _user$emailVerified === void 0 ? void 0 : _user$emailVerified.toISOString()) !== null && _user$emailVerified$t !== void 0 ? _user$emailVerified$t : null
            }
          });
        },

        async deleteUser(userId) {
          await prismaQuery({
            model: 'user',
            action: 'delete',
            where: {
              id: userId
            }
          });
        },

        async linkAccount(userId, providerId, providerType, providerAccountId, refreshToken, accessToken, accessTokenExpires) {
          await prismaQuery({
            model: 'account',
            action: 'create',
            data: {
              userId,
              providerId,
              providerType,
              providerAccountId,
              refreshToken,
              accessToken,
              accessTokenExpires
            }
          });
        },

        async unlinkAccount(_, providerId, providerAccountId) {
          await prismaQuery({
            model: 'account',
            action: 'delete',
            where: {
              providerId_providerAccountId: {
                providerId,
                providerAccountId
              }
            }
          });
        },

        createSession(user) {
          return prismaQuery({
            model: 'session',
            action: 'create',
            data: {
              userId: user.id,
              expires: new Date(Date.now() + sessionMaxAge),
              sessionToken: (0,external_crypto_namespaceObject.randomBytes)(32).toString('hex'),
              accessToken: (0,external_crypto_namespaceObject.randomBytes)(32).toString('hex')
            }
          });
        },

        async getSession(sessionToken) {
          const session = await prismaQuery({
            model: 'session',
            action: 'findUnique',
            where: {
              sessionToken
            }
          });

          if (session && session.expires < new Date()) {
            await prismaQuery({
              model: 'session',
              action: 'delete',
              where: {
                sessionToken
              }
            });
            return null;
          }

          return session;
        },

        async updateSession(session, force) {
          if (!force && Number(session.expires) - sessionMaxAge + sessionUpdateAge > Date.now()) {
            return null;
          }

          return await prismaQuery({
            model: 'session',
            action: 'update',
            where: {
              id: session.id
            },
            data: {
              expires: new Date(Date.now() + sessionMaxAge)
            }
          });
        },

        async deleteSession(sessionToken) {
          await prismaQuery({
            model: 'session',
            action: 'delete',
            where: {
              sessionToken
            }
          });
        },

        async createVerificationRequest(identifier, url, token, _, provider) {
          await prismaQuery({
            model: 'verificationRequest',
            action: 'create',
            data: {
              identifier,
              token: hashToken(token),
              expires: new Date(Date.now() + provider.maxAge * 1000)
            }
          });
          await provider.sendVerificationRequest({
            identifier,
            url,
            token,
            baseUrl: appOptions.baseUrl,
            provider
          });
        },

        async getVerificationRequest(identifier, token) {
          const hashedToken = hashToken(token);
          const verificationRequest = await prismaQuery({
            model: 'verificationRequest',
            action: 'findUnique',
            where: {
              identifier_token: {
                identifier,
                token: hashedToken
              }
            }
          });

          if (verificationRequest && verificationRequest.expires < new Date()) {
            await prismaQuery({
              model: 'verificationRequest',
              action: 'delete',
              where: {
                identifier_token: {
                  identifier,
                  token: hashedToken
                }
              }
            });
            return null;
          }

          return verificationRequest;
        },

        async deleteVerificationRequest(identifier, token) {
          await prismaQuery({
            model: 'verificationRequest',
            action: 'delete',
            where: {
              identifier_token: {
                identifier,
                token: hashToken(token)
              }
            }
          });
        }

      };
    }

  };
};
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js






async function prismaQuery(data) {
  return external_axios_default().post(`${process.env.API_URL}/prisma`, data).then(res => {
    return res.data;
  }).catch(() => null);
}

async function prismaGetUser(id) {
  return external_axios_default().get(`${process.env.API_URL}/prisma/user/${id}`).then(res => {
    return res.data;
  }).catch(() => null);
}

/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
  providers: [providers_default().Discord({
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET
  }), providers_default().Twitter({
    clientId: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET
  }), providers_default().Credentials({
    name: 'Credentials',
    credentials: {
      email: {
        label: 'Email',
        type: 'text'
      },
      password: {
        label: 'Password',
        type: 'password'
      }
    },

    async authorize(credentials, req) {
      const res = await external_axios_default().post(process.env.API_URL + '/user/signin', credentials);
      const user = res.data;

      if (user) {
        return user;
      }

      return null;
    }

  })],
  adapter: PrismaAdapter(prismaQuery),
  session: {
    jwt: true
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async session(session, token) {
      const user = await prismaGetUser(token.sub);
      token.id = user.id;
      session.user = user;
      session.token = external_jsonwebtoken_default().sign(token, process.env.JWT_SECRET);
      return session;
    },

    async jwt(token, user, account, profile, isNewUser) {
      if (user !== null && user !== void 0 && user.role) {
        token.role = user.role;
      }

      if (user !== null && user !== void 0 && user.timezone) {
        token.timezone = user.timezone;
      }

      return token;
    }

  },
  debug: true
}));

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(874));
module.exports = __webpack_exports__;

})();