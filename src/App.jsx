import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  DollarSign, 
  Target, 
  CreditCard, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  MessageCircle, 
  Shield, 
  Smartphone, 
  CheckCircle,
  ChevronDown,
  Star,
  Clock
} from 'lucide-react'
import dashboardMain from './assets/dashboard-main.png'
import agenda from './assets/agenda.png'
import investments from './assets/investments.png'
import goals from './assets/goals.png'
import transactions from './assets/transactions.png'
import creditCards from './assets/credit-cards.png'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutos em segundos
  const [faqOpen, setFaqOpen] = useState({})

  // Timer de contagem regressiva
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 30 * 60 // Reinicia para 30 minutos
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const scrollToOffer = () => {
    document.getElementById('oferta').scrollIntoView({ behavior: 'smooth' })
  }

  const handleCTAClick = () => {
    window.open(/*CUPOM SIMPLIFIC30*/'https://app.monetizze.com.br/checkout/DPA355167', '_blank')
  }

  /* link checkout cupom 1,99:  https://app.monetizze.com.br/checkout/CDR481590*/

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-600 text-white px-4 py-2 text-sm font-medium">
                  🚀 Lançamento Especial
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Cansado da desordem financeira? 
                  <span className="text-emerald-300 block">
                    Assuma o controle e alcance a tão sonhada liberdade financeira
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-emerald-100 leading-relaxed">
                  O aplicativo completo que organiza suas finanças, te dá dicas, sugestões, planeja suas metas, te lembra de compromissos e te acompanha até no WhatsApp. Uma plataforma para chamar de 'SUA'
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCTAClick}
                  size="lg" 
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Quero meu Simplific Pro
                </Button>
                <Button 
                  onClick={scrollToOffer}
                  variant="outline" 
                  size="lg" 
                  className="border-emerald-300 text-emerald-100 hover:bg-emerald-800 px-8 py-4 text-lg rounded-lg"
                >
                  Ver Oferta Especial
                </Button>
              </div>

              <div className="flex items-center gap-6 text-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Sem burocracia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Cancele quando quiser</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Suporte completo</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={dashboardMain} 
                  alt="Dashboard do Simplific Pro" 
                  className="w-full rounded-2xl shadow-2xl border-4 border-emerald-300/30"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Como o Simplific Pro te Ajuda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada módulo foi pensado para simplificar sua vida financeira e te dar o controle total que você sempre quis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dashboard */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 group-hover:bg-emerald-200 transition-colors">
                  <BarChart3 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Inteligente</h3>
                <p className="text-gray-600 leading-relaxed">
                  Visualize toda sua situação financeira em uma tela. Receitas, despesas, investimentos e metas, tudo organizado e fácil de entender. E ainda, tenha acesso à sua saúde financeira atual. 
                </p>
              </CardContent>
            </Card>

            {/* Dashboard */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 group-hover:bg-emerald-200 transition-colors">
                  <BarChart3 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Balanço Geral</h3>
                <p className="text-gray-600 leading-relaxed">
                  Acompanhe o balanço da sua vida financeira por período, fluxo de caixa, investimentos, metas e cartões de crédito em relatórios inteligentes
                </p>
              </CardContent>
            </Card>
            {/* Lançamentos */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lançamentos inteligentes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Registre receitas e despesas em segundos, na plataforma ou pelo whatsapp. Categorize automaticamente e acompanhe seus gastos sem complicação.
                </p>
              </CardContent>
            </Card>


            {/* Planejamento */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Planeje seus gastos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Anotar depois que gastou não te garante liberdade financeira. 
                  Por isso, o módulo planejamento te ajuda a adquirir essa tão sonhada liberdade.
                  </p>
              </CardContent>
            </Card>

            {/* Cartões de Crédito */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6 group-hover:bg-purple-200 transition-colors">
                  <CreditCard className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Controle de Cartões</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gerencie todos seus cartões em um só lugar. Acompanhe limites, faturas e nunca mais se perca nos vencimentos.
                </p>
              </CardContent>
            </Card>

            {/* Metas */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-6 group-hover:bg-yellow-200 transition-colors">
                  <Target className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Metas Ambiciosas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transforme seus maiores sonhos em planos concretos. Defina objetivos, acompanhe o progresso e visualize suas conquistas se tornando realidade.
                </p>
              </CardContent>
            </Card>

            {/* Investimentos */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Carteira de Investimentos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Acompanhe sua carteira integrada com as principais corretoras. Veja rentabilidade, diversificação e tome decisões inteligentes.
                </p>
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6 group-hover:bg-red-200 transition-colors">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Agenda de compromissos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nunca mais esqueça um vencimento. Organize pagamentos, recebimentos, reuniões, compromissos e o que você quiser em uma agenda inteligente. Seja lembrado de cada compromisso diretamente no Whatsapp.
                </p>
              </CardContent>
            </Card>

            {/* Simplific IA*/}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6 group-hover:bg-red-200 transition-colors">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Simplific IA</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tenha acesso ao chat inteligência Simplific na própria plataforma e faça tudo por lá: Registre, agende, invista... O que quiser
                </p>
              </CardContent>
            </Card>


          </div>

          {/* WhatsApp Diferencial */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-white/20 text-white px-4 py-2 text-sm font-medium">
                        🎯📱 O Assessor Simplific
                      </Badge>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                      Seu Assessor Financeiro no WhatsApp
                    </h3>
                    <p className="text-xl text-green-100 leading-relaxed mb-8">
                      Registre gastos, consulte seu orçamento, agende compromissos, receba lembretes e tire dúvidas diretamente do seu WhatsApp, por texto ou por áudio
                       você escolhe. 
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-200" />
                        <span className="text-lg">Acesso fácil e didático</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-200" />
                        <span className="text-lg">Integrado com principais corretoras</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-200" />
                        <span className="text-lg">Comandos por voz ou texto</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-200" />
                        <span className="text-lg">Sua plataforma direto no whatsapp</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="bg-white/20 rounded-2xl p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <Smartphone className="w-5 h-5" />
                            <span className="font-semibold">Você no WhatsApp</span>
                          </div>
                          <p className="text-sm">"Oi Simplific, gastei R$ 45 no almoço hoje"</p>
                        </div>
                        <div className="bg-green-400/30 rounded-2xl p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-semibold">Simplific IA</span>
                          </div>
                          <p className="text-sm">"✅ Lançamento registrado! Categoria: Alimentação. Você tem R$ 155 disponíveis no orçamento. 🚨Alerta! Ainda estamos no inicio do mês 
                          e você já comprometeu 80% do seu orçamento para alimentação."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oferta Section */}
      <section id="oferta" className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Badge className="bg-yellow-500 text-yellow-900 px-6 py-3 text-lg font-bold mb-6">
              ⚡ Oferta Especial de Lançamento
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Sua Oportunidade
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Acesso ilimitado a todas as funcionalidades por apenas
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12">
          <Badge className="bg-yellow-500 text-yellow-900 px-6 py-3 text-lg font-bold mb-6">
              ⚡ De <span className="font-bold text-2xl line-through decoration-red-500">89,90</span> por apenas
            </Badge>
            <div className="text-center mb-8">
              <div className="text-6xl lg:text-7xl font-bold text-emerald-300 mb-4">
                R$ 24,90
              </div>
              <div className="text-2xl text-emerald-100 mb-6">
                Por mês
              </div>
              <p className="text-lg text-emerald-200">
                Menos de um cafézinho por dia.
              </p>
              <p className="text-lg text-emerald-200">
                Menos de R$ 0,85 por dia para ter sua vida financeira em ordem
              </p>
            </div>

            {/* Timer */}
            <div className="bg-red-500/20 border border-red-400/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Clock className="w-6 h-6 text-red-300" />
                <span className="text-lg font-semibold text-red-200">Oferta expira em:</span>
              </div>
              <div className="text-4xl font-bold text-red-300 font-mono">
                {formatTime(timeLeft)}
              </div>
            </div>

            <Button 
              onClick={handleCTAClick}
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Quero aproveitar agora
            </Button>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-emerald-200">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Dados 100% seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Suporte premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre o Simplific Pro
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Meus dados financeiros estão seguros?",
                answer: "Sim! Utilizamos criptografia de ponta e seguimos os mais rigorosos padrões de segurança bancária. Seus dados são protegidos com a mesma tecnologia usada pelos maiores bancos do mundo."
              },
              {
                question: "Posso cancelar a assinatura quando quiser?",
                answer: "Claro! Você pode cancelar sua assinatura a qualquer momento, sem burocracia e sem taxas de cancelamento. Seu acesso continuará até o final do período já pago."
              },
              {
                question: "O Simplific Pro funciona no celular?",
                answer: "Sim! A plataforma é totalmente responsiva e funciona perfeitamente em celulares, tablets e computadores. Além disso, você pode usar todas as funcionalidades diretamente pelo WhatsApp."
              },
              {
                question: "Como funciona a integração com corretoras?",
                answer: "O Simplific Pro se conecta de forma segura com as principais corretoras do mercado, permitindo que você acompanhe seus investimentos em tempo real, sem precisar acessar múltiplas plataformas."
              },
              {
                question: "Preciso de conhecimento técnico para usar?",
                answer: "Não! O Simplific Pro foi desenvolvido para ser extremamente intuitivo e fácil de usar. Nossa interface é didática e nosso assistente de IA te ajuda em cada passo."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        faqOpen[index] ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {faqOpen[index] && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronto para simplificar suas finanças de vez?
          </h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram sua vida financeira com o Simplific Pro.
          </p>
          
          <Button 
            onClick={handleCTAClick}
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Quero meu Simplific Pro
          </Button>

          <div className="mt-8 text-emerald-200">
            <p>✨ Comece hoje mesmo • Sem compromisso • Cancele quando quiser</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Simplific Pro</h3>
            <p className="text-gray-400 mb-8">
              A solução completa para sua vida financeira
            </p>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-sm text-gray-500">
                © 2025 Simplific Pro. Todos os direitos reservados.
                contato@simplificpro.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

