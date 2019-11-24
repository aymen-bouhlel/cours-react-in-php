(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts"],{

/***/ "./assets/js/posts.js":
/*!****************************!*\
  !*** ./assets/js/posts.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log("kikoo Youtube");

var LikeButton =
/*#__PURE__*/
function (_React$Component) {
  "use strict";

  _inherits(LikeButton, _React$Component);

  function LikeButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LikeButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LikeButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      likes: _this.props.likes || 0,
      isLiked: _this.props.isLiked || false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var isLiked = _this.state.isLiked;
      var likes = _this.state.likes + (isLiked ? -1 : 1);

      _this.setState({
        likes: likes,
        isLiked: !isLiked
      });
    });

    return _this;
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      return React.createElement("button", {
        className: "btn btn-link",
        onClick: this.handleClick
      }, this.state.likes, " ", React.createElement("i", {
        className: this.state.isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"
      }), " ", this.state.isLiked ? "Je n'aime plus !" : "J'aime !");
    }
  }]);

  return LikeButton;
}(React.Component);

document.querySelectorAll('span.react-like').forEach(function (span) {
  ReactDOM.render(React.createElement(LikeButton), span);
});

/***/ })

},[["./assets/js/posts.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9zdHMuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkxpa2VCdXR0b24iLCJsaWtlcyIsInByb3BzIiwiaXNMaWtlZCIsInN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNwYW4iLCJSZWFjdERPTSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7O0lBR01DLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzREQUNNO0FBQ0pDLFdBQUssRUFBRSxNQUFLQyxLQUFMLENBQVdELEtBQVgsSUFBb0IsQ0FEdkI7QUFFSkUsYUFBTyxFQUFFLE1BQUtELEtBQUwsQ0FBV0MsT0FBWCxJQUFzQjtBQUYzQixLOztrRUFLTSxZQUFNO0FBQ2hCLFVBQU1BLE9BQU8sR0FBRyxNQUFLQyxLQUFMLENBQVdELE9BQTNCO0FBQ0EsVUFBTUYsS0FBSyxHQUFHLE1BQUtHLEtBQUwsQ0FBV0gsS0FBWCxJQUFvQkUsT0FBTyxHQUFHLENBQUMsQ0FBSixHQUFRLENBQW5DLENBQWQ7O0FBRUEsWUFBS0UsUUFBTCxDQUFjO0FBQUVKLGFBQUssRUFBRUEsS0FBVDtBQUFpQkUsZUFBTyxFQUFFLENBQUNBO0FBQTNCLE9BQWQ7QUFDSCxLOzs7Ozs7OzZCQUVPO0FBQ0osYUFDSTtBQUFRLGlCQUFTLEVBQUMsY0FBbEI7QUFBaUMsZUFBTyxFQUFHLEtBQUtHO0FBQWhELFNBQ0ssS0FBS0YsS0FBTCxDQUFXSCxLQURoQixFQUN1QixHQUR2QixFQUVJO0FBQ0ksaUJBQVMsRUFDTCxLQUFLRyxLQUFMLENBQVdELE9BQVgsR0FBcUIsa0JBQXJCLEdBQTBDO0FBRmxELFFBRkosRUFNTyxHQU5QLEVBT00sS0FBS0MsS0FBTCxDQUFXRCxPQUFYLEdBQXFCLGtCQUFyQixHQUEwQyxVQVBoRCxDQURKO0FBV0g7Ozs7RUF6Qm9CSSxLQUFLLENBQUNDLFM7O0FBNEIvQkMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNDLE9BQTdDLENBQXFELFVBQVNDLElBQVQsRUFBZTtBQUNoRUMsVUFBUSxDQUFDQyxNQUFULENBQWdCUCxLQUFLLENBQUNRLGFBQU4sQ0FBb0JmLFVBQXBCLENBQWhCLEVBQWlEWSxJQUFqRDtBQUNILENBRkQsRSIsImZpbGUiOiJwb3N0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwia2lrb28gWW91dHViZVwiKTtcclxuXHJcblxyXG5jbGFzcyBMaWtlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGxpa2VzOiB0aGlzLnByb3BzLmxpa2VzIHx8IDAsXHJcbiAgICAgICAgaXNMaWtlZDogdGhpcy5wcm9wcy5pc0xpa2VkIHx8IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzTGlrZWQgPSB0aGlzLnN0YXRlLmlzTGlrZWQ7XHJcbiAgICAgICAgY29uc3QgbGlrZXMgPSB0aGlzLnN0YXRlLmxpa2VzICsgKGlzTGlrZWQgPyAtMSA6IDEpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlrZXM6IGxpa2VzLCAgaXNMaWtlZDogIWlzTGlrZWQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgb25DbGljaz17IHRoaXMuaGFuZGxlQ2xpY2sgfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxpa2VzfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMaWtlZCA/IFwiZmFzIGZhLXRodW1icy11cFwiIDogXCJmYXIgZmEtdGh1bWJzLXVwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuaXNMaWtlZCA/IFwiSmUgbidhaW1lIHBsdXMgIVwiIDogXCJKJ2FpbWUgIVwiIH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3Bhbi5yZWFjdC1saWtlJykuZm9yRWFjaChmdW5jdGlvbihzcGFuKSB7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChMaWtlQnV0dG9uKSwgc3Bhbik7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=