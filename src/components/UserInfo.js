export class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = userName;
    this._userJob = userJob;
    this._itemName = document.querySelector(this._userName);
    this._itemJob = document.querySelector(this._userJob);
  }

  getUserInfo() {
    const textName = this._itemName.textContent;
    const textJob = this._itemJob.textContent;
    const objectUserInfo = {
      name: textName,
      job: textJob,
    };

    return objectUserInfo;
  }

  setUserInfo({ newItemName, newItemJob }) {
    this._itemName.textContent = newItemName;
    this._itemJob.textContent = newItemJob;
  }
}
