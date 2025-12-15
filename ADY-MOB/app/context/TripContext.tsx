import React, { createContext, useState, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:7261/api/Tickets';

interface Ticket {
  ticketId?: number;
  userId: number;
  fullName: string;
  email: string;
  from: string;
  to: string;
  date: string;
  time: string;
  seats: string;
  totalPrice: number;
  createdOn?: string;
}

interface TripResult {
  success: boolean;
  message?: string;
  ticket?: Ticket;
  tickets?: Ticket[];
  bookedSeats?: number[];
}

interface TripContextType {
  loading: boolean;
  createTicket: (ticket: Omit<Ticket, 'ticketId' | 'createdOn'>) => Promise<TripResult>;
  getTicketById: (ticketId: number) => Promise<TripResult>;
  getTicketsByUserId: (userId: number) => Promise<TripResult>;
  getAllTickets: () => Promise<TripResult>;
  updateTicket: (ticketId: number, ticket: Omit<Ticket, 'ticketId' | 'createdOn'>) => Promise<TripResult>;
  deleteTicket: (ticketId: number) => Promise<TripResult>;
  getBookedSeats: (from: string, to: string, date: string, time: string) => Promise<TripResult>;
}

const TripContext = createContext<TripContextType>({
  loading: false,
  createTicket: async () => ({ success: false, message: '' }),
  getTicketById: async () => ({ success: false, message: '' }),
  getTicketsByUserId: async () => ({ success: false, message: '' }),
  getAllTickets: async () => ({ success: false, message: '' }),
  updateTicket: async () => ({ success: false, message: '' }),
  deleteTicket: async () => ({ success: false, message: '' }),
  getBookedSeats: async () => ({ success: false, message: '' }),
});

export const TripProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const getAuthToken = async () => {
    return await AsyncStorage.getItem('jwt');
  };

  const createTicket = async (ticket: Omit<Ticket, 'ticketId' | 'createdOn'>): Promise<TripResult> => {
    setLoading(true);
    try {
      const token = await getAuthToken();
      const response = await fetch(`${API_URL}/Create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `jwt=${token}`,
        },
        body: JSON.stringify(ticket),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, ticket: data.Ticket, message: data.Message };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.Message || 'Failed to create ticket' };
      }
    } catch (error) {
      console.error('Create ticket error:', error);
      return { success: false, message: 'Connection error' };
    } finally {
      setLoading(false);
    }
  };

  const getTicketById = async (ticketId: number): Promise<TripResult> => {
    setLoading(true);
    try {
      const token = await getAuthToken();
      const response = await fetch(`${API_URL}/${ticketId}`, {
        method: 'GET',
        headers: {
          'Cookie': `jwt=${token}`,
        },
      });

      if (response.ok) {
        const ticket = await response.json();
        return { success: true, ticket };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.Message || 'Ticket not found' };
      }
    } catch (error) {
      console.error('Get ticket error:', error);
      return { success: false, message: 'Connection error' };
    } finally {
      setLoading(false);
    }
  };

  const getTicketsByUserId = async (userId: number): Promise<TripResult> => {
    setLoading(true);
    try {
      const token = await getAuthToken();
      const response = await fetch(`${API_URL}/User/${userId}`, {
        method: 'GET',
        headers: {
          'Cookie': `jwt=${token}`,
        },
      });

      if (response.ok) {
        const tickets = await response.json();
        return { success: true, tickets };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.Message || 'No tickets found' };
      }
    } catch (error) {
      console.error('Get user tickets error:', error);
      return { success: false, message: 'Connection error' };
    } finally {
      setLoading(false);
    }
  };

  const getAllTickets = async (): Promise<TripResult> => {
    setLoading(true);
    try {
      const token = await getAuthToken();
      const response = await fetch(`${API_URL}/All`, {
        method: 'GET',
        headers: {
          'Cookie': `jwt=${token}`,
        },
      });

      if (response.ok) {
        const tickets = await response.json();
        return { success: true, tickets };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.Message || 'No tickets found' };
      }
    } catch (error) {
      console.error('Get all tickets error:', error);
      return { success: false, message: 'Connection error' };
    } finally {
      setLoading(false);
    }
  };

  const updateTicket = async (
    ticketId: number,
    ticket: Omit<Ticket, 'ticketId' | 'createdOn'>
  ): Promise<TripResult> => {
    setLoading(true);
    try {
      const token = await getAuthToken();
      const response = await fetch(`${API_URL}/Update/${ticketId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `jwt=${token}`,
        },
        body: JSON.stringify(ticket),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, ticket: data.Ticket, message: data.Message };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.Message || 'Failed to update ticket' };
      }
    } catch (error) {
      console.error('Update ticket error:', error);
      return { success: false, message: 'Connection error' };
    } finally {
      setLoading(false);
    }
  };

  const deleteTicket = async (ticketId: number): Promise<TripResult> => {
    setLoading(true);
    try {
      const token = await getAuthToken();
      const response = await fetch(`${API_URL}/Delete/${ticketId}`, {
        method: 'DELETE',
        headers: {
          'Cookie': `jwt=${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, message: data.Message };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.Message || 'Failed to delete ticket' };
      }
    } catch (error) {
      console.error('Delete ticket error:', error);
      return { success: false, message: 'Connection error' };
    } finally {
      setLoading(false);
    }
  };

  const getBookedSeats = async (
    from: string,
    to: string,
    date: string,
    time: string
  ): Promise<TripResult> => {
    setLoading(true);
    try {
      const token = await getAuthToken();
      const params = new URLSearchParams({ from, to, date, time });
      const response = await fetch(`${API_URL}/BookedSeats?${params}`, {
        method: 'GET',
        headers: {
          'Cookie': `jwt=${token}`,
        },
      });

      if (response.ok) {
        const bookedSeats = await response.json();
        return { success: true, bookedSeats };
      } else {
        return { success: false, message: 'Failed to get booked seats' };
      }
    } catch (error) {
      console.error('Get booked seats error:', error);
      return { success: false, message: 'Connection error' };
    } finally {
      setLoading(false);
    }
  };

  return (
    <TripContext.Provider
      value={{
        loading,
        createTicket,
        getTicketById,
        getTicketsByUserId,
        getAllTickets,
        updateTicket,
        deleteTicket,
        getBookedSeats,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTrip должен использоваться внутри TripProvider');
  }
  return context;
};