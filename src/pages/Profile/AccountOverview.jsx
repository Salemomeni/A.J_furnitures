import React from 'react'

const AccountOverview = () => {
  return (
    <div>
        <main className="profile-content">
        <h2>Account Overview</h2>
        <div className="overview-grid">
          <div className="overview-box">
            <h4>Account Details</h4>
            <p><strong>Salem Omeni</strong></p>
            <p>omenisalem4@gmail.com</p>
          </div>

          <div className="overview-box">
            <h4>Address Book</h4>
            <p>Your default shipping address:</p>
            <p><strong>Salem Omeni</strong></p>
            <p>In front of RSTV, Portharcourt-Rumukrushi, Rivers</p>
            <p>+234 8148074068</p>
          </div>

          <div className="overview-box">
            <h4>Store Credit</h4>
            <p>💰 Jumia store credit balance: ₦ 0</p>
          </div>

          <div className="overview-box">
            <h4>Newsletter Preferences</h4>
            <p>Stay updated with the latest news and offers.</p>
            <a href="#">Edit Newsletter Preferences</a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AccountOverview