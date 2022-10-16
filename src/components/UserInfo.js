export class UserInfo {
  constructor({ userName, userAbout, userAvatar }) {
    this._userName = userName;
    this._userAbout = userAbout;
    this._userAvatar = userAvatar;
    this._itemName = document.querySelector(this._userName);
    this._itemAbout = document.querySelector(this._userAbout);
    this._itemAvatar = document.querySelector(this._userAvatar);
  }

  getUserInfo() {
    const textName = this._itemName.textContent;
    const textAbout = this._itemAbout.textContent;
    const objectUserInfo = {
      name: textName,
      about: textAbout,
    };

    return objectUserInfo;
  }

  setUserInfo({ newItemName, newItemAbout, userId }) {
    this._itemName.textContent = newItemName;
    this._itemAbout.textContent = newItemAbout;
    this.userId = userId;
  }

  setUserAvatar(link) {
    this._itemAvatar.setAttribute("src", link);
  }
}