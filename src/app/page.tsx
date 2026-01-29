"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactForm } from "@/components/ContactForm";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { MobileTabsMenu } from "@/components/MobileTabsMenu";
import {
  CheckCircle2,
  Car,
  Search,
  ShoppingCart,
  Truck,
  FileCheck,
  ClipboardCheck,
  Phone,
  Mail,
  Send
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="pt-20">
        <Tabs defaultValue="home" className="w-full">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                <div className="flex items-center gap-2">
                  <Car className="h-8 w-8 text-red-600" />
                  <span className="text-xl font-bold">БТА ТОРГ</span>
                </div>

                {/* Desktop tabs */}
                <TabsList className="hidden lg:flex items-center justify-center border-0 rounded-none h-auto bg-transparent gap-2">
                  <TabsTrigger value="home" className="text-lg px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-red-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 font-semibold">Главная</TabsTrigger>
                  <TabsTrigger value="about" className="text-lg px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-red-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 font-semibold">О компании</TabsTrigger>
                  <TabsTrigger value="services" className="text-lg px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-red-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 font-semibold">Услуги и этапы</TabsTrigger>
                  <TabsTrigger value="examples" className="text-lg px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-red-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 font-semibold">Примеры заказов</TabsTrigger>
                  <TabsTrigger value="faq" className="text-lg px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-red-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 font-semibold">FAQ</TabsTrigger>
                  <TabsTrigger value="contact" className="text-lg px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:text-red-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 font-semibold">Контакты</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-4">
                  <Button
                    className="hidden sm:flex bg-[#0088cc] hover:bg-[#006699]"
                    asChild
                  >
                    <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
                      <Send className="mr-2 h-4 w-4" />
                      Telegram
                    </a>
                  </Button>

                  {/* Mobile menu */}
                  <MobileTabsMenu />
                </div>
              </div>
            </div>
          </nav>

          {/* Главная */}
          <TabsContent value="home" className="mt-0">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center overflow-hidden py-12">
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: 'url("/hero-bg.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: '35% center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent" />
              </div>

              <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-3xl">
                  <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 bg-green-600 text-white border-0">
                    Официальная компания
                  </Badge>

                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                    Пригон автомобилей из Европы в Россию под ключ
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    Проверенные авто, полный контроль на каждом этапе, полная прозрачность затрат
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-[#0088cc] hover:bg-[#006699] text-lg px-8 py-6 shadow-2xl pulse-slow shine"
                      asChild
                    >
                      <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
                        <Send className="mr-2 h-5 w-5 bounce-subtle" />
                        Смотреть авто в Telegram
                      </a>
                    </Button>
                    <ContactForm />
                  </div>

                  <div className="mt-12 grid grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-3xl font-bold text-white mb-1">1000+</div>
                      <div className="text-sm text-gray-200">Авто доставлено</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-3xl font-bold text-white mb-1">4</div>
                      <div className="text-sm text-gray-200">Страны Европы</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-3xl font-bold text-white mb-1">24/7</div>
                      <div className="text-sm text-gray-200">Поддержка</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Как это работает */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Как это работает</h2>
                  <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
                    Простой и прозрачный процесс — от выбора до получения авто
                  </p>
                </ScrollAnimation>

                <div className="max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    <ScrollAnimation animation="fade-up" delay={0}>
                      <div className="relative h-full">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 h-full">
                          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            1
                          </div>
                          <div className="mt-4 mb-4">
                            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                              <Search className="h-8 w-8 text-blue-600" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Выбираем авто</h3>
                          <p className="text-gray-600 text-center leading-relaxed">
                            Подбираем идеальный вариант под ваш бюджет и требования
                          </p>
                        </div>
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={100}>
                      <div className="relative h-full">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 h-full">
                          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            2
                          </div>
                          <div className="mt-4 mb-4">
                            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                              <ClipboardCheck className="h-8 w-8 text-blue-600" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Проверяем историю</h3>
                          <p className="text-gray-600 text-center leading-relaxed">
                            Полная диагностика и проверка по всем базам данных
                          </p>
                        </div>
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-300 to-transparent"></div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={200}>
                      <div className="relative h-full">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 h-full">
                          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            3
                          </div>
                          <div className="mt-4 mb-4">
                            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                              <Truck className="h-8 w-8 text-blue-600" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Доставляем в срок</h3>
                          <p className="text-gray-600 text-center leading-relaxed">
                            Быстрая и безопасная доставка с отслеживанием
                          </p>
                        </div>
                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={300}>
                      <div className="relative h-full">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 h-full">
                          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            4
                          </div>
                          <div className="mt-4 mb-4">
                            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                              <FileCheck className="h-8 w-8 text-blue-600" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Оформляем документы</h3>
                          <p className="text-gray-600 text-center leading-relaxed">
                            Берём на себя всю таможню и регистрацию
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>

                  {/* CTA */}
                  <ScrollAnimation animation="fade-up" delay={400}>
                    <div className="mt-12 text-center">
                      <p className="text-gray-600 mb-6 text-lg">
                        Готовы начать? Свяжитесь с нами прямо сейчас!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#0088cc] to-[#006699] hover:from-[#006699] hover:to-[#005588] text-white text-lg px-8 py-6 shadow-xl"
                          asChild
                        >
                          <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
                            <Send className="mr-2 h-5 w-5" />
                            Связаться в Telegram
                          </a>
                        </Button>
                        <ContactForm />
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </section>

            {/* Чего мы НЕ делаем */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Чего мы НЕ делаем</h2>
                  <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                    Честность и прозрачность — наши главные принципы
                  </p>
                </ScrollAnimation>

                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    <ScrollAnimation animation="fade-right" delay={0}>
                      <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all h-full">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">✕</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1 text-gray-900">Не продаём битки и утопленников</h3>
                          <p className="text-gray-600">Все автомобили проходят тщательную проверку на СТО и по базам данных</p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-left" delay={100}>
                      <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all h-full">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">✕</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1 text-gray-900">Не работаем без договора</h3>
                          <p className="text-gray-600">Всегда официальный договор с гарантиями и прописанными обязательствами</p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-right" delay={200}>
                      <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all h-full">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">✕</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1 text-gray-900">Не меняем цену после договорённостей</h3>
                          <p className="text-gray-600">Фиксированная стоимость в договоре — никаких доплат и сюрпризов</p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-left" delay={300}>
                      <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all h-full">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">✕</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1 text-gray-900">Не скрываем дефекты и историю</h3>
                          <p className="text-gray-600">Полная прозрачность — предоставляем все отчёты и фото до покупки</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </section>

            {/* Частые страхи клиентов */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Мы знаем, чего вы боитесь</h2>
                  <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
                    И предусмотрели защиту от каждого риска
                  </p>
                </ScrollAnimation>

                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Страх 1 */}
                    <ScrollAnimation animation="fade-right" delay={0}>
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
                          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="text-3xl">😰</span>
                            Скрученный пробег
                          </h3>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold text-lg mb-2 text-green-700">Наше решение:</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Проверка VIN по европейским базам</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Сервисная история автомобиля</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Детальные фото приборной панели</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Страх 2 */}
                    <ScrollAnimation animation="fade-left" delay={100}>
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
                          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="text-3xl">😨</span>
                            Утопленник или конструктор
                          </h3>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold text-lg mb-2 text-green-700">Наше решение:</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Проверка на участие в ДТП и затоплении</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Осмотр на профессиональном СТО</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Видеоотчёт с детальным осмотром</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Страх 3 */}
                    <ScrollAnimation animation="fade-right" delay={200}>
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
                          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="text-3xl">😱</span>
                            Скрытые дефекты
                          </h3>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold text-lg mb-2 text-green-700">Наше решение:</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Диагностика всех узлов и агрегатов</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Фото и видео отчёты в реальном времени</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Право отказа до момента покупки</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Страх 4 */}
                    <ScrollAnimation animation="fade-left" delay={300}>
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                        <div className="bg-gradient-to-r from-red-500 to-rose-500 p-6">
                          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="text-3xl">💸</span>
                            Пропажа денег
                          </h3>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold text-lg mb-2 text-green-700">Наше решение:</h4>
                              <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Официальный договор с ООО</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Поэтапная оплата по договору</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="text-blue-600 mt-1">✓</span>
                                  <span>Полная отчётность по каждому платежу</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>

                  {/* CTA */}
                  <ScrollAnimation animation="fade-up" delay={400}>
                    <div className="mt-12 text-center bg-white rounded-2xl shadow-xl p-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Остались вопросы или сомнения?</h3>
                      <p className="text-gray-600 mb-6 text-lg">
                        Мы готовы развеять все ваши страхи — свяжитесь с нами прямо сейчас
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#0088cc] to-[#006699] hover:from-[#006699] hover:to-[#005588] text-white text-lg px-8 py-6 shadow-xl"
                          asChild
                        >
                          <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
                            <Send className="mr-2 h-5 w-5" />
                            Задать вопрос в Telegram
                          </a>
                        </Button>
                        <ContactForm />
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </section>

            {/* Почему выбирают нас */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Почему выбирают нас</h2>
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {advantages.map((advantage, index) => (
                    <ScrollAnimation
                      key={index}
                      animation="fade-up"
                      delay={index * 80}
                    >
                      <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                        <div className="flex-shrink-0">
                          <CheckCircle2 className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{advantage.title}</h3>
                          <p className="text-gray-600">{advantage.description}</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </section>

            {/* Telegram блок */}
            <section className="py-24 bg-gradient-to-r from-[#0088cc] to-[#006699] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse" />
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full animate-pulse delay-75" />
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center text-white">
                  <Send className="h-20 w-20 mx-auto mb-6 animate-bounce" />
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Актуальные автомобили из Европы — в нашем Telegram-канале
                  </h2>
                  <p className="text-xl mb-8 text-white/90">
                    Получайте свежие предложения ежедневно. Фото, цены, характеристики.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-[#0088cc] hover:bg-gray-100 text-xl px-12 py-7 font-bold shadow-2xl pulse-slow hover-lift"
                    asChild
                  >
                    <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
                      Перейти в Telegram
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            {/* Примеры автомобилей */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Примеры доставленных автомобилей</h2>
                  <p className="text-center text-gray-600 mb-12 text-lg">
                    Реальные кейсы наших клиентов — от бюджетных до премиум-класса
                  </p>
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {carExamples.map((car, index) => (
                    <ScrollAnimation
                      key={index}
                      animation="scale-up"
                      delay={index * 100}
                    >
                      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full hover-lift glow-on-hover">
                      <div className="relative h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.model}
                          className="w-full h-full object-cover scale-hover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{car.model}</h3>
                          <p className="text-gray-600 text-sm">{car.year} • {car.country}</p>
                        </div>
                        <div className="space-y-3">
                          {car.engine ? (
                            <>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-sm text-gray-500 mb-1">Двигатель</div>
                                <div className="font-semibold text-gray-900">{car.engine}</div>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-sm text-gray-500 mb-1">Коробка передач</div>
                                <div className="font-semibold text-gray-900">{car.transmission}</div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">Цена в Европе:</span>
                                <span className="font-bold">{car.priceEU}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">Доставка + таможня:</span>
                                <span className="font-bold text-red-600">{car.delivery}</span>
                              </div>
                            </>
                          )}
                          <div className="border-t pt-3 flex justify-between items-center">
                            <span className="text-gray-600">Итого:</span>
                            <span className="font-bold text-xl text-blue-600">{car.total}</span>
                          </div>
                        </div>
                      </CardContent>
                      </Card>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </section>

            {/* Отзывы клиентов */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы наших клиентов</h2>
                  <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                    Реальные истории людей, которые доверили нам пригон своих автомобилей
                  </p>
                </ScrollAnimation>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Отзыв 1 */}
                  <ScrollAnimation animation="fade-up" delay={0}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-t-4 border-blue-500 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          ДА
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">Дмитрий Александров</h3>
                          <p className="text-gray-500 text-sm">BMW X5, 2020</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-grow mb-4">
                        "Пригнал BMW X5 из Германии. Ребята действительно держали в курсе на каждом этапе - присылали фото, видео, все документы. Цена не изменилась ни на копейку от той, что обговорили. Машина приехала ровно через 3 недели, как и обещали. Очень доволен!"
                      </p>
                      <div className="text-sm text-gray-500 border-t pt-4">
                        <span className="font-semibold">Ноябрь 2024</span>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Отзыв 2 */}
                  <ScrollAnimation animation="fade-up" delay={100}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-t-4 border-blue-500 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          МК
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">Марина Кузнецова</h3>
                          <p className="text-gray-500 text-sm">Audi Q5, 2019</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-grow mb-4">
                        "Долго боялась связываться с пригоном, но здесь всё объяснили простым языком. Проверили машину на СТО, показали полный отчёт. Особенно понравилось, что можно было отказаться до покупки. В итоге получила Audi мечты за адекватные деньги. Спасибо!"
                      </p>
                      <div className="text-sm text-gray-500 border-t pt-4">
                        <span className="font-semibold">Октябрь 2024</span>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Отзыв 3 */}
                  <ScrollAnimation animation="fade-up" delay={200}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-t-4 border-purple-500 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          ИВ
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">Игорь Волков</h3>
                          <p className="text-gray-500 text-sm">Mazda CX-5, 2018</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-grow mb-4">
                        "Сравнивал с покупкой в России - выгода почти 400 тысяч! Всё прошло по договору, оплата по этапам. Машина приехала чистая, все документы в порядке. Даже помогли с постановкой на учёт. Рекомендую всем, кто хочет сэкономить без риска."
                      </p>
                      <div className="text-sm text-gray-500 border-t pt-4">
                        <span className="font-semibold">Сентябрь 2024</span>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>

                {/* CTA после отзывов */}
                <ScrollAnimation animation="fade-up" delay={300}>
                  <div className="mt-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border-2 border-blue-200">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Станьте следующим довольным клиентом!</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Присоединяйтесь к сотням наших клиентов, которые уже получили автомобили мечты
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#0088cc] to-[#006699] hover:from-[#006699] hover:to-[#005588] text-white text-lg px-8 py-6 shadow-xl"
                        asChild
                      >
                        <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
                          <Send className="mr-2 h-5 w-5" />
                          Начать подбор авто
                        </a>
                      </Button>
                      <ContactForm />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </section>

            {/* Ключевые преимущества */}
            <section className="py-20 bg-white border-t-2 border-gray-100">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <ScrollAnimation animation="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Преимущества работы с нами</h2>
                    <p className="text-center text-gray-600 mb-12 text-lg">
                      Мы делаем процесс пригона простым, безопасным и прозрачным
                    </p>
                  </ScrollAnimation>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ScrollAnimation animation="scale-up" delay={0}>
                      <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl h-full">
                        <div className="bg-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                          <Search className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Быстрый подбор авто</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Находим идеальный вариант под ваш бюджет и требования за 3-5 дней
                        </p>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="scale-up" delay={100}>
                      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl h-full">
                        <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                          <FileCheck className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Юридическая чистота</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Проверяем историю по всем базам, гарантируем отсутствие проблем
                        </p>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="scale-up" delay={200}>
                      <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl h-full">
                        <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                          <Truck className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Доставка под ключ</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Берём на себя всё: от покупки до постановки на учёт в России
                        </p>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* О компании */}
          <TabsContent value="about" className="mt-0">
            <section className="py-20 bg-gray-50 min-h-screen">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании БТА ТОРГ</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Мы специализируемся на пригоне автомобилей из Германии, Польши, Бельгии и Нидерландов.
                      Работаем официально с 2020 года, предоставляя полный спектр услуг от подбора до постановки на учет.
                    </p>
                  </div>
                </ScrollAnimation>

                {/* История и опыт */}
                <div className="max-w-6xl mx-auto mb-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ScrollAnimation animation="fade-right">
                      <div>
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">Наша история</h3>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                          <p>
                            <strong className="text-red-600">С 2020 года</strong> мы помогаем клиентам привозить автомобили из Европы.
                            За это время мы доставили более 1000+ автомобилей для частных лиц и компаний по всей России.
                          </p>
                          <p>
                            Начинали с небольшой команды энтузиастов, которые сами столкнулись со сложностями пригона авто.
                            Изучили все тонкости процесса, наладили контакты с проверенными поставщиками в Европе,
                            разобрались в таможенном законодательстве.
                          </p>
                          <p>
                            Сегодня мы — команда профессионалов с офисом в Тольятти и партнёрами в 4 странах Европы.
                            Работаем полностью легально, имеем все необходимые лицензии и разрешения.
                          </p>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-left" delay={100}>
                      <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h4 className="text-2xl font-bold mb-6 text-gray-900">Наши достижения</h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <CheckCircle2 className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                              <div className="font-bold text-2xl text-red-600">1000+</div>
                              <div className="text-gray-600">Доставленных автомобилей</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <CheckCircle2 className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                              <div className="font-bold text-2xl text-red-600">6 лет</div>
                              <div className="text-gray-600">Опыта на рынке</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <CheckCircle2 className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                              <div className="font-bold text-2xl text-red-600">4 страны</div>
                              <div className="text-gray-600">Партнёры в Европе</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <CheckCircle2 className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                              <div className="font-bold text-2xl text-red-600">24/7</div>
                              <div className="text-gray-600">Поддержка клиентов</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>

                {/* Миссия и ценности */}
                <ScrollAnimation animation="fade-up">
                  <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-blue-600 to-red-700 rounded-2xl shadow-xl p-12 text-white text-center">
                    <h3 className="text-3xl font-bold mb-6">Наша миссия</h3>
                    <p className="text-xl leading-relaxed">
                      Сделать покупку европейского автомобиля простой, прозрачной и безопасной для каждого клиента.
                      Мы верим, что качественный автомобиль по справедливой цене должен быть доступен каждому.
                    </p>
                  </div>
                </ScrollAnimation>

                {/* Преимущества работы с нами */}
                <div className="max-w-6xl mx-auto mb-16">
                  <ScrollAnimation animation="fade-up">
                    <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">Почему нам доверяют</h3>
                  </ScrollAnimation>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation animation="fade-up" delay={0}>
                      <Card className="h-full hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <FileCheck className="h-6 w-6 text-red-600" />
                          </div>
                          <CardTitle>Официально и законно</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Работаем как ООО "БТА ТОРГ", все документы, договоры, полная отчётность.
                            ИНН: 6324113598. Проверить можно на РусПрофиле.
                          </p>
                        </CardContent>
                      </Card>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={100}>
                      <Card className="h-full hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <CheckCircle2 className="h-6 w-6 text-red-600" />
                          </div>
                          <CardTitle>Прозрачность на каждом этапе</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Фото и видео отчёты при осмотре, покупке, доставке.
                            Вы всегда знаете, где находится ваш автомобиль и что с ним происходит.
                          </p>
                        </CardContent>
                      </Card>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={200}>
                      <Card className="h-full hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Phone className="h-6 w-6 text-red-600" />
                          </div>
                          <CardTitle>Всегда на связи</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Поддержка 24/7 через телефон, Telegram, WhatsApp.
                            Ответим на любые вопросы в течение часа.
                          </p>
                        </CardContent>
                      </Card>
                    </ScrollAnimation>
                  </div>
                </div>

                {/* География работы */}
                <ScrollAnimation animation="fade-up">
                  <div className="max-w-4xl mx-auto mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">География работы</h3>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-bold mb-4 text-red-600">Откуда привозим</h4>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600" />
                              <span>🇩🇪 Германия — премиум и бизнес-класс</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600" />
                              <span>🇵🇱 Польша — бюджетные варианты</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600" />
                              <span>🇧🇪 Бельгия — аукционы</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600" />
                              <span>🇳🇱 Нидерланды — эксклюзивные модели</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-4 text-red-600">Куда доставляем</h4>
                          <p className="text-gray-700 mb-4">
                            Доставляем автомобили по всей России:
                          </p>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Тольятти и Самарская область</li>
                            <li>• Тольятти и Самарская область</li>
                            <li>• Санкт-Петербург</li>
                            <li>• Казань, Екатеринбург</li>
                            <li>• И другие города России</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>


              </div>
            </section>
          </TabsContent>

          {/* Услуги */}
          <TabsContent value="services" className="mt-0">
            <section className="py-20 bg-white min-h-screen">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши услуги</h2>
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {services.map((service, index) => (
                    <ScrollAnimation
                      key={index}
                      animation="fade-up"
                      delay={index * 100}
                    >
                      <Card className="border-2 hover:border-blue-600 transition-all duration-300 hover:shadow-xl h-full hover-lift">
                        <CardHeader>
                          <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                            <service.icon className="h-7 w-7 text-white" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{service.description}</p>
                        </CardContent>
                      </Card>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </section>

            {/* Этапы работы */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Этапы работы</h2>
                </ScrollAnimation>
                <div className="max-w-4xl mx-auto">
                  {steps.map((step, index) => (
                    <ScrollAnimation
                      key={index}
                      animation="fade-right"
                      delay={index * 150}
                    >
                      <div className="flex gap-6 mb-12 last:mb-0">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="pt-3">
                          <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600 text-lg">{step.description}</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Примеры */}
          <TabsContent value="examples" className="mt-0">
            <section className="py-20 bg-gray-50 min-h-screen">
              <div className="container mx-auto px-4">
                {/* CTA блок с призывом в Telegram */}
                <ScrollAnimation animation="fade-up">
                  <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-gradient-to-r from-[#0088cc] to-[#006699] rounded-2xl shadow-2xl p-12 text-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse" />
                        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full animate-pulse delay-75" />
                      </div>
                      <div className="relative z-10">
                        <Send className="h-20 w-20 mx-auto mb-6 text-white animate-bounce" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          Актуальные варианты в нашем Telegram
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                          Ежедневно добавляем новые автомобили в наш Telegram-канал. Свежие предложения, детальные фото, видео и актуальные цены — всё в одном месте!
                        </p>
                        <Button
                          size="lg"
                          className="bg-white text-[#0088cc] hover:bg-gray-100 text-xl px-12 py-7 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                          asChild
                        >
                          <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
                            <Send className="mr-3 h-6 w-6" />
                            Перейти в Telegram канал
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Примеры доставленных автомобилей</h2>
                  <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                    Реальные кейсы наших клиентов — от бюджетных до премиум-класса
                  </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                  {carExamples.map((car, index) => (
                    <ScrollAnimation
                      key={index}
                      animation="scale-up"
                      delay={index * 100}
                    >
                      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full hover-lift glow-on-hover">
                      <div className="relative h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.model}
                          className="w-full h-full object-cover scale-hover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{car.model}</h3>
                          <p className="text-gray-600 text-sm">{car.year} • {car.country}</p>
                        </div>
                        <div className="space-y-3">
                          {car.engine ? (
                            <>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-sm text-gray-500 mb-1">Двигатель</div>
                                <div className="font-semibold text-gray-900">{car.engine}</div>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="text-sm text-gray-500 mb-1">Коробка передач</div>
                                <div className="font-semibold text-gray-900">{car.transmission}</div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">Цена в Европе:</span>
                                <span className="font-bold">{car.priceEU}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">Доставка + таможня:</span>
                                <span className="font-bold text-red-600">{car.delivery}</span>
                              </div>
                            </>
                          )}
                          <div className="border-t pt-3 flex justify-between items-center">
                            <span className="text-gray-600">Итого:</span>
                            <span className="font-bold text-xl text-blue-600">{car.total}</span>
                          </div>
                        </div>
                      </CardContent>
                      </Card>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq" className="mt-0">
            <section className="py-20 bg-white min-h-screen">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Частые вопросы</h2>
                  <p className="text-center text-gray-600 mb-12 text-lg">
                    Часть популярных вопросов мы собрали здесь. Остальные ответы вы найдёте в нашем Telegram.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-up" delay={200}>
                  <div className="max-w-4xl mx-auto space-y-8">
                    {/* Про услуги */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Про услуги</h3>
                      <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm border">
                        <AccordionItem value="service-1">
                          <AccordionTrigger>Что входит в услугу пригона авто?</AccordionTrigger>
                          <AccordionContent>
                            Услуга "под ключ" включает: подбор автомобиля по вашим критериям, проверку истории и состояния на СТО, покупку и оформление в Европе, доставку в Россию, таможенное оформление и все необходимые платежи, постановку на учёт в ГИБДД. Вы получаете готовый автомобиль с полным пакетом документов.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="service-2">
                          <AccordionTrigger>Из каких стран привозите автомобили?</AccordionTrigger>
                          <AccordionContent>
                            Работаем с Германией, Польшей, Бельгией и Нидерландами — это основные рынки с наилучшим соотношением цены и качества. В Германии большой выбор премиум-класса, в Польше — бюджетные варианты, в Нидерландах и Бельгии интересные предложения на аукционах.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="service-3">
                          <AccordionTrigger>Какие типы автомобилей доступны?</AccordionTrigger>
                          <AccordionContent>
                            Можем пригнать любой легковой автомобиль: седаны, хэтчбеки, универсалы, кроссоверы, внедорожники, минивэны. Работаем как с массовыми брендами (VW, Toyota, BMW), так и с премиум-сегментом (Mercedes, Audi, Porsche). Возраст и пробег автомобиля обсуждаются индивидуально.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="service-4">
                          <AccordionTrigger>Можно ли помочь просто с проверкой уже найденного авто?</AccordionTrigger>
                          <AccordionContent>
                            Да, конечно! Если вы нашли автомобиль самостоятельно на европейских площадках, мы можем проверить его историю, провести осмотр на СТО и организовать покупку с доставкой. Также поможем с подбором — расскажем о плюсах и минусах конкретной модели.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="service-5">
                          <AccordionTrigger>Работаете ли вы с юридическими лицами (ИП, ООО)?</AccordionTrigger>
                          <AccordionContent>
                            Да, работаем как с физическими, так и с юридическими лицами. Для компаний оформляем все документы по требованиям бухгалтерии, предоставляем договор, акты, счета. Возможна работа с НДС.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="service-6">
                          <AccordionTrigger>Помогаете ли вы с постановкой автомобиля на учёт в России?</AccordionTrigger>
                          <AccordionContent>
                            Да, помогаем с постановкой на учёт в ГИБДД. Подготавливаем все документы, консультируем по процессу. При необходимости можем сопроводить вас в ГИБДД или полностью взять эту задачу на себя (по доверенности).
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    {/* Про деньги */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Про деньги</h3>
                      <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm border">
                        <AccordionItem value="money-1">
                          <AccordionTrigger>Как рассчитывается итоговая стоимость автомобиля?</AccordionTrigger>
                          <AccordionContent>
                            Итоговая стоимость = цена автомобиля в Европе + доставка + таможенные платежи + наша комиссия. Таможенные платежи зависят от объёма двигателя, возраста и стоимости авто. Рассчитаем точную стоимость после подбора конкретного автомобиля.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="money-2">
                          <AccordionTrigger>Как рассчитывается ваша комиссия?</AccordionTrigger>
                          <AccordionContent>
                            Наша комиссия фиксированная и зависит от стоимости автомобиля: до 10 000€ — от 1500€, от 10 000€ до 20 000€ — от 1800€, от 20 000€ — от 2000€. Точную сумму обговариваем до начала работы и фиксируем в договоре.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="money-3">
                          <AccordionTrigger>Есть ли предоплата?</AccordionTrigger>
                          <AccordionContent>
                            Да, работаем по предоплате. Обычно это 30-50% от стоимости автомобиля при подписании договора. Остальная сумма вносится после покупки авто в Европе, окончательный расчёт — при передаче вам готового автомобиля.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="money-4">
                          <AccordionTrigger>Какие налоги и пошлины платятся при растаможке?</AccordionTrigger>
                          <AccordionContent>
                            При растаможке платятся: таможенная пошлина (от объёма двигателя и возраста), утилизационный сбор, НДС. Для авто до 3 лет пошлина 54% от стоимости, для старше 3 лет — от объёма двигателя. Рассчитаем точно под ваш автомобиль.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="money-5">
                          <AccordionTrigger>Какие платежи клиент делает самостоятельно, а какие через вас?</AccordionTrigger>
                          <AccordionContent>
                            Все платежи проходят через нас — вы переводите деньги на наш расчётный счёт, мы оплачиваем автомобиль, доставку, таможню. Это безопаснее и проще. Все транзакции документируются, выдаём чеки и акты.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="money-6">
                          <AccordionTrigger>Можно ли разбить оплату на этапы?</AccordionTrigger>
                          <AccordionContent>
                            Да, оплата всегда разбита на этапы: аванс при подписании договора, вторая часть после покупки авто, финальный платёж при получении готового автомобиля. Это удобно и безопасно для обеих сторон.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="money-7">
                          <AccordionTrigger>В какой валюте и как оплачивается авто в Европе?</AccordionTrigger>
                          <AccordionContent>
                            Автомобили в Европе оплачиваются в евро. Мы принимаем оплату в рублях по курсу на день платежа, затем конвертируем и переводим продавцу. Все конвертации и комиссии учитываются в итоговой стоимости.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    {/* Про сроки */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Про сроки</h3>
                      <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm border">
                        <AccordionItem value="time-1">
                          <AccordionTrigger>От чего зависят сроки пригона автомобиля?</AccordionTrigger>
                          <AccordionContent>
                            Сроки зависят от: скорости подбора (1-7 дней), времени на проверку и покупку (2-5 дней), логистики (7-14 дней), таможенного оформления (3-7 дней). В среднем процесс занимает от 2 до 4 недель.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="time-2">
                          <AccordionTrigger>Какие типичные сроки пригона автомобиля?</AccordionTrigger>
                          <AccordionContent>
                            Типичный срок — 3-4 недели от подбора до получения автомобиля с российскими номерами. Из них: подбор 3-5 дней, доставка 10-14 дней, таможня и оформление 5-7 дней. Точные сроки зависят от страны и сложности оформления.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="time-3">
                          <AccordionTrigger>Можно ли ускорить процесс пригона?</AccordionTrigger>
                          <AccordionContent>
                            Частично да. Можно ускорить подбор (если критерии гибкие), использовать экспресс-доставку (+500-700€), приоритетную очередь на таможне. Самый быстрый вариант — около 2 недель, но стоит дороже.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="time-4">
                          <AccordionTrigger>Что будет, если сроки сдвигаются?</AccordionTrigger>
                          <AccordionContent>
                            Мы всегда держим вас в курсе. Если сроки сдвигаются по нашей вине, компенсируем неустойку (прописано в договоре). Если задержка из-за таможни или других внешних факторов — информируем и корректируем план.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="time-5">
                          <AccordionTrigger>Как я буду понимать, на каком этапе находится мой заказ?</AccordionTrigger>
                          <AccordionContent>
                            Мы держим вас в курсе на каждом этапе: отправляем фото и видео при осмотре, уведомляем о покупке, присылаем трек-номер при отправке, информируем о прохождении таможни. Вы всегда можете связаться с нами в WhatsApp или Telegram.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    {/* Про риски и гарантии */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">Про риски и гарантии</h3>
                      <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm border">
                        <AccordionItem value="risk-1">
                          <AccordionTrigger>Что если автомобиль не подходит после проверки?</AccordionTrigger>
                          <AccordionContent>
                            Если при проверке на СТО обнаружатся серьёзные проблемы (скрученный пробег, скрытые повреждения, несоответствие описанию), мы отказываемся от покупки и ищем другой вариант. Ваши деньги остаются у вас, платите только за проверку.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="risk-2">
                          <AccordionTrigger>Как защищены деньги клиента?</AccordionTrigger>
                          <AccordionContent>
                            Работаем по официальному договору, все платежи через расчётный счёт ООО с полным документооборотом. Деньги переводятся поэтапно, каждый этап подтверждается актами и фото-отчётами. Вы всегда знаете, за что платите.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="risk-3">
                          <AccordionTrigger>Что если по итогам проверки мы отказываемся от конкретного авто?</AccordionTrigger>
                          <AccordionContent>
                            Это нормальная ситуация. Если авто не прошёл проверку или вам не понравился после осмотра, ищем другой вариант. Вы платите только за проверку (обычно 100-150€), остальные средства не расходуются.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="risk-4">
                          <AccordionTrigger>Какие риски вы берёте на себя, а какие остаются у клиента?</AccordionTrigger>
                          <AccordionContent>
                            Мы берём на себя: проверку истории и состояния авто, юридическую чистоту сделки, доставку без повреждений, таможенное оформление. Клиент несёт риски: изменения курса валют, изменения таможенных ставок, изменения законодательства.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="risk-5">
                          <AccordionTrigger>Даёте ли вы гарантию на автомобиль?</AccordionTrigger>
                          <AccordionContent>
                            Гарантию на сам автомобиль даёт производитель (если она ещё действует). Мы гарантируем: юридическую чистоту сделки, соответствие автомобиля описанию, отсутствие скрытых дефектов (которые можно было выявить при проверке). Даём гарантию на 12 месяцев, что авто не находится в залоге, не в угоне, не имеет скрытых юридических проблем.
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="risk-6">
                          <AccordionTrigger>Что делать, если после получения авто обнаружились скрытые дефекты?</AccordionTrigger>
                          <AccordionContent>
                            Если дефект можно было выявить при проверке на СТО, но мы его пропустили — берём на себя компенсацию или ремонт. Если дефект скрытый и не мог быть выявлен (например, проблема проявилась через время) — разбираем ситуацию индивидуально, всегда идём навстречу клиенту.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </section>
          </TabsContent>

          {/* Контакты */}
          <TabsContent value="contact" className="mt-0">
            <section className="py-20 bg-white min-h-screen">
              <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
                  <p className="text-center text-gray-600 mb-16 text-lg">
                    Свяжитесь с нами удобным способом — ответим в течение часа
                  </p>
                </ScrollAnimation>

                <div className="max-w-6xl mx-auto">
                  {/* Основные контакты */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Контактная информация */}
                    <ScrollAnimation animation="fade-right">
                      <div className="bg-gradient-to-br from-blue-600 to-red-700 rounded-2xl shadow-xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>

                        <div className="space-y-6">
                          <a href="tel:+74951326114" className="flex items-center gap-4 group">
                            <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                              <Phone className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="text-sm text-white/80">Телефон</div>
                              <div className="font-bold text-xl">+7 (495) 132-61-14</div>
                              <div className="text-sm text-white/70">Звоните с 9:00 до 21:00</div>
                            </div>
                          </a>

                          <a href="mailto:bta.torg@mail.ru" className="flex items-center gap-4 group">
                            <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                              <Mail className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="text-sm text-white/80">Email</div>
                              <div className="font-bold text-lg">bta.torg@mail.ru</div>
                              <div className="text-sm text-white/70">Ответим в течение часа</div>
                            </div>
                          </a>

                          <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                            <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                              <Send className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="text-sm text-white/80">Telegram</div>
                              <div className="font-bold text-lg">@bta_torg</div>
                              <div className="text-sm text-white/70">Самый быстрый способ связи</div>
                            </div>
                          </a>

                          <div className="pt-6 border-t border-white/20">
                            <div className="text-sm text-white/80 mb-2">График работы</div>
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span>Понедельник - Пятница:</span>
                                <span className="font-semibold">9:00 - 21:00</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Суббота - Воскресенье:</span>
                                <span className="font-semibold">10:00 - 18:00</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-6 border-t border-white/20">
                            <div className="text-sm text-white/80 mb-2">Адрес офиса</div>
                            <div className="font-semibold">
                              Тольятти, Самарская область
                            </div>
                            <div className="text-sm text-white/70 mt-1">
                              (Точный адрес сообщим при записи на встречу)
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Форма обратной связи */}
                    <ScrollAnimation animation="fade-left" delay={100}>
                      <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold mb-2">Оставьте заявку</h3>
                        <p className="text-gray-600 mb-6">
                          Заполните форму, и мы свяжемся с вами в течение 30 минут
                        </p>

                        <div className="space-y-4">
                          <Button
                            size="lg"
                            className="w-full text-lg py-6 bg-[#0088cc] hover:bg-[#006699]"
                            asChild
                          >
                            <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
                              <Send className="mr-2 h-5 w-5" />
                              Написать в Telegram
                            </a>
                          </Button>
                        </div>

                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex gap-3">
                            <div className="text-blue-600 mt-1">ℹ️</div>
                            <div className="text-sm text-blue-900">
                              <strong>Быстрый ответ гарантирован!</strong>
                              <br />
                              Мы отвечаем на все обращения в течение часа в рабочее время.
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>

                  {/* Способы связи */}
                  <ScrollAnimation animation="fade-up">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8">
                      <h3 className="text-2xl font-bold mb-6 text-center">Выберите удобный способ связи</h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="h-8 w-8 text-blue-600" />
                          </div>
                          <h4 className="font-bold mb-2">Позвоните</h4>
                          <p className="text-gray-600 text-sm mb-4">
                            Для срочных вопросов и консультаций
                          </p>
                          <a href="tel:+74951326114" className="text-red-600 font-semibold hover:text-blue-700">
                            +7 (495) 132-61-14
                          </a>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="h-8 w-8 text-blue-600" />
                          </div>
                          <h4 className="font-bold mb-2">Telegram</h4>
                          <p className="text-gray-600 text-sm mb-4">
                            Быстрые ответы в мессенджере
                          </p>
                          <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:text-blue-700">
                            Написать →
                          </a>
                        </div>

                        <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="h-8 w-8 text-purple-600" />
                          </div>
                          <h4 className="font-bold mb-2">Email</h4>
                          <p className="text-gray-600 text-sm mb-4">
                            Для подробных вопросов
                          </p>
                          <a href="mailto:bta.torg@mail.ru" className="text-red-600 font-semibold hover:text-blue-700">
                            Написать →
                          </a>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* О компании */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold">БТА ТОРГ</span>
              </div>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                Подбор и доставка европейских автомобилей под ключ.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                С 2020 года помогаем клиентам привозить авто из Европы без головной боли и лишних переплат. Работаем официально с полным пакетом документов.
              </p>
              <div className="mt-6">
                <Button
                  className="bg-[#0088cc] hover:bg-[#006699]"
                  asChild
                >
                  <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-4 w-4" />
                    Написать в Telegram
                  </a>
                </Button>
              </div>
            </div>

            {/* Контакты */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-3">Контакты</h3>
              <div className="space-y-4">
                <a href="tel:+74951326114" className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+7 (495) 132-61-14</span>
                </a>
                <a href="mailto:bta.torg@mail.ru" className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>bta.torg@mail.ru</span>
                </a>
                <a href="https://t.me/Privezen_auto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                    <Send className="h-4 w-4" />
                  </div>
                  <span>Telegram</span>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  📍 Тольятти, Самарская область
                </p>
              </div>
            </div>

            {/* Разделы */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-3">Разделы</h3>
              <div className="space-y-3">
                <button onClick={() => {
                  const tabs = document.querySelector('[role="tablist"]');
                  const homeTab = tabs?.querySelector('[value="home"]') as HTMLButtonElement;
                  homeTab?.click();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="block text-gray-300 hover:text-red-500 hover:translate-x-1 transition-all">
                  → Главная
                </button>
                <button onClick={() => {
                  const tabs = document.querySelector('[role="tablist"]');
                  const aboutTab = tabs?.querySelector('[value="about"]') as HTMLButtonElement;
                  aboutTab?.click();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="block text-gray-300 hover:text-red-500 hover:translate-x-1 transition-all">
                  → О компании
                </button>
                <button onClick={() => {
                  const tabs = document.querySelector('[role="tablist"]');
                  const servicesTab = tabs?.querySelector('[value="services"]') as HTMLButtonElement;
                  servicesTab?.click();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="block text-gray-300 hover:text-red-500 hover:translate-x-1 transition-all">
                  → Услуги и этапы
                </button>
                <button onClick={() => {
                  const tabs = document.querySelector('[role="tablist"]');
                  const examplesTab = tabs?.querySelector('[value="examples"]') as HTMLButtonElement;
                  examplesTab?.click();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="block text-gray-300 hover:text-red-500 hover:translate-x-1 transition-all">
                  → Примеры заказов
                </button>
                <button onClick={() => {
                  const tabs = document.querySelector('[role="tablist"]');
                  const faqTab = tabs?.querySelector('[value="faq"]') as HTMLButtonElement;
                  faqTab?.click();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="block text-gray-300 hover:text-red-500 hover:translate-x-1 transition-all">
                  → FAQ
                </button>
                <button onClick={() => {
                  const tabs = document.querySelector('[role="tablist"]');
                  const contactTab = tabs?.querySelector('[value="contact"]') as HTMLButtonElement;
                  contactTab?.click();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} className="block text-gray-300 hover:text-red-500 hover:translate-x-1 transition-all">
                  → Контакты
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400">
                © ООО "БТА ТОРГ", 2020-2025. Все права защищены.
              </p>
              <p className="text-gray-500 text-center md:text-right">
                Действуем официально: ООО, договоры, отчётность, акты.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const services = [
  {
    icon: Car,
    title: "Подбор автомобиля под бюджет",
    description: "Найдем идеальный вариант, соответствующий вашим требованиям и финансовым возможностям"
  },
  {
    icon: Search,
    title: "Проверка по базам и на СТО",
    description: "Полная диагностика автомобиля перед покупкой с подробным отчетом"
  },
  {
    icon: ShoppingCart,
    title: "Покупка и сопровождение сделки",
    description: "Юридическое сопровождение на всех этапах приобретения автомобиля"
  },
  {
    icon: Truck,
    title: "Доставка в Россию",
    description: "Надежная транспортировка вашего автомобиля с отслеживанием маршрута"
  },
  {
    icon: FileCheck,
    title: "Таможенное оформление",
    description: "Полное таможенное оформление без вашего участия"
  },
  {
    icon: ClipboardCheck,
    title: "Постановка на учет",
    description: "Помощь в регистрации автомобиля в ГИБДД"
  }
];

const advantages = [
  {
    title: "Прямые поставки из Европы",
    description: "Работаем напрямую с европейскими аукционами и частными продавцами"
  },
  {
    title: "Фото- и видеоотчёты",
    description: "Полная прозрачность на каждом этапе — получаете отчеты в реальном времени"
  },
  {
    title: "Фиксированная стоимость",
    description: "Цена оговаривается заранее, без скрытых комиссий и доплат"
  },
  {
    title: "Работа по договору",
    description: "Официальное оформление, гарантии и полная юридическая защита"
  },
  {
    title: "Поддержка клиента 24/7",
    description: "На связи круглосуточно — ответим на все вопросы в любое время"
  },
  {
    title: "Опыт и надежность",
    description: "Более 450 успешно доставленных автомобилей из Европы"
  }
];

const steps = [
  {
    title: "Заявка",
    description: "Оставляете заявку с описанием желаемого автомобиля и бюджета"
  },
  {
    title: "Подбор авто",
    description: "Находим подходящие варианты и отправляем вам на согласование"
  },
  {
    title: "Проверка",
    description: "Проводим детальную проверку автомобиля по базам и на СТО"
  },
  {
    title: "Предоплата и договор",
    description: "Подписываем официальный договор с фиксированными ценами, вы вносите предоплату"
  },
  {
    title: "Покупка",
    description: "Выкупаем автомобиль и оформляем все необходимые документы"
  },
  {
    title: "Предпродажная подготовка",
    description: "Устраняем мелкие дефекты, моем и готовим автомобиль к доставке"
  },
  {
    title: "Доставка",
    description: "Транспортируем автомобиль в Россию и проходим таможню"
  },
  {
    title: "Оформление ЭПТС",
    description: "Получаем электронный паспорт транспортного средства в ГИБДД"
  },
  {
    title: "Постановка на учёт",
    description: "Помогаем поставить автомобиль на учёт и получить номера"
  },
  {
    title: "Передача клиенту",
    description: "Передаем вам готовый к эксплуатации автомобиль с полным пакетом документов"
  }
];

const carExamples: Array<{
  model: string;
  year: string;
  country: string;
  engine?: string;
  transmission?: string;
  priceEU?: string;
  delivery?: string;
  total: string;
  timeline: string;
  image: string;
}> = [
  {
    model: "Kia Ceed",
    year: "2023",
    country: "Германия",
    engine: "1.5 T-GDI (118 кВт / 160 л.с.)",
    transmission: "АКПП",
    total: "≈ 1,440,000 ₽",
    timeline: "3 недели",
    image: "/car1.jpg"
  },
  {
    model: "Audi Q5",
    year: "2019",
    country: "Германия",
    engine: "2.0 TFSI (252 л.с. / 185 кВт)",
    transmission: "АКПП",
    total: "≈ 1,790,000 ₽",
    timeline: "2.5 недели",
    image: "/car2.jpg"
  },
  {
    model: "Mazda CX-5",
    year: "2018",
    country: "Германия",
    engine: "2.0 бензин (150 л.с.)",
    transmission: "АКПП",
    total: "≈ 1,360,000 ₽",
    timeline: "3 недели",
    image: "/car3.jpg"
  },
  {
    model: "BMW X5",
    year: "2020",
    country: "Германия",
    engine: "3.0 дизель (265 л.с.)",
    transmission: "АКПП",
    total: "≈ 3,480,000 ₽",
    timeline: "3.5 недели",
    image: "/car4.jpg"
  },
  {
    model: "Honda CR-V",
    year: "2020",
    country: "Бельгия",
    engine: "2.0 i-MMD Hybrid (145 л.с. / 107 кВт)",
    transmission: "АКПП",
    total: "≈ 1,620,000 ₽",
    timeline: "3 недели",
    image: "/car5.jpg"
  },
  {
    model: "Mitsubishi Outlander",
    year: "2021",
    country: "Германия",
    engine: "2.4 (99 кВт / 135 л.с.)",
    transmission: "АКПП",
    total: "≈ 1,620,000 ₽",
    timeline: "2 недели",
    image: "/car6.jpg"
  }
];
