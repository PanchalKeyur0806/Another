import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'

function User() {
  return (
    <><div class="overlay"></div><aside class="sidebar">
          <div class="brand">
              Travel Admin
          </div>
          <ul class="nav-items">
              <li class="nav-item">
                  <Link to="/admin" class="nav-link">
                      <i class="fas fa-chart-line"></i>
                      Overview
                  </Link>
              </li>
              <li class="nav-item">
                  <Link to='/user' class="nav-link">
                      <i class="fas fa-users"></i>
                      Manage Users
                  </Link>
              </li>
              <li class="nav-item">
              <Link to='/package' class="nav-link">
                      <i class="fas fa-box"></i>
                      Packages
                  </Link>
              </li>
              <li class="nav-item">
              <Link to='/payment' class="nav-link">
                      <i class="fas fa-credit-card"></i>
                      Payments
                  </Link>
              </li>
              <li class="nav-item">
              <Link to='/feedback' class="nav-link">
                      <i class="fas fa-comments"></i>
                      Feedback
                  </Link>
              </li>
          </ul>
      </aside><main class="main-content">
              <div class="header">
                  <div class="menu-toggle">
                      <i class="fas fa-bars"></i>
                  </div>
                  <div class="user-info">
                      <i class="fas fa-user"></i>
                      Admin
                  </div>

              </div>

              <div class="container">
                  <div class="search-section">

                      <div class="customer-info">
                          <div class="info-field">
                              <label>Customer Name</label>
                              <input type="text" placeholder="Enter customer name" />
                          </div>
                          <div class="info-field">
                              <label>Customer Email</label>
                              <input type="email" placeholder="Enter customer email" />
                          </div>
                          <div class="info-field">
                              <label>Start Date</label>
                              <input type="date" />
                          </div>
                          <div class="info-field">
                              <label>End Date</label>
                              <input type="date" />
                          </div>
                      </div>
                  </div>

                  <div class="users-list">
                      <table>
                          <thead>
                              <tr>
                                  <th>User ID</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Package</th>
                                  <th>Payment</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                  <th>Status</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>001</td>
                                  <td>John Doe</td>
                                  <td>john@example.com</td>
                                  <td>Premium</td>
                                  <td>$99.99</td>
                                  <td>2024-01-01</td>
                                  <td>2024-12-31</td>
                                  <td class="status-active">Active</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </main></>
  )
}

export default User