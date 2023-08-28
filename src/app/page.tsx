import RecentOrders from "@/components/RecentOrders";

export default function Home() {
  return (
    <div>
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
      <h2 className="recent-orders">Recent Orders</h2>
      <RecentOrders />
  </div>
  )
}
