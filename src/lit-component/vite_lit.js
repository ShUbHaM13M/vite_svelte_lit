import { css as b, LitElement as h, html as u } from "lit";
import { property as c, state as y, customElement as g } from "lit/decorators.js";
var w = Object.defineProperty, x = Object.getOwnPropertyDescriptor, d = (r, t, i, e) => {
  for (var o = e > 1 ? void 0 : e ? x(t, i) : t, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (e ? n(t, i, o) : n(o)) || o);
  return e && o && w(t, i, o), o;
};
const v = "https://avatars.dicebear.com/api/micah/";
let l = class extends h {
  constructor() {
    super(), this.isFollowing = !1, this.onFollowClickedCB = (data) => {
    };
  }
  onFollowBtnClicked() {
    this.isFollowing = !this.isFollowing, this.onFollowClickedCB({
      ...this.user,
      status: this.isFollowing
    });
  }
  render() {
    return u`
      <div class="header">
        <img class="avatar" src="${`${v}${this.user.username}.svg`}" alt="" />
        <button @click=${this.onFollowBtnClicked} class="follow-btn ${this.isFollowing && "following"}">
          ${this.isFollowing ? "Following" : "Follow"}
        </button>
      </div>

      <div class="body">
        <h3>${this.user.name}</h3>
        <p class="username">@${this.user.username}</p>
        <p class="company">
          Working at <strong> ${this.user.company.name} </strong>. <br />
          ${this.user.company.catchPhrase}. <br />
          ${this.user.company.bs}.
        </p>
      </div>
    `;
  }
};
l.styles = b`
    :host {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 24px;
      border-radius: 10px;
      background-color: white;
      min-width: 350px;
      box-shadow: 2px 2px 60px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.1)
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center
    }
    .avatar {
      height: 50px;
      width: 50px;
      border-radius: 50px;
      border: 2px solid rgba(0, 0, 255, 0.4)
    }
    .follow-btn {
      border-radius: 24px;
      border: 1px solid transparent;
      padding: 0.6em 1.4em;
      cursor: pointer;
      background-color: black;
      color: white;
      transition: all 150ms ease-out;
    }
    .follow-btn:hover, .follow-btn:focus {
      background-color: rgba(0, 0, 0, 0.6)
    }
    .follow-btn.following {
      background-color: white;
      color: rgba(0, 0, 0, 0.4);
      border-color: rgba(0, 0, 0, 0.4);
    }
    .body * {
      margin: 0;
      padding: 0;
    }
    .body .username {
      margin-top: 4px;
      font-weight: 300;
      font-size: 14px;
      color: #aaa;
    }
    .company {
      margin-top: 16px;
      line-height: 20px;
    }
  `;
d([
  c({ type: Object })
], l.prototype, "user", 2);
d([
  c({
    type: Function,
    attribute: !1
  })
], l.prototype, "onFollowClickedCB", 2);
d([
  y()
], l.prototype, "isFollowing", 2);
l = d([
  g("user-card")
], l);
var f = Object.defineProperty, C = Object.getOwnPropertyDescriptor, p = (r, t, i, e) => {
  for (var o = e > 1 ? void 0 : e ? C(t, i) : t, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (e ? n(t, i, o) : n(o)) || o);
  return e && o && f(t, i, o), o;
}, m = /* @__PURE__ */ ((r) => (r.DANGER = "danger", r.PRIMARY = "primary", r.WARNING = "warning", r))(m || {});
let a = class extends h {
  constructor() {
    super(...arguments), this.variant = "primary", this.onPrimaryActionClickedCB = () => {
    };
  }
  _hidePopup() {
    this.props = { ...this.props, isShown: !1 };
  }
  _onCancelClick() {
    this._hidePopup(), this.onSecondaryActionClickedCB && this.onSecondaryActionClickedCB();
  }
  _onAcceptClick() {
    this._hidePopup(), this.onPrimaryActionClickedCB && this.onPrimaryActionClickedCB();
  }
  render() {
    var r, t, i, e, o;
    return u`
			<div 
				@click=${this._hidePopup}
				style="backdrop-filter: ${((r = this.props) == null ? void 0 : r.isBackdropBlurred) && "blur(4px)"}" 
				class="overlay ${this.props.isShown && "active"}">

				<div 
					class="body ${this.variant}" 
					@click=${(s) => s.stopPropagation()}
				>
					<h3 class="title">${(t = this.props) == null ? void 0 : t.title}</h3>
					<p class="description">${(i = this.props) == null ? void 0 : i.description}</p>
					<div class="actions">
						<button class="secondary" @click=${this._onCancelClick}>
							${((e = this.props) == null ? void 0 : e.secondaryActionLabel) || "Cancel"}
						</button>
						<button class="primary" @click=${this._onAcceptClick}>
							${((o = this.props) == null ? void 0 : o.primaryActionLabel) || "Accept"}
						</button>
					</div>
				</div>

			</div>
		`;
  }
};
a.styles = b`
		:host { }
		:host * {
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
		.overlay {
			background-color: rgba(0, 0, 0, 0.4);
			height: 100%;
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			display: grid;
			place-items: center;
			opacity: 0;
			pointer-events: none;
			user-select: none;
			transition: all ease-out 350ms;
		}
		.overlay.active {
			opacity: 1;
			pointer-events: all;
			user-select: auto;		
		}
		.body {
			overflow: hidden;
			min-width: 350px;
			max-width: 350px;
			background-color: white;
			border-radius: 8px;
			border: 1px solid rgba(0, 0, 0, 0.1);
			box-shadow: 4px 4px 60px 0 rgba(0, 0, 0, 0.1);
		}
		.body.danger .title {
			background-color: rgba(255, 0, 0);
			color: white;
		}
		.body.warning .title {
			background-color: rgba(255, 140, 0);
			color: white;
		}
		.title {
			border-bottom: 1px solid rgba(0, 0, 0, 0.2);
			padding: 0.8em;
			text-align: center;
		}
		.description {
			margin: 1em;
			min-height: 100px
		}
		.actions {
			display: flex;
			gap: 1em;
			margin: 1em;
			justify-content: center;
		}
		.actions button {
			font-size: 1rem;
			cursor: pointer;
			border: none;
			border-radius: 4px;
			outline: none;
			padding: 0.8em 1.2em;
			border: 2px solid transparent;
			transition: all ease-out 150ms;
		}
		button.primary {
			background-color: rgba(0, 125, 255);
			color: white;
		}
		button:hover, button:focus {
			border: 2px dotted rgba(0, 0, 0, 0.8);
		}
		button.primary:hover, button.primary:focus {
			background-color: rgba(0, 125, 255, 0.4);
			color: black
		}
	`;
p([
  c({
    type: {},
    converter: (r, t) => r && JSON.parse(r)
  })
], a.prototype, "props", 2);
p([
  c({ type: m })
], a.prototype, "variant", 2);
p([
  c({ type: Function, attribute: !1 })
], a.prototype, "onPrimaryActionClickedCB", 2);
p([
  c({ type: Function, attribute: !1 })
], a.prototype, "onSecondaryActionClickedCB", 2);
a = p([
  g("custom-popup")
], a);
export {
  a as Popup,
  l as UserCard
};
