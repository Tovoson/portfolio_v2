import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Lock, Mail, ArrowRight, EyeIcon, EyeClosed } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuthStore } from '../store/useAdminStore';
import { useShallow } from 'zustand/shallow';
import { CONSTANTS } from '@/constants/Constants';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false)

  const navigate = useNavigate();
  const { singIn, error, isLoading, user } = useAuthStore(
    useShallow((state) => ({ singIn: state.singIn, error: state.error, isLoading: state.isLoading, user: state.user })),
  )

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await singIn(email, password)
  };

  useEffect(() =>{
    if(user) navigate("/admin/dashboard")
  }, [user])

  return (
    <div className={`min-h-screen ${CONSTANTS.Dark.BACKGROUND} flex items-center justify-center p-6`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className={`${CONSTANTS.BACKGROUNDS.PRIMARY} p-4 rounded-2xl ${CONSTANTS.BACKGROUNDS.PRIMARY_20_SHADOW}`}>
            <Terminal className={`${CONSTANTS.TEXT.TITLE} size-10`} />
          </div>
          <div className="text-center space-y-2">
            <h1 className={`text-3xl font-black ${CONSTANTS.TEXT.TITLE} uppercase tracking-tighter`}>Admin Access</h1>
            <p className={`${CONSTANTS.TEXT.LABEL_TXT} text-sm font-medium`}>Secure portal for DevExpert AI systems</p>
          </div>
        </div>

        <div className={`glass-card p-8 rounded-3xl border ${CONSTANTS.BACKGROUNDS.BORDER_WHITE_5} ${CONSTANTS.BACKGROUNDS.WHITE_2}`}>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className={`text-[10px] font-bold uppercase tracking-widest ${CONSTANTS.TEXT.LABEL_TXT} ml-1`}>Email Address</label>
              <div className="relative">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 size-5 ${CONSTANTS.TEXT.ICON_COLOR_FORM}`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full ${CONSTANTS.BACKGROUNDS.WHITE_3} border ${CONSTANTS.BACKGROUNDS.BORDER_WHITE_10} rounded-xl pl-12 pr-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all ${CONSTANTS.TEXT.TITLE} ${CONSTANTS.TEXT.PLACEHOLDER_ADMIN}`}
                  placeholder="admin@devexpert.ai"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-[10px] font-bold uppercase tracking-widest ${CONSTANTS.TEXT.LABEL_TXT} ml-1`}>Password</label>
              <div className="relative">
                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 size-5 ${CONSTANTS.TEXT.ICON_COLOR_FORM}`} />
                <input
                  type={isVisible ? "text": "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full ${CONSTANTS.BACKGROUNDS.WHITE_3} border ${CONSTANTS.BACKGROUNDS.BORDER_WHITE_10} rounded-xl pl-12 pr-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all ${CONSTANTS.TEXT.TITLE} ${CONSTANTS.TEXT.PLACEHOLDER_ADMIN}`}
                  placeholder="••••••••"
                  required
                />
                {
                  isVisible ?
                    <EyeIcon onClick={() =>{setIsVisible(!isVisible)}} className={`absolute right-4 top-1/2 -translate-y-1/2 size-5 ${CONSTANTS.TEXT.ICON_COLOR_FORM}`} />
                    :
                    <EyeClosed onClick={() =>{setIsVisible(!isVisible)}} className={`absolute right-4 top-1/2 -translate-y-1/2 size-5 ${CONSTANTS.TEXT.ICON_COLOR_FORM}`} />
                }

              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${CONSTANTS.TEXT.ERROR} text-xs font-bold text-center ${CONSTANTS.BACKGROUNDS.RED_10} py-3 rounded-lg border border-red-500/20`}
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full ${CONSTANTS.BACKGROUNDS.PRIMARY} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_90} disabled:opacity-50 ${CONSTANTS.TEXT.TITLE} h-14 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer`}
            >
              {isLoading ? 'Authenticating...' : 'Sign In to Dashboard'}
              {!isLoading && <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>

        <p className={`text-center mt-8 ${CONSTANTS.TEXT.ICON_COLOR_FORM} text-xs font-medium`}>
          Authorized personnel only. All access attempts are logged.
        </p>
      </motion.div>
    </div>
  );
}