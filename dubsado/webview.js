"use strict";

module.exports = (Franz) => {
  const getMessages = () => {
    const unreadNotifications = document.querySelectorAll('.notification-icon.ng-binding:not(.ng-hide)');
    Franz.setBadge(0, (unreadNotifications.length >= 1) ? 1 : 0);
  }
  Franz.loop(getMessages);
}