import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Sidebar({ user }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white min-h-screen transition-all duration-300 flex flex-col`}>
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-gray-700">
                {isOpen && <h2 className="text-xl font-bold">Student MS</h2>}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded hover:bg-gray-700"
                >
                    {isOpen ? '←' : '→'}
                </button>
            </div>

            {/* User Info */}
            <div className="p-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    {isOpen && (
                        <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-xs text-gray-400 capitalize">{user.role}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    <li>
                        <Link 
                            href={route('dashboard')}
                            className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700 transition"
                        >
                            <span>📊</span>
                            {isOpen && <span>Dashboard</span>}
                        </Link>
                    </li>

                    {user.role === 'admin' && (
                        <>
                            <li>
                                <Link 
                                    href="/students"
                                    className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700 transition"
                                >
                                    <span>👥</span>
                                    {isOpen && <span>Students</span>}
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/courses"
                                    className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700 transition"
                                >
                                    <span>📚</span>
                                    {isOpen && <span>Courses</span>}
                                </Link>
                            </li>
                        </>
                    )}

                    {user.role === 'student' && (
                        <>
                            <li>
                                <Link 
                                    href="/my-courses"
                                    className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700 transition"
                                >
                                    <span>📚</span>
                                    {isOpen && <span>My Courses</span>}
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/grades"
                                    className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700 transition"
                                >
                                    <span>📝</span>
                                    {isOpen && <span>Grades</span>}
                                </Link>
                            </li>
                        </>
                    )}

                    <li>
                        <Link 
                            href={route('profile.edit')}
                            className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700 transition"
                        >
                            <span>⚙️</span>
                            {isOpen && <span>Settings</span>}
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-gray-700">
                <Link 
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="flex items-center space-x-3 p-3 rounded hover:bg-red-700 transition w-full text-left"
                >
                    <span>🚪</span>
                    {isOpen && <span>Logout</span>}
                </Link>
            </div>
        </div>
    );
}
