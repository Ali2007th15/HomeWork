import React, { useState, useRef, useEffect } from 'react';
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot, FaUser, FaSpinner } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedChatBot = () => {
    const { t } = useTranslation();
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
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
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const suggestedQuestions = [
        { icon: '🎫', text: t('bookTicket'), category: 'booking' },
        { icon: '🚂', text: t('trainRoutes'), category: 'routes' },
        { icon: '💰', text: t('refundPolicy'), category: 'policy' },
        { icon: '🎒', text: t('baggageAllowance'), category: 'baggage' },
        { icon: '🐕', text: t('bringPet'), category: 'pets' },
        { icon: '⏰', text: t('trainSchedules'), category: 'schedule' },
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (chatOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [chatOpen]);
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
        if (lowerMessage.includes('route') || lowerMessage.includes('destination') || lowerMessage.includes('where') ||
            lowerMessage.includes('маршрут') || lowerMessage.includes('куда') || lowerMessage.includes('направлен') ||
            lowerMessage.includes('marşrut')) {
            return t('routes3');
        }
        if (lowerMessage.includes('refund') || lowerMessage.includes('cancel') ||
            lowerMessage.includes('возврат') || lowerMessage.includes('отмен') ||
            lowerMessage.includes('geri') || lowerMessage.includes('ləğv')) {
            return t('refund');
        }
        if (lowerMessage.includes('seat') || lowerMessage.includes('class') ||
            lowerMessage.includes('место') || lowerMessage.includes('класс') ||
            lowerMessage.includes('yer') || lowerMessage.includes('sinif')) {
            return t('seatClass');
        }
        if (lowerMessage.includes('pet') || lowerMessage.includes('dog') || lowerMessage.includes('cat') ||
            lowerMessage.includes('питомц') || lowerMessage.includes('собак') || lowerMessage.includes('кошк') || lowerMessage.includes('животн') ||
            lowerMessage.includes('heyvan') || lowerMessage.includes('it') || lowerMessage.includes('pişik')) {
            return t('pets');
        }
        if (lowerMessage.includes('baggage') || lowerMessage.includes('luggage') ||
            lowerMessage.includes('багаж') || lowerMessage.includes('ручн') ||
            lowerMessage.includes('baqaj')) {
            return t('baggage');
        }
        if (lowerMessage.includes('time') || lowerMessage.includes('schedule') || lowerMessage.includes('when') ||
            lowerMessage.includes('время') || lowerMessage.includes('расписан') || lowerMessage.includes('когда') ||
            lowerMessage.includes('vaxt') || lowerMessage.includes('cədvəl')) {
            return t('schedule');
        }
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much') ||
            lowerMessage.includes('цена') || lowerMessage.includes('стоимость') || lowerMessage.includes('сколько') ||
            lowerMessage.includes('qiymət') || lowerMessage.includes('nə qədər')) {
            return t('price');
        }
        if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help') ||
            lowerMessage.includes('контакт') || lowerMessage.includes('поддержк') || lowerMessage.includes('помощ') ||
            lowerMessage.includes('əlaqə') || lowerMessage.includes('dəstək') || lowerMessage.includes('kömək')) {
            return t('contact3');
        }
        if (lowerMessage.includes('delay') || lowerMessage.includes('late') ||
            lowerMessage.includes('задерж') || lowerMessage.includes('опоздан') ||
            lowerMessage.includes('gecikm') || lowerMessage.includes('tələs')) {
            return t('delay');
        }
        if (lowerMessage.includes('food') || lowerMessage.includes('meal') || lowerMessage.includes('restaurant') ||
            lowerMessage.includes('еда') || lowerMessage.includes('питан') || lowerMessage.includes('ресторан') ||
            lowerMessage.includes('yemək') || lowerMessage.includes('restoran')) {
            return t('food');
        }
        if (lowerMessage.includes('wifi') || lowerMessage.includes('internet') ||
            lowerMessage.includes('вай фай') || lowerMessage.includes('интернет')) {
            return t('wifi');
        }
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') ||
            lowerMessage.includes('привет') || lowerMessage.includes('здравств') ||
            lowerMessage.includes('salam')) {
            return t('greeting');
        }
        if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') ||
            lowerMessage.includes('спасибо') || lowerMessage.includes('благодар') ||
            lowerMessage.includes('sağol') || lowerMessage.includes('təşəkkür')) {
            return t('thanks');
        }
        return t('default');
    };

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        const userMessage = { sender: 'user', text: inputText, timestamp: new Date() };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');

        const response = await generateAIResponse(inputText);
        await typeMessage(response);
    };

    const handleQuestionClick = async (question) => {
        const userMessage = { sender: 'user', text: question, timestamp: new Date() };
        setMessages(prev => [...prev, userMessage]);

        const response = await generateAIResponse(question);
        await typeMessage(response);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <>
            {}
            <AnimatePresence>
                {!chatOpen && (
                    <motion.div
                        className="fixed bottom-6 right-6 z-50"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <motion.button
                            onClick={() => setChatOpen(true)}
                            className="relative bg-gradient-to-r from-[#1d5c87] to-[#2980b9] p-5 rounded-full text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaCommentDots size={32} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {}
            <AnimatePresence>
                {chatOpen && (
                    <motion.div
                        className="fixed bottom-6 right-6 w-[450px] h-[650px] bg-white dark:bg-[#1a1d2e] shadow-2xl rounded-2xl z-50 flex flex-col overflow-hidden"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                        {}
                        <div className="bg-gradient-to-r from-[#1d5c87] to-[#2980b9] p-4 flex justify-between items-center text-white rounded-t-2xl">
                            <div className="flex items-center gap-3">
                                <FaRobot size={28} />
                                <div>
                                    <h3 className="font-bold text-lg">{t('title7')}</h3>
                                    <p className="text-xs text-blue-100">{t('status')}</p>
                                </div>
                            </div>
                            <motion.button
                                onClick={() => setChatOpen(false)}
                                className="text-white hover:bg-white/20 p-2 rounded-full transition-all"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaTimes size={20} />
                            </motion.button>
                        </div>

                        {}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#0a1929] scrollbar-hide">
                            <AnimatePresence>
                                {messages.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                    >
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                            msg.sender === 'bot'
                                                ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                                                : 'bg-gradient-to-br from-green-500 to-teal-500'
                                        }`}>
                                            {msg.sender === 'bot' ? <FaRobot className="text-white" size={16} /> : <FaUser className="text-white" size={16} />}
                                        </div>
                                        <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} max-w-[75%]`}>
                                            <motion.div
                                                className={`p-3 rounded-2xl shadow-md ${
                                                    msg.sender === 'bot'
                                                        ? 'bg-white dark:bg-[#1e2139] text-gray-800 dark:text-gray-100 rounded-tl-none'
                                                        : 'bg-gradient-to-r from-[#1d5c87] to-[#2980b9] text-white rounded-tr-none'
                                                }`}
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <p className="text-sm leading-relaxed text-black dark:text-white whitespace-pre-wrap">{msg.text}</p>
                                            </motion.div>
                                            <span className="text-xs text-black dark:text-white  mt-1 px-1">
                                                {formatTime(msg.timestamp)}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-2 items-center"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                        <FaRobot className="text-white" size={16} />
                                    </div>
                                    <div className="bg-white dark:bg-[#1e2139] p-3 rounded-2xl rounded-tl-none shadow-md">
                                        <div className="flex gap-1">
                                            <motion.div
                                                className="w-2 h-2 bg-blue-500 rounded-full"
                                                animate={{ y: [0, -8, 0] }}
                                                transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                            />
                                            <motion.div
                                                className="w-2 h-2 bg-blue-500 rounded-full"
                                                animate={{ y: [0, -8, 0] }}
                                                transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                            />
                                            <motion.div
                                                className="w-2 h-2 bg-blue-500 rounded-full"
                                                animate={{ y: [0, -8, 0] }}
                                                transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {}
                        <div className="p-3 bg-white dark:bg-[#1a1d2e] border-t border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">{t('quickQuestions')}</p>
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                {suggestedQuestions.map((q, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleQuestionClick(q.text)}
                                        className="flex-shrink-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-[#1e2139] dark:to-[#252842] text-gray-700 dark:text-gray-200 px-3 py-2 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 transition-all"

                                    >
                                        <span className="mr-1">{q.icon}</span>
                                        {q.text}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {}
                        <div className="p-4 bg-white dark:bg-[#1a1d2e] border-t border-gray-200 dark:border-gray-700">
                            <div className="flex gap-2 items-end">
                                <div className="flex-1">
                                    <textarea
                                        ref={inputRef}
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder={t('placeholder7')}
                                        rows="1"
                                        className="w-full px-4 py-3 rounded-2xl bg-gray-100 dark:bg-[#12141c] text-gray-800 dark:text-gray-100 border-2 border-transparent focus:border-blue-500 focus:outline-none resize-none transition-all"
                                        style={{ maxHeight: '100px' }}
                                    />
                                </div>
                                <motion.button
                                    onClick={handleSendMessage}
                                    disabled={!inputText.trim()}
                                    className="bg-gradient-to-r from-[#1d5c87] to-[#2980b9] text-white p-3.5 rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-blue-500/50 mb-2 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isTyping ? <FaSpinner className="animate-spin" size={20} /> : <FaPaperPlane size={20} />}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AdvancedChatBot;