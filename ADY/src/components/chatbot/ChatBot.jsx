import React, { useState, useRef, useEffect } from 'react';
import { FaCommentDots, FaTimes, FaRobot, FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedChatBot = () => {
    const { t } = useTranslation();
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        setMessages([{
            sender: 'bot',
            text: t('initialMessage'),
            timestamp: new Date()
        }]);
    }, [t]);

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const suggestedQuestions = [
        { icon: '🎫', text: t('bookTicket') },
        { icon: '🚂', text: t('trainRoutes') },
        { icon: '💰', text: t('refundPolicy') },
        { icon: '🎒', text: t('baggageAllowance') },
        { icon: '🐕', text: t('bringPet') },
        { icon: '⏰', text: t('trainSchedules') },
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const typeMessage = async (text) => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        setMessages(prev => [...prev, {
            sender: 'bot',
            text,
            timestamp: new Date()
        }]);
        setIsTyping(false);
    };

    const generateAIResponse = async (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('book') || lowerMessage.includes('buy') || lowerMessage.includes('ticket') ||
            lowerMessage.includes('забронир') || lowerMessage.includes('купить') || lowerMessage.includes('билет') ||
            lowerMessage.includes('sifariş') || lowerMessage.includes('bilet')) {
            return t('booking');
        }

        if (lowerMessage.includes('route') || lowerMessage.includes('destination') ||
            lowerMessage.includes('маршрут') || lowerMessage.includes('куда') ||
            lowerMessage.includes('marşrut')) {
            return t('routes3');
        }

        if (lowerMessage.includes('refund') || lowerMessage.includes('cancel') ||
            lowerMessage.includes('возврат') || lowerMessage.includes('отмен') ||
            lowerMessage.includes('geri') || lowerMessage.includes('ləğv')) {
            return t('refund');
        }

        if (lowerMessage.includes('pet') || lowerMessage.includes('dog') || lowerMessage.includes('cat') ||
            lowerMessage.includes('heyvan') || lowerMessage.includes('it') || lowerMessage.includes('pişik')) {
            return t('pets');
        }

        if (lowerMessage.includes('baggage') || lowerMessage.includes('luggage') ||
            lowerMessage.includes('багаж') || lowerMessage.includes('baqaj')) {
            return t('baggage');
        }

        if (lowerMessage.includes('time') || lowerMessage.includes('schedule') ||
            lowerMessage.includes('время') || lowerMessage.includes('cədvəl')) {
            return t('schedule');
        }

        return t('default');
    };

    const handleQuestionClick = async (question) => {
        const userMessage = { sender: 'user', text: question, timestamp: new Date() };
        setMessages(prev => [...prev, userMessage]);

        const response = await generateAIResponse(question);
        await typeMessage(response);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <>
            <AnimatePresence>
                {!chatOpen && (
                    <motion.div
                        className="fixed bottom-6 right-6 z-50"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                    >
                        <motion.button
                            onClick={() => setChatOpen(true)}
                            className="bg-gradient-to-r from-[#1d5c87] to-[#2980b9] p-5 rounded-full text-white shadow-2xl"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaCommentDots size={32} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {chatOpen && (
                    <motion.div
                        className="fixed bottom-6 right-6 w-[450px] h-[650px] bg-white dark:bg-[#1a1d2e] shadow-2xl rounded-2xl z-50 flex flex-col overflow-hidden"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                    >
                        {}
                        <div className="bg-gradient-to-r from-[#1d5c87] to-[#2980b9] p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <FaRobot size={24} />
                                <h3>{t('title7')}</h3>
                            </div>
                            <button onClick={() => setChatOpen(false)}>
                                <FaTimes />
                            </button>
                        </div>

                        {}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#0a1929] scrollbar-hide">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`p-3 rounded-2xl max-w-[70%] ${
                                        msg.sender === 'bot'
                                            ? 'bg-white dark:bg-[#1e2139]'
                                            : 'bg-gradient-to-r from-[#1d5c87] to-[#2980b9] text-white'
                                    }`}>
                                        {msg.text}
                                        <div className="text-xs mt-1 opacity-70">
                                            {formatTime(msg.timestamp)}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="text-sm text-gray-400">
                                    typing...
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {}
                        <div className="p-5 bg-white dark:bg-[#1a1d2e]">
                            <p className="mb-4 text-sm font-semibold text-gray-600 dark:text-gray-300">
                                {t('quickQuestions')}
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                {suggestedQuestions.map((q, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleQuestionClick(q.text)}
                                        className="
                                            flex items-center justify-center gap-2
                                            px-4 py-3
                                            bg-gradient-to-r from-blue-50 to-purple-50
                                            dark:from-[#1e2139] dark:to-[#252842]
                                            text-gray-800 dark:text-gray-200
                                            rounded-xl
                                            text-sm font-medium
                                            border border-blue-200 dark:border-blue-900
                                            hover:border-blue-400 dark:hover:border-blue-600
                                            transition-all
                                            shadow-sm
                                        "
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>{q.icon}</span>
                                        <span className="text-center">{q.text}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AdvancedChatBot;