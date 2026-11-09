import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const esValido = formData.nombre.trim() !== '' && 
                    formData.email.trim() !== '' && 
                    formData.mensaje.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (esValido) {
      setEnviado(true);
    }
  };

  const handleReset = () => {
    setFormData({ nombre: '', email: '', mensaje: '' });
    setEnviado(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">Formulario de Contacto</h1>
        
        {enviado ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg text-center">
            <p className="font-semibold text-lg mb-2">¡Gracias por tu mensaje!</p>
            <p className="text-sm mb-4">Hemos recibido tu información correctamente.</p>
            <button
              onClick={handleReset}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={!esValido}
              className={`w-full py-2.5 px-4 rounded-lg font-medium text-white transition-colors ${
                esValido 
                  ? 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer' 
                  : 'bg-slate-300 cursor-not-allowed'
              }`}
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;