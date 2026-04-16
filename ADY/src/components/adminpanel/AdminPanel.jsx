import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import emailjs from "emailjs-com";
import './AdminPanel.css';

export default function AdminPanel() {
  const { userData, isAuthenticated, userRole } = useAuth();
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [isLoadingTickets, setIsLoadingTickets] = useState(false);
  const [activeTab, setActiveTab] = useState('users');
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !userData) {
      toast.error('Please log in to access the admin panel.');
      navigate('/login');
      return;
    }

    if (userRole !== 'admin') {
      toast.error('Access denied. Admins only.');
      navigate('/dashboard');
      return;
    }

    fetchUsers();
    fetchTickets();
  }, [isAuthenticated, userData, userRole, navigate]);

  const fetchUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const response = await fetch('http://localhost:7261/api/Users/GetUsers', {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        toast.error('Failed to fetch users.');
      }
    } catch {
      toast.error('Error fetching users.');
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const fetchTickets = async () => {
    setIsLoadingTickets(true);
    try {
      const response = await fetch('http://localhost:7261/api/Tickets/All', {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setTickets(data);
      } else {
        toast.error('Failed to fetch tickets.');
      }
    } catch {
      toast.error('Error fetching tickets.');
    } finally {
      setIsLoadingTickets(false);
    }
  };

  const handleDeleteUser = async (id, email) => {
    if (email === 'ady-admin@gmail.com') {
      toast.error('You cannot delete admin!');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`http://localhost:7261/api/Users/Delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        toast.success('User deleted successfully!');
        setUsers(users.filter((user) => user.userId !== id));
      } else {
        toast.error('Failed to delete user.');
      }
    } catch {
      toast.error('Error deleting user.');
    }
  };
  const handleDeleteTicket = async (ticketId, email, name) => {
    if (!window.confirm('Are you sure you want to delete this ticket?')) return;

    try {
      const response = await fetch(`http://localhost:7261/api/Tickets/Delete/${ticketId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {

        if (email) {
          emailjs.send(
            "service_ktivsrk",
            "template_0y6zzyv",
            {
              user_email: email,
              user_name: name
            },
            "AqrDaRC1_m2IUjEpa"
          );
        }

        toast.success('Ticket deleted successfully!');
        setTickets(tickets.filter((ticket) => ticket.ticketId !== ticketId));
      } else {
        toast.error('Failed to delete ticket.');
      }
    } catch {
      toast.error('Error deleting ticket.');
    }
  };

  if (!isAuthenticated || !userData || userRole !== 'admin') return null;

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h1 className="admin-title"></h1>
        <nav className="admin-nav">
          <button
            onClick={() => setActiveTab('users')}
            className={activeTab === 'users' ? 'active' : ''}
          >
            {t('users')}
          </button>
          <button
            onClick={() => setActiveTab('tickets')}
            className={activeTab === 'tickets' ? 'active' : ''}
          >
            {t('tickets')}
          </button>
        </nav>
      </aside>

      <main className="admin-content">
        {activeTab === 'users' && (
          <section>
            <h2 className="section-title">{t('users')}</h2>
            {isLoadingUsers ? (
              <p>Loading users...</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>{t('name')}</th>
                    <th>Email</th>
                    <th>{t('action')}</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.userId}>
                      <td>{user.userId}</td>
                      <td>{user.firstName} {user.lastName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteUser(user.userId, user.email)}
                        >
                          {t('delete')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        )}

        {activeTab === 'tickets' && (
          <section>
            <h2 className="section-title">{t('tickets')}</h2>
            {isLoadingTickets ? (
              <p>Loading tickets...</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>{t('name')}</th>
                    <th>Email</th>
                    <th>{t('route')}</th>
                    <th>{t('date')}</th>
                    <th>{t('action')}</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.ticketId}>
                      <td>{ticket.ticketId}</td>
                      <td>{ticket.fullName}</td>
                      <td>{ticket.email}</td>
                      <td>{ticket.from} → {ticket.to}</td>
                      <td>{ticket.date} / {ticket.time}</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() =>
                            handleDeleteTicket(
                              ticket.ticketId,
                              ticket.email,
                              ticket.fullName
                            )
                          }
                        >
                          {t('delete')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        )}
      </main>

      <ToastContainer position="top-right" autoClose={4000} hideProgressBar closeOnClick />
    </div>
  );
}