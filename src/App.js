import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, Star, Sparkles, Link as LinkIcon } from 'lucide-react';

const AnniversaryApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [currentMessage, setCurrentMessage] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);

  const anniversaryDate = new Date('2024-08-02T00:00:00');
  
  const loveMessages = [
    "Cada segundo a tu lado es un regalo 💕",
    "Un año de amor que se siente como una eternidad de felicidad",
    "365 días de sonrisas, besos y momentos inolvidables",
    "Nuestro amor crece más fuerte con cada día que pasa",
    "Un año de aventuras juntos, y esto es solo el comienzo",
    "Gracias por hacer cada día especial y lleno de amor",
    "365 días de ser los más afortunados del mundo"
  ];

  useEffect(() => {
    if (isLoggedIn) {
      const duration = 5000; // 5 segundos para la animación
      const startTime = Date.now();

      const animate = () => {
        const progress = Math.min((Date.now() - startTime) / duration, 1);
        
        setTimeElapsed({
          days: Math.floor(progress * 365),
          hours: Math.floor(progress * 24 * 365),
          minutes: Math.floor(progress * 1440 * 365),
          seconds: Math.floor(progress * 86400 * 365)
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Dominique' && password === '02agosto2024') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleImageUrlSubmit = (e) => {
    e.preventDefault();
    setShowUrlInput(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-300 bg-opacity-20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md relative z-10">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Nuestro Aniversario</h1>
            <p className="text-gray-600">Un año de amor infinito</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                placeholder="Ingresa tu nombre"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                placeholder="Fecha especial"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
              />
            </div>
            
            {error && (
              <p className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-lg">{error}</p>
            )}
            
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Entrar a nuestra historia ❤️
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 relative overflow-hidden">
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Heart className="w-4 h-4 text-white text-opacity-30" />
          </div>
        ))}
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-300 mr-3 animate-spin" />
            <h1 className="text-5xl font-bold text-white">¡Feliz Aniversario!</h1>
            <Sparkles className="w-8 h-8 text-yellow-300 ml-3 animate-spin" />
          </div>
          <p className="text-xl text-white opacity-90">Celebrando nuestro primer año juntos</p>
        </div>

        {/* Contador principal */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Calendar className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">{timeElapsed.days}</div>
              <div className="text-white opacity-80 font-medium">Días</div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Clock className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">{timeElapsed.hours}</div>
              <div className="text-white opacity-80 font-medium">Horas</div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Star className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">{timeElapsed.minutes}</div>
              <div className="text-white opacity-80 font-medium">Minutos</div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Heart className="w-12 h-12 text-white mx-auto mb-3 animate-pulse" />
              <div className="text-4xl font-bold text-white mb-2">{timeElapsed.seconds}</div>
              <div className="text-white opacity-80 font-medium">Segundos</div>
            </div>
          </div>
        </div>

        {/* Mensaje rotativo */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white bg-opacity-25 backdrop-blur-lg rounded-3xl p-8 text-center">
            <p className="text-2xl text-white font-medium leading-relaxed transition-all duration-1000">
              {loveMessages[currentMessage]}
            </p>
          </div>
        </div>

        {/* Estadísticas adicionales */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-center text-white">
              <div className="text-3xl font-bold mb-2">8,760</div>
              <div className="opacity-90">Horas de amor</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-6 text-center text-white">
              <div className="text-3xl font-bold mb-2">525,600</div>
              <div className="opacity-90">Minutos juntos</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-6 text-center text-white">
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="opacity-90">Besos y abrazos</div>
            </div>
          </div>
        </div>

        {/* Sección de imagen */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Nuestro Momento Especial</h3>
            
            {/* Botón para insertar vínculo */}
            <a 
              href="./index1.html"  // Esto sube un nivel y busca index.html
              target="_blank"       // Abre en nueva pestaña
              className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-all mb-6"
            >
              <Heart className="w-5 h-5 mr-2" />
              !Haz Click Aqui, Amorcito!
            </a>
            
          
            <div className="bg-white bg-opacity-30 rounded-2xl p-8 mb-6">
              {imageUrl ? (
                <img 
                  
                  alt="Nuestro momento especial"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center">
                  <img 
                    src={`${process.env.PUBLIC_URL}/qr1.jpg`} 
                    alt="Código QR"
                    className="qr-image"
                  />
                </div>
              )}
            </div>
            <p className="text-white text-lg opacity-90">
              "Un año de amor, risas y momentos inolvidables. Gracias por hacer cada día más especial que el anterior."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryApp;