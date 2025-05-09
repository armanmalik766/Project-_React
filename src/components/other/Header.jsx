import React, { useState } from 'react';
import { setLocalStorage } from '../../utils/LocalStorage';

const Header = ({ data, changeUser1 }) => {
  const firstName = data?.firstName || 'Arman Malik';
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser1("");
  }

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl font-semibold text-white">{firstName} 👋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-600 text-white px-3 py-2 rounded-sm text-lg font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;