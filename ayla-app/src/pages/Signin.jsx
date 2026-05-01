import React, { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import illustration from '../assets/bg-sign.svg';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Get language preference from Splash screen
    const currentLang = localStorage.getItem('appLanguage') || 'en';

    const handleNext = () => {
        if (email && password) {
            console.log('Signing in with:', { email, password });
        }
    };

    return ( 
        <>
            <div className="container">
                <img src={illustration} alt="Illustration" />
      
                <div className="form-content">
                    <h1 className="title">
                        {currentLang === 'ar' ? "تسجيل الدخول" : "Sign In"}
                    </h1>

                    <div className="input-group">
                        <label>{currentLang === 'ar' ? "البريد الإلكتروني" : "Email"}</label>
                        <input 
                            type="email" 
                            placeholder={currentLang === 'ar' ? "مثال: sara@gmail.com" : "Example: sara@gmail.com"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ textAlign: currentLang === 'ar' ? 'right' : 'left' }}
                        />
                    </div>

                    <div className="input-group">
                        <label>{currentLang === 'ar' ? "كلمة المرور" : "Password"}</label>
                        <input 
                            type="password" 
                            placeholder={currentLang === 'ar' ? "أدخل كلمة المرور" : "Enter Password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ textAlign: currentLang === 'ar' ? 'right' : 'left' }}
                        />
                    </div>

                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <p className="signup-text">
                            {currentLang === 'ar' ? (
                                <>ليس لديك حساب؟ <span className="link">إنشاء حساب</span></>
                            ) : (
                                <>Don't have an account? <span className="link">Sign up</span></>
                            )}
                        </p>
                    </Link>

                    <button className="btn-next">
                        {currentLang === 'ar' ? "تسجيل الدخول" : "Sign in"}
                    </button>

                    <div className="divider">
                        <span>{currentLang === 'ar' ? "أو المتابعة باستخدام" : "or continue with"}</span>
                    </div>

                    <div className="social-buttons">
                        <button className="social-btn facebook">
                            <img src="fb-icon.svg" alt="" /> 
                            {currentLang === 'ar' ? "فيسبوك" : "Facebook"}
                        </button>
                        <button className="social-btn google">
                            <img src="google-icon.svg" alt="" /> 
                            {currentLang === 'ar' ? "جوجل" : "Google"}
                        </button>
                    </div>
                </div>
            </div>
        </> 
    );
}
 
export default Signin;