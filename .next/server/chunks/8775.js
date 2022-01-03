"use strict";
exports.id = 8775;
exports.ids = [8775];
exports.modules = {

/***/ 8775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TeamCardMatch)
});

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "beautiful-react-hooks"
var external_beautiful_react_hooks_ = __webpack_require__(1767);
// EXTERNAL MODULE: ./components/ui/button/index.js + 3 modules
var ui_button = __webpack_require__(4658);
// EXTERNAL MODULE: ./containers/modal-chat-rules.js
var modal_chat_rules = __webpack_require__(674);
// EXTERNAL MODULE: ./helpers/api-service.js
var api_service = __webpack_require__(2982);
// EXTERNAL MODULE: ./hooks/use-lock-body-scroll.js
var use_lock_body_scroll = __webpack_require__(714);
// EXTERNAL MODULE: ./hooks/use-portal.js + 1 modules
var use_portal = __webpack_require__(4556);
// EXTERNAL MODULE: ./icons/close.js
var icons_close = __webpack_require__(7321);
// EXTERNAL MODULE: ./icons/paper-plane-tilt.js
var paper_plane_tilt = __webpack_require__(455);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(2268);
// EXTERNAL MODULE: ./components/online-chat/online-chat-message.js
var online_chat_message = __webpack_require__(5686);
// EXTERNAL MODULE: ./hooks/use-socket.js
var use_socket = __webpack_require__(6998);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/online-chat/online-chat.js
















function OnlineChat({
  className,
  matchId,
  isVisible = true,
  onToggleVisible = f => f
}) {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: messages,
    1: setMessages
  } = (0,external_react_.useState)([]);
  const {
    0: showRules,
    1: setShowRules
  } = (0,external_react_.useState)(false);
  const isSmallDevice = (0,external_beautiful_react_hooks_.useMediaQuery)('(max-width: 1279px)');
  const io = (0,use_socket/* default */.Z)();
  const el = (0,use_portal/* default */.Z)('online-chat');
  const classes = external_clsx_default()('online-chat', {
    'online-chat--visible': isVisible
  }, className);
  (0,external_react_.useEffect)(() => {
    api_service/* default.getMatchMessages */.Z.getMatchMessages(matchId).then(setMessages);
    const matchMessagesId = `match_messages:${matchId}`;
    io.on(matchMessagesId, res => {
      if (res.action === 'NEW') {
        setMessages([...messages, res.payload]);
      }
    });
    return () => {
      io.off(matchMessagesId);
    };
  }, []);
  (0,use_lock_body_scroll/* default */.Z)(isSmallDevice && isVisible);

  const handleClickRules = event => {
    event.stopPropagation();
    setShowRules(!showRules);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formData = new window.FormData(form);
    const message = formData.get('message');
    setIsLoading(true);
    api_service/* default.postMatchMessage */.Z.postMatchMessage(matchId, {
      message
    }).then(resultData => {
      // setMessages([
      //   ...messages,
      //   resultData
      // ])
      form.reset();
    }).finally(() => setIsLoading(false));
  };

  if (!el) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showRules && /*#__PURE__*/jsx_runtime_.jsx(modal_chat_rules/* default */.Z, {
      onClose: () => setShowRules(false)
    }), /*#__PURE__*/(0,external_react_dom_.createPortal)( /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes,
      children: [isVisible && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "online-chat__bg",
        onClick: onToggleVisible
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "online-chat__content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
          className: "online-chat__header",
          onClick: onToggleVisible,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-gray-500 uppercase",
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              className: "text-white",
              children: "online"
            }), " chat"]
          }), isVisible && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              onClick: handleClickRules,
              size: "x-small",
              type: "secondary",
              outlined: true,
              children: "Chat rules"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              onClick: onToggleVisible,
              className: "online-chat__header-close",
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_close/* default */.Z, {
                size: 24
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "online-chat__messages custom-scroll",
          children: messages.length > 0 && messages.map(({
            id,
            createdAt,
            user,
            message
          }) => /*#__PURE__*/jsx_runtime_.jsx(online_chat_message/* default */.Z, {
            user: user,
            createdAt: createdAt,
            children: message
          }, id))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "online-chat__write",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            onSubmit: handleSubmit,
            className: "flex justify-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              name: "message",
              className: "flex-1",
              placeholder: "Start typing...",
              disabled: isLoading,
              required: true
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              disabled: isLoading,
              className: "online-chat__submit",
              children: /*#__PURE__*/jsx_runtime_.jsx(paper_plane_tilt/* default */.Z, {
                size: 24
              })
            })]
          })
        })]
      })]
    }), el)]
  });
}
// EXTERNAL MODULE: ./components/ui/rank-division/index.js + 1 modules
var rank_division = __webpack_require__(8833);
;// CONCATENATED MODULE: ./components/team/team-match-result.js
const _excluded = ["teamA", "teamB", "score", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const TeamItem = ({
  team
}) => {
  var _team$logo;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center flex-col",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-[70px] h-[70px]",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: (_team$logo = team.logo) !== null && _team$logo !== void 0 ? _team$logo : '/assets/images/agent-default.svg',
        alt: ""
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "font-semibold text-white",
      children: team.name
    }), /*#__PURE__*/jsx_runtime_.jsx(rank_division/* default */.Z, {
      className: "mt-1",
      size: "small",
      division: team.division
    })]
  });
};

