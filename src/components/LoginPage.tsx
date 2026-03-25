export function LoginPage() {

   return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f2a] relative overflow-hidden">
      
      {/* Glow fundo */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Card */}
      <div className="relative w-[360px] p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            ⚡
          </div>
          <h1 className="text-white font-semibold text-lg">NEON-TECH</h1>
        </div>

        <h2 className="text-white text-2xl font-bold mb-1">
          Entrar na sua conta
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Bem-vindo de volta ao futuro
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-gray-300 text-xs">E-MAIL</label>
          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-2 mt-1">
            <span className="mr-2">📧</span>
            <input
              type="email"
              placeholder="seu@email.com"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Senha */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <label className="text-gray-300 text-xs">SENHA</label>
            <span className="text-blue-400 text-xs">
              Esqueceu sua senha?
            </span>
          </div>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-2 mt-1">
            <span className="mr-2">🔒</span>
            <input
              type="password"
              placeholder="********"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-500"
            />
            <span className="ml-2">👁️</span>
          </div>
        </div>

        {/* Botão */}
        <button className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold mt-4">
          Entrar
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-400 text-xs mx-2">OU CONTINUE COM</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Social */}
        <div className="flex gap-3">
          <button className="flex-1 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm">
            Google
          </button>
          <button className="flex-1 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm">
            Facebook
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Não tem conta?{" "}
          <span className="text-blue-400">Criar conta</span>
        </p>
      </div>
    </div>
  );
}

