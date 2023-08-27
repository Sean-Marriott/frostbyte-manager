import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
        <title>FrostBytePCs</title>
      </head>
      <body className={inter.className}>
        <div className="container">
          <aside>
              <div className="toggle">
                  <div className="logo">
                      <img src="images/logo.png" />
                      <h2>FrostByte<span className="primary">PCs</span></h2>
                  </div>
                  <div className="close" id="close-btn">
                      <span className="material-icons-sharp">
                          close
                      </span>
                  </div>
              </div>

              <div className="sidebar">
                  <a href="#" className="active">
                      <span className="material-icons-sharp">
                          dashboard
                      </span>
                      <h3>Dashboard</h3>
                  </a>
                  <a href="#">
                      <span className="material-icons-sharp">
                          build_circle
                      </span>
                      <h3>Build</h3>
                  </a>
                  <a href="#">
                      <span className="material-icons-sharp">
                          receipt_long
                      </span>
                      <h3>Past Orders</h3>
                  </a>
                  <a href="#">
                      <span className="material-icons-sharp">
                          inventory_2
                      </span>
                      <h3>Inventory</h3>
                  </a>
                  <a href="#">
                      <span className="material-icons-sharp">
                          insights
                      </span>
                      <h3>Analytics</h3>
                  </a>
              </div>
          </aside>

          <main>
              <h1>Dashboard</h1>
              <div className="dashboard">
                  <div className="sales">
                      <div className="status">
                          <div className="info">
                              <h3>Total Profit</h3>
                              <h1>$35,024</h1>
                          </div>
                          <div className="progresss">
                              <svg>
                                  <circle cx="38" cy="38" r="36"></circle>
                              </svg>
                              <div className="percentage">
                                  <p>+81%</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="sales">
                      <div className="status">
                          <div className="info">
                              <h3>Current Year</h3>
                              <h1>$12,149</h1>
                          </div>
                          <div className="progresss">
                              <svg>
                                  <circle cx="38" cy="38" r="36"></circle>
                              </svg>
                              <div className="percentage">
                                  <p>+81%</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="searches">
                      <div className="status">
                          <div className="info">
                              <h3>PCs Sold</h3>
                              <h1>112</h1>
                          </div>
                          <div className="progresss">
                              <svg>
                                  <circle cx="38" cy="38" r="36"></circle>
                              </svg>
                              <div className="percentage">
                                  <p>+21%</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="new-pcs">
                  <h2>Current Listings</h2>
                  <div className="user-list">
                      <div className="user">
                          <img src="images/profile-1.jpg" />
                          <h2>Ryzen 7 57...</h2>
                          <p>Trade Me</p>
                      </div>
                      <div className="user">
                          <img src="images/profile-2.jpg" />
                          <h2>Ryzen 7 37...</h2>
                          <p>Trade Me</p>
                      </div>
                      <div className="user">
                          <img src="images/profile-3.jpg" />
                          <h2>Ryzen 3 31...</h2>
                          <p>Trade Me</p>
                      </div>
                      <div className="user">
                          <img src="images/profile-4.jpg" />
                          <h2>Intel Core...</h2>
                          <p>Trade Me</p>
                      </div>
                  </div>
              </div>

              <div className="recent-orders">
                  <h2>Recent Orders</h2>
                  <table>
                      <thead>
                          <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Payment</th>
                              <th>Status</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody></tbody>
                  </table>
                  <a href="#">Show All</a>
              </div>

          </main>

          <div className="right-section">
              <div className="nav">
                  <button id="menu-btn">
                      <span className="material-icons-sharp">
                          menu
                      </span>
                  </button>
                  <div className="dark-mode">
                      <span className="material-icons-sharp active">
                          light_mode
                      </span>
                      <span className="material-icons-sharp">
                          dark_mode
                      </span>
                  </div>

                  <div className="profile">
                      <div className="info">
                          <p>Hey, <b>Sean</b></p>
                          <small className="text-muted">Admin</small>
                      </div>
                      <div className="profile-photo">
                          <img src="images/sean.jpg" />
                      </div>
                  </div>

              </div>

              <div className="user-profile">
                  <div className="logo">
                      <img src="images/sean.jpg" />
                      <h2>Sean Marriott</h2>
                      <p>Fullstack Web Developer</p>
                  </div>
              </div>

              <div className="reminders">
                  <div className="header">
                      <h2>Reminders</h2>
                      <span className="material-icons-sharp">
                          notifications_none
                      </span>
                  </div>

                  <div className="notification">
                      <div className="icon">
                          <span className="material-icons-sharp">
                              handyman
                          </span>
                      </div>
                      <div className="content">
                          <div className="info">
                              <h3>Repair</h3>
                              <small className="text_muted">
                                  08:00 AM - 12:00 PM
                              </small>
                          </div>
                          <span className="material-icons-sharp">
                              more_vert
                          </span>
                      </div>
                  </div>

                  <div className="notification">
                      <div className="icon">
                          <span className="material-icons-sharp">
                              location_on
                          </span>
                      </div>
                      <div className="content">
                          <div className="info">
                              <h3>Pickup</h3>
                              <small className="text_muted">
                                  08:00 AM - 12:00 PM
                              </small>
                          </div>
                          <span className="material-icons-sharp">
                              more_vert
                          </span>
                      </div>
                  </div>

                  <div className="notification add-reminder">
                      <div>
                          <span className="material-icons-sharp">
                              add
                          </span>
                          <h3>Add Reminder</h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        {children}
      </body>
    </html>
  )
}