function TeamMatchResult(_ref) {
  let {
    teamA,
    teamB,
    score = [0, 0],
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const classes = external_clsx_default()('team-match-result', className);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
      className: classes
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TeamItem, {
        team: teamA
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "team-card-match-mini__score",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: score[0] >= score[1] ? 'text-success-500' : 'text-primary-500',
          children: score[0]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: ":"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: score[1] >= score[0] ? 'text-success-500' : 'text-primary-500',
          children: score[1]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(TeamItem, {
        team: teamB
      })]
    }))
  });
}
// EXTERNAL MODULE: ./components/ui/modal/index.js + 4 modules
var modal = __webpack_require__(9214);
// EXTERNAL MODULE: ./icons/game-controller.js
var game_controller = __webpack_require__(9031);
// EXTERNAL MODULE: ./components/ui/message/message.js
var message = __webpack_require__(2087);
// EXTERNAL MODULE: ./hooks/use-auth.js
var use_auth = __webpack_require__(7068);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./containers/modal-finalize-match.js
const modal_finalize_match_excluded = ["match", "score", "onClose", "onCompleted"];

function modal_finalize_match_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_finalize_match_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_finalize_match_ownKeys(Object(source), true).forEach(function (key) { modal_finalize_match_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_finalize_match_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_finalize_match_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_finalize_match_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_finalize_match_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_finalize_match_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const getFromTeamId = (userId, teamA, teamB) => {
  if (teamA.players.find(item => item.userId === userId)) {
    return teamA.id;
  }

  if (teamB.players.find(item => item.userId === userId)) {
    return teamB.id;
  }

  return null;
};

const getToTeamId = (userId, teamA, teamB) => {
  if (!teamA.players.find(item => item.userId === userId)) {
    return teamA.id;
  }

  if (!teamB.players.find(item => item.userId === userId)) {
    return teamB.id;
  }

  return null;
};

function ModalFinalizeMatch(_ref) {
  let {
    match,
    score,
    onClose = f => f,
    onCompleted = f => f
  } = _ref,
      props = modal_finalize_match_objectWithoutProperties(_ref, modal_finalize_match_excluded);

  const queryClient = (0,external_react_query_.useQueryClient)();
  const {
    0: status,
    1: setStatus
  } = (0,external_react_.useState)(null);
  const {
    0: scoreId,
    1: setScoreId
  } = (0,external_react_.useState)(null);
  const {
    0: timeoutSeconds,
    1: setTimeoutSeconds
  } = (0,external_react_.useState)(0);
  const {
    user
  } = (0,use_auth/* useAuth */.a)();
  const {
    data: scoreData
  } = (0,external_react_query_.useQuery)('score', () => api_service/* default.getMatchScore */.Z.getMatchScore(scoreId), {
    cacheTime: 0,
    retry: false,
    refetchInterval: 1000,
    enabled: !!scoreId
  });

  const refetchMatch = async () => {
    return queryClient.refetchQueries(['match', {
      id: match.id
    }]);
  };

  const handleFinalize = async () => {
    setStatus('waiting');
    setTimeoutSeconds(120);
    api_service/* default.addMatchScore */.Z.addMatchScore({
      matchId: match.id,
      fromTeamId: getFromTeamId(user.id, match.teamA, match.teamB),
      toTeamId: getToTeamId(user.id, match.teamA, match.teamB),
      score: {
        teamA: score[0],
        teamB: score[1]
      }
    }).then(data => {
      setScoreId(data.id);
    });
  };

  (0,external_react_.useEffect)(() => {
    if (!(scoreData !== null && scoreData !== void 0 && scoreData.status) || scoreData.status === 'waiting' || scoreId === null) {
      return;
    }

    if (scoreData.status === 'accepted') {
      refetchMatch();
    }

    setScoreId(null);
    setStatus(scoreData.status);
    setTimeoutSeconds(0);
  }, [scoreData]);
  (0,external_react_.useEffect)(() => {
    if (!timeoutSeconds || timeoutSeconds <= 0) {
      setScoreId(null);
      return;
    }

    setTimeout(() => setTimeoutSeconds(timeoutSeconds - 1), 1000);
  }, [timeoutSeconds]);

  const handleClose = () => {
    if (status === 'waiting') {
      return;
    }

    onClose();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default */.Z, modal_finalize_match_objectSpread(modal_finalize_match_objectSpread({
    width: 600,
    onClose: handleClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(game_controller/* default */.Z, {
        size: 16
      }),
      iconClass: "text-primary-500",
      title: "Are you sure you want to finalize the match?",
      description: "Final result of match is:",
      className: "mb-[18px]"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default.Body */.Z.Body, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TeamMatchResult, {
        teamA: match.teamA,
        teamB: match.teamB,
        score: score
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-4 text-white text-center",
        children: [status === 'waiting' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(message/* default */.Z, {
          className: "mt-4",
          children: ["Wait for a response from your opponent. (", timeoutSeconds, ")"]
        }), status === 'rejected' && /*#__PURE__*/jsx_runtime_.jsx(message/* default */.Z, {
          type: "error",
          className: "mt-4",
          children: "Your opponent does not agree with the result of the match. You can discuss all your disagreements in the chat room."
        }), status === 'accepted' && /*#__PURE__*/jsx_runtime_.jsx(message/* default */.Z, {
          type: "success",
          className: "mt-4",
          children: "The match is successfully completed"
        })]
      })]
    }), (!status || status === 'waiting') && /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default.Footer */.Z.Footer, {
      className: "justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: onClose,
        outlined: true,
        disabled: status === 'waiting',
        children: "Cancel"
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        shined: true,
        onClick: handleFinalize,
        loading: status === 'waiting',
        children: "yes, finalize the match"
      })]
    }), (status === 'rejected' || status === 'accepted') && /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Footer */.Z.Footer, {
      className: "justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        shined: true,
        onClick: onClose,
        children: "Back to the match"
      })
    })]
  }));
}
;// CONCATENATED MODULE: ./containers/modal-leaving-match.js
const modal_leaving_match_excluded = ["onClose"];

function modal_leaving_match_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_leaving_match_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_leaving_match_ownKeys(Object(source), true).forEach(function (key) { modal_leaving_match_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_leaving_match_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_leaving_match_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_leaving_match_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_leaving_match_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_leaving_match_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function ModalLeavingMatch(_ref) {
  let {
    onClose = f => f
  } = _ref,
      props = modal_leaving_match_objectWithoutProperties(_ref, modal_leaving_match_excluded);

  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);

  const handleRemove = () => {
    setIsLoading(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default */.Z, modal_leaving_match_objectSpread(modal_leaving_match_objectSpread({
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(game_controller/* default */.Z, {
        size: 16
      }),
      iconClass: "text-primary-500",
      title: "Leaving Match",
      description: "Are you sure that you want to leave match? If you leave match [description of leaving match consequences]",
      className: "mb-[18px]"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default.Footer */.Z.Footer, {
      className: "justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: onClose,
        outlined: true,
        children: "Cancel"
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        shined: true,
        onClick: handleRemove,
        loading: isLoading,
        children: "Leave match"
      })]
    })]
  }));
}
// EXTERNAL MODULE: ./icons/crosshair.js
var crosshair = __webpack_require__(1116);
;// CONCATENATED MODULE: ./containers/modal-match-rules.js
const modal_match_rules_excluded = ["onClose"];

function modal_match_rules_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_match_rules_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_match_rules_ownKeys(Object(source), true).forEach(function (key) { modal_match_rules_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_match_rules_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_match_rules_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_match_rules_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_match_rules_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_match_rules_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ModalMatchRules(_ref) {
  let {
    onClose = f => f
  } = _ref,
      props = modal_match_rules_objectWithoutProperties(_ref, modal_match_rules_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default */.Z, modal_match_rules_objectSpread(modal_match_rules_objectSpread({
    width: 600,
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(crosshair/* default */.Z, {
        size: 18
      }),
      iconClass: "text-primary-500",
      title: "Match Rules",
      description: "Please, be sure that you read match rules before its start!"
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Body */.Z.Body, {
      className: "whitespace-pre-line text-gray-500",
      children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis congue ex, sed facilisis libero molestie sit amet. Nam massa ex, pharetra ac rutrum in, rutrum eget elit. Aliquam erat volutpat. Donec quis enim erat. Etiam a faucibus ipsum. In non mattis est, ac maximus arcu. Maecenas quis vestibulum massa. Nunc augue magna, dapibus et odio sit amet, volutpat dapibus lorem.
        
          Nunc mattis ante sed nulla vehicula semper. Proin et ex a justo lacinia sodales ac ac dolor. Sed dictum non diam sed semper. Nulla in sem feugiat, finibus nunc quis, lobortis elit. Vestibulum vehicula, sapien vel consequat ultricies, lorem tortor malesuada nunc, vitae pretium dui nisl eget nisi. Morbi tempus dictum quam vitae pulvinar.`
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Footer */.Z.Footer, {
      className: "justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: onClose,
        outlined: true,
        children: "Close"
      })
    })]
  }));
}
// EXTERNAL MODULE: ./components/ui/input/index.js + 6 modules
var input = __webpack_require__(2381);
// EXTERNAL MODULE: ./components/ui/radio/index.js + 2 modules
var ui_radio = __webpack_require__(9007);
;// CONCATENATED MODULE: ./icons/question.js
const question_excluded = ["size"];

function question_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function question_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { question_ownKeys(Object(source), true).forEach(function (key) { question_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { question_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function question_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function question_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = question_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function question_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconQuestion(_ref) {
  let {
    size = 14
  } = _ref,
      props = question_objectWithoutProperties(_ref, question_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", question_objectSpread(question_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.219",
      d: "M8 14A6 6 0 108 2a6 6 0 000 12z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.219",
      d: "M8 9v-.5a2 2 0 10-2-2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.219",
      d: "M8 12.5a1 1 0 100-2 1 1 0 000 2z"
    })]
  }));
}
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
;// CONCATENATED MODULE: ./containers/modal-report-problem.js
const modal_report_problem_excluded = ["title", "description", "onClose"];

function modal_report_problem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_report_problem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_report_problem_ownKeys(Object(source), true).forEach(function (key) { modal_report_problem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_report_problem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_report_problem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_report_problem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_report_problem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_report_problem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function ModalReportProblem(_ref) {
  let {
    title,
    description,
    onClose = f => f
  } = _ref,
      props = modal_report_problem_objectWithoutProperties(_ref, modal_report_problem_excluded);

  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)();
  const problemValue = watch('problem');

  const onSubmit = data => {
    setIsLoading(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default */.Z, modal_report_problem_objectSpread(modal_report_problem_objectSpread({
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(IconQuestion, {
        size: 16
      }),
      iconClass: "text-primary-500",
      title: "Report a Problem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula sem ut vehicula feugiat."
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Body */.Z.Body, {
      children: /*#__PURE__*/jsx_runtime_.jsx("form", {
        id: "form-report-problem",
        onSubmit: handleSubmit(onSubmit),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col gap-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx(ui_radio/* default */.Z, modal_report_problem_objectSpread(modal_report_problem_objectSpread({}, register('problem')), {}, {
            value: "1",
            children: "Oponent didn\u2019t show up"
          })), /*#__PURE__*/jsx_runtime_.jsx(ui_radio/* default */.Z, modal_report_problem_objectSpread(modal_report_problem_objectSpread({}, register('problem')), {}, {
            value: "2",
            children: "Opponent is taking too long"
          })), /*#__PURE__*/jsx_runtime_.jsx(ui_radio/* default */.Z, modal_report_problem_objectSpread(modal_report_problem_objectSpread({}, register('problem')), {}, {
            value: "3",
            children: "Opponent is being offensive"
          })), /*#__PURE__*/jsx_runtime_.jsx(ui_radio/* default */.Z, modal_report_problem_objectSpread(modal_report_problem_objectSpread({}, register('problem')), {}, {
            value: "other",
            children: "Other"
          })), problemValue === 'other' && /*#__PURE__*/jsx_runtime_.jsx(input/* default.Textarea */.Z.Textarea, {
            name: "other",
            placeholder: "Please, describe the problem"
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default.Footer */.Z.Footer, {
      className: "justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: onClose,
        outlined: true,
        children: "Cancel"
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        shined: true,
        form: "form-report-problem",
        htmlType: "submit",
        loading: isLoading,
        children: "report a problem"
      })]
    })]
  }));
}
// EXTERNAL MODULE: ./containers/modal-team-info.js
var modal_team_info = __webpack_require__(7468);
;// CONCATENATED MODULE: ./containers/modal-team-requests.js
const modal_team_requests_excluded = ["specialRequests", "onClose"];

function modal_team_requests_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_team_requests_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_team_requests_ownKeys(Object(source), true).forEach(function (key) { modal_team_requests_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_team_requests_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_team_requests_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_team_requests_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_team_requests_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_team_requests_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ModalTeamRequests(_ref) {
  let {
    specialRequests = null,
    onClose = f => f
  } = _ref,
      props = modal_team_requests_objectWithoutProperties(_ref, modal_team_requests_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default */.Z, modal_team_requests_objectSpread(modal_team_requests_objectSpread({
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(crosshair/* default */.Z, {
        size: 18
      }),
      iconClass: "text-primary-500",
      title: "Team Requests",
      description: specialRequests,
      className: "mb-[18px]"
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Footer */.Z.Footer, {
      className: "justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: onClose,
        outlined: true,
        children: "Close"
      })
    })]
  }));
}
// EXTERNAL MODULE: ./icons/arrow-left.js
var arrow_left = __webpack_require__(2515);
;// CONCATENATED MODULE: ./icons/chat-circle-dots.js
const chat_circle_dots_excluded = ["size"];

function chat_circle_dots_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function chat_circle_dots_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { chat_circle_dots_ownKeys(Object(source), true).forEach(function (key) { chat_circle_dots_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { chat_circle_dots_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function chat_circle_dots_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function chat_circle_dots_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = chat_circle_dots_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function chat_circle_dots_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconChatCircleDots(_ref) {
  let {
    size = 14
  } = _ref,
      props = chat_circle_dots_objectWithoutProperties(_ref, chat_circle_dots_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", chat_circle_dots_objectSpread(chat_circle_dots_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 32 32"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M5.679 22.125a11.995 11.995 0 114.196 4.197h0l-4.144 1.184a1 1 0 01-1.236-1.237l1.184-4.144h0z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "currentColor",
      d: "M16 18a2 2 0 100-4 2 2 0 000 4zM22 18a2 2 0 100-4 2 2 0 000 4zM10 18a2 2 0 100-4 2 2 0 000 4z"
    })]
  }));
}
;// CONCATENATED MODULE: ./icons/flag.js
const flag_excluded = ["size"];

function flag_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function flag_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { flag_ownKeys(Object(source), true).forEach(function (key) { flag_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { flag_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function flag_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function flag_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = flag_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function flag_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconFlag(_ref) {
  let {
    size = 14
  } = _ref,
      props = flag_objectWithoutProperties(_ref, flag_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("svg", flag_objectSpread(flag_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 32 32"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 27V6M5 21c8-6 14 6 22 0V6c-8 6-14-6-22 0"
    })
  }));
}
// EXTERNAL MODULE: ./icons/minus.js
var minus = __webpack_require__(8666);
// EXTERNAL MODULE: ./icons/plus.js
var plus = __webpack_require__(9061);
// EXTERNAL MODULE: ./components/team/team-avatars.js
var team_avatars = __webpack_require__(4116);
// EXTERNAL MODULE: ./components/ui/message/index.js
var ui_message = __webpack_require__(325);
;// CONCATENATED MODULE: ./containers/modal-finalize-match-confirm.js
const modal_finalize_match_confirm_excluded = ["data", "match", "onClose", "onCompleted"];

function modal_finalize_match_confirm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_finalize_match_confirm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_finalize_match_confirm_ownKeys(Object(source), true).forEach(function (key) { modal_finalize_match_confirm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_finalize_match_confirm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_finalize_match_confirm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_finalize_match_confirm_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_finalize_match_confirm_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_finalize_match_confirm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function ModalFinalizeMatchConfirm(_ref) {
  let {
    data,
    match,
    onClose = f => f,
    onCompleted = f => f
  } = _ref,
      props = modal_finalize_match_confirm_objectWithoutProperties(_ref, modal_finalize_match_confirm_excluded);

  const queryClient = (0,external_react_query_.useQueryClient)();
  const {
    mutateAsync: asyncAccept,
    isLoading: isLoadingAccept
  } = (0,external_react_query_.useMutation)(() => api_service/* default.acceptMatchScore */.Z.acceptMatchScore(data.id));
  const {
    mutateAsync: asyncReject,
    isLoading: isLoadingReject
  } = (0,external_react_query_.useMutation)(() => api_service/* default.rejectMatchScore */.Z.rejectMatchScore(data.id));

  const refetchMatch = async () => {
    return queryClient.refetchQueries(['match', {
      id: data.matchId
    }]);
  };

  const handleAccept = async () => {
    asyncAccept().then(() => {
      refetchMatch();
      onClose();
    });
  };

  const handleReject = async () => {
    asyncReject().then(() => {
      onClose();
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default */.Z, modal_finalize_match_confirm_objectSpread(modal_finalize_match_confirm_objectSpread({
    width: 600,
    onClose: handleReject,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(game_controller/* default */.Z, {
        size: 16
      }),
      iconClass: "text-primary-500",
      title: "Request to end a match",
      description: "If you agree with the results of the match click accept or reject otherwise",
      className: "mb-[18px]"
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Body */.Z.Body, {
      children: /*#__PURE__*/jsx_runtime_.jsx(TeamMatchResult, {
        teamA: match.teamA,
        teamB: match.teamB,
        score: [data.score.teamA, data.score.teamB]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default.Footer */.Z.Footer, {
      className: "justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: handleReject,
        outlined: true,
        disabled: isLoadingAccept,
        loading: isLoadingReject,
        children: "Reject"
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        shined: true,
        onClick: handleAccept,
        loading: isLoadingAccept,
        disabled: isLoadingReject,
        children: "Accept"
      })]
    })]
  }));
}
;// CONCATENATED MODULE: ./components/team/team-card-match.js
const team_card_match_excluded = ["team", "onClickRequests", "className", "specialRequests"],
      _excluded2 = ["matchStatus", "onChange", "initialValue", "className"],
      _excluded3 = ["match", "className"];

function team_card_match_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function team_card_match_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { team_card_match_ownKeys(Object(source), true).forEach(function (key) { team_card_match_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { team_card_match_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function team_card_match_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function team_card_match_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = team_card_match_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function team_card_match_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

























const team_card_match_TeamItem = _ref => {
  var _team$logo;

  let {
    team,
    onClickRequests,
    className,
    specialRequests = null
  } = _ref,
      props = team_card_match_objectWithoutProperties(_ref, team_card_match_excluded);

  const {
    0: showInfo,
    1: setShowInfo
  } = (0,external_react_.useState)(false);
  const {
    0: showModalTeamRequests,
    1: setShowModalTeamRequests
  } = (0,external_react_.useState)(false);
  const classes = external_clsx_default()('team-card-match__team space-y-2', className);

  const handleClickRequests = () => {
    setShowModalTeamRequests(true);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showModalTeamRequests && /*#__PURE__*/jsx_runtime_.jsx(ModalTeamRequests, {
      specialRequests: specialRequests,
      onClose: () => setShowModalTeamRequests(false)
    }), showInfo && /*#__PURE__*/jsx_runtime_.jsx(modal_team_info/* default */.Z, {
      team: team,
      onClose: () => setShowInfo(false)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", team_card_match_objectSpread(team_card_match_objectSpread({
      className: classes
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-[100px] h-[100px]",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (_team$logo = team.logo) !== null && _team$logo !== void 0 ? _team$logo : '/assets/images/agent-default.svg',
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: () => setShowInfo(true),
        className: "font-semibold cursor-pointer text-white text-xl text-center",
        children: team.name
      }), /*#__PURE__*/jsx_runtime_.jsx(rank_division/* default */.Z, {
        division: team.division
      }), /*#__PURE__*/jsx_runtime_.jsx(team_avatars/* default */.Z, {
        users: team.players
      }), specialRequests ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: handleClickRequests,
        className: "text-success-500 text-sm cursor-pointer",
        children: "see requests"
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "italic text-sm text-[#868698]",
        children: "no requests"
      })]
    }))]
  });
};

const MatchScore = _ref2 => {
  let {
    matchStatus,
    onChange,
    initialValue,
    className
  } = _ref2,
      props = team_card_match_objectWithoutProperties(_ref2, _excluded2);

  const classes = external_clsx_default()('team-card-match__result', className);
  const {
    0: score,
    1: setScore
  } = (0,external_react_.useState)(initialValue);

  const handleChange = (index, val) => () => {
    const newValue = score[index] + val;

    if (newValue < 0 || newValue > 10) {
      return;
    }

    const updated = [...score];
    updated[index] = newValue;
    setScore(updated);

    if (onChange) {
      onChange(updated);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", team_card_match_objectSpread(team_card_match_objectSpread({
      className: classes
    }, props), {}, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "team-card-match__score",
        children: [matchStatus === 'active' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "team-card-match__score-inc",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              onClick: handleChange(0, 1),
              className: "px-4",
              size: "small",
              type: "accent",
              children: /*#__PURE__*/jsx_runtime_.jsx(plus/* default */.Z, {})
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "team-card-match__score-dec",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              onClick: handleChange(0, -1),
              className: "px-4",
              size: "small",
              type: "secondary",
              children: /*#__PURE__*/jsx_runtime_.jsx(minus/* default */.Z, {})
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "team-card-match__score-val",
          children: score[0]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "team-card-match__score-sep",
        children: ":"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "team-card-match__score",
        children: [matchStatus === 'active' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "team-card-match__score-inc",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              onClick: handleChange(1, 1),
              className: "px-4",
              size: "small",
              type: "accent",
              children: /*#__PURE__*/jsx_runtime_.jsx(plus/* default */.Z, {})
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "team-card-match__score-dec",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              onClick: handleChange(1, -1),
              className: "px-4",
              size: "small",
              type: "secondary",
              children: /*#__PURE__*/jsx_runtime_.jsx(minus/* default */.Z, {})
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "team-card-match__score-val",
          children: score[1]
        })]
      })]
    }))
  });
};

function TeamCardMatch(_ref3) {
  var _match$score$teamA, _match$score, _match$score$teamB, _match$score2;

  let {
    match,
    className
  } = _ref3,
      props = team_card_match_objectWithoutProperties(_ref3, _excluded3);

  const {
    0: showModalMatchRules,
    1: setShowMatchRules
  } = (0,external_react_.useState)(false);
  const {
    0: showModalLeavingMatch,
    1: setShowModalLeavingMatch
  } = (0,external_react_.useState)(false);
  const {
    0: showModalFinalizeMatch,
    1: setShowModalFinalizeMatch
  } = (0,external_react_.useState)(false);
  const {
    0: scoreConfirmData,
    1: setScoreConfirmData
  } = (0,external_react_.useState)(null);
  const {
    0: showModalReportProblem,
    1: setShowModalReportProblem
  } = (0,external_react_.useState)(false);
  const {
    0: visibleChat,
    1: setVisibleChat
  } = (0,external_react_.useState)(false);
  const {
    status: matchStatus,
    teamA,
    teamB,
    specialRequests
  } = match;
  const classes = external_clsx_default()('team-card-match', className);
  const {
    0: score,
    1: setScore
  } = (0,external_react_.useState)([(_match$score$teamA = (_match$score = match.score) === null || _match$score === void 0 ? void 0 : _match$score.teamA) !== null && _match$score$teamA !== void 0 ? _match$score$teamA : 0, (_match$score$teamB = (_match$score2 = match.score) === null || _match$score2 === void 0 ? void 0 : _match$score2.teamB) !== null && _match$score$teamB !== void 0 ? _match$score$teamB : 0]);
  const io = (0,use_socket/* default */.Z)();
  (0,external_react_.useEffect)(() => {
    io.on('finalize_match', res => {
      if (res.action === 'REQUEST') {
        setScoreConfirmData(res.payload);
      }
    });
    return () => {
      io.off('finalize_match');
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showModalMatchRules && /*#__PURE__*/jsx_runtime_.jsx(ModalMatchRules, {
      onClose: () => setShowMatchRules(false)
    }), showModalLeavingMatch && /*#__PURE__*/jsx_runtime_.jsx(ModalLeavingMatch, {
      onClose: () => setShowModalLeavingMatch(false)
    }), scoreConfirmData && /*#__PURE__*/jsx_runtime_.jsx(ModalFinalizeMatchConfirm, {
      data: scoreConfirmData,
      match: match,
      onClose: () => setScoreConfirmData(null)
    }), showModalFinalizeMatch && /*#__PURE__*/jsx_runtime_.jsx(ModalFinalizeMatch, {
      match: match,
      score: score,
      onClose: () => setShowModalFinalizeMatch(false)
    }), showModalReportProblem && /*#__PURE__*/jsx_runtime_.jsx(ModalReportProblem, {
      onClose: () => setShowModalReportProblem(false)
    }), /*#__PURE__*/jsx_runtime_.jsx(OnlineChat, {
      matchId: match.id,
      isVisible: visibleChat,
      onToggleVisible: () => setVisibleChat(!visibleChat)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", team_card_match_objectSpread(team_card_match_objectSpread({
      className: classes
    }, props), {}, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `flex  ${matchStatus === 'active' ? 'justify-between' : 'justify-center'} items-center flex-wrap`,
        children: [matchStatus === 'active' && /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default.Link */.Z.Link, {
          onClick: () => setShowModalLeavingMatch(true),
          icon: /*#__PURE__*/jsx_runtime_.jsx(arrow_left/* default */.Z, {
            size: 14
          }),
          size: "small",
          type: "secondary",
          children: "Leave the match"
        }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          onClick: () => setShowMatchRules(true),
          size: "small",
          type: "secondary",
          className: external_clsx_default()('order-1 w-full md:order-none md:w-auto', {
            'mt-4 md:mt-0': matchStatus === 'active'
          }),
          outlined: true,
          children: "Match Rules"
        }), matchStatus === 'active' && /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default.Link */.Z.Link, {
          onClick: () => setShowModalReportProblem(true),
          icon: /*#__PURE__*/jsx_runtime_.jsx(IconFlag, {}),
          size: "small",
          type: "secondary",
          children: "Report the problem"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-8 flex justify-around items-center flex-wrap",
        children: [/*#__PURE__*/jsx_runtime_.jsx(team_card_match_TeamItem, {
          className: "flex-1 md:flex-auto",
          team: teamA,
          specialRequests: specialRequests === null || specialRequests === void 0 ? void 0 : specialRequests.teamA
        }), /*#__PURE__*/jsx_runtime_.jsx(MatchScore, {
          matchStatus: matchStatus,
          className: "order-1 w-full mt-14 md:w-auto md:order-none md:mt-0",
          onChange: setScore,
          initialValue: score
        }), /*#__PURE__*/jsx_runtime_.jsx(team_card_match_TeamItem, {
          className: "flex-1 md:flex-auto",
          team: teamB,
          specialRequests: specialRequests.teamB
        })]
      }), matchStatus === 'completed' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_message/* default */.Z, {
        type: "success",
        className: "mt-4",
        children: ["The match ended with a score of ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          children: [match.score.teamA, " : ", match.score.teamB]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-6 flex flex-col items-center space-y-2",
        children: [matchStatus === 'active' && /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          onClick: () => setShowModalFinalizeMatch(true),
          className: "w-full max-w-[310px]",
          shined: true,
          children: "Finalize match"
        }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          onClick: () => setVisibleChat(!visibleChat),
          className: "w-full max-w-[310px]",
          iconRight: /*#__PURE__*/jsx_runtime_.jsx(IconChatCircleDots, {
            className: "text-success-500",
            size: 18
          }),
          outlined: true,
          children: "online chat"
        })]
      })]
    }))]
  });
}

/***/ })

};
;