import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

function App() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const trackShipment = () => {
    if (!trackingNumber) {
      toast({
        title: 'Ошибка',
        description: 'Введите номер отслеживания',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Груз найден',
      description: `Отслеживание груза №${trackingNumber}`,
    });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">LogisticPro</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              {['home', 'services', 'about', 'portfolio', 'pricing', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'О компании'}
                  {section === 'portfolio' && 'Клиенты'}
                  {section === 'pricing' && 'Тарифы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button>Заказать доставку</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Надежная логистика с 2010 года
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Профессиональные логистические решения для вашего бизнеса
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Доставка грузов по всему миру с гарантией качества и соблюдением сроков
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                Связаться с нами
              </Button>
            </div>
          </div>

          {/* Tracking Widget */}
          <Card className="max-w-2xl mx-auto mt-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Search" size={24} />
                Отследить груз
              </CardTitle>
              <CardDescription>Введите номер отслеживания для проверки статуса вашего груза</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Номер отслеживания (например: LOG123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && trackShipment()}
                />
                <Button onClick={trackShipment}>
                  <Icon name="Search" size={18} />
                </Button>
              </div>
              {trackingNumber && trackingNumber.startsWith('LOG') && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Статус доставки:</span>
                    <Badge variant="default">В пути</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-primary" />
                      <span>25.12.2024 09:00 - Груз принят на склад</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-primary" />
                      <span>25.12.2024 14:30 - Отправлено в транзитный центр</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Truck" size={16} className="text-accent" />
                      <span>25.12.2024 18:45 - В пути (Москва → Санкт-Петербург)</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Package" size={16} />
                      <span>26.12.2024 (ожидается) - Доставка получателю</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: 'Timer', title: 'Точные сроки', desc: 'Доставка груза точно в срок без задержек' },
              { icon: 'Shield', title: 'Страхование', desc: 'Полное страхование груза на весь маршрут' },
              { icon: 'Globe', title: 'Международная сеть', desc: 'Доставка в 150+ стран мира' },
            ].map((benefit, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <Icon name={benefit.icon} size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексные логистические решения для любых задач</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Plane',
                title: 'Авиаперевозки',
                desc: 'Срочная доставка грузов авиатранспортом по всему миру',
                features: ['Сроки от 1 дня', 'Температурный контроль', 'Таможенное оформление'],
              },
              {
                icon: 'Ship',
                title: 'Морские перевозки',
                desc: 'Контейнерные и сборные грузы морским транспортом',
                features: ['Полные и сборные контейнеры', 'FCL/LCL', 'Погрузо-разгрузочные работы'],
              },
              {
                icon: 'Truck',
                title: 'Автоперевозки',
                desc: 'Доставка по России и странам СНГ автотранспортом',
                features: ['FTL/LTL перевозки', 'Рефрижераторы', 'Негабаритные грузы'],
              },
              {
                icon: 'Train',
                title: 'Ж/Д перевозки',
                desc: 'Железнодорожные перевозки контейнеров и вагонов',
                features: ['Контейнерные перевозки', 'Вагоны', 'Мультимодальные решения'],
              },
              {
                icon: 'Warehouse',
                title: 'Складская логистика',
                desc: 'Современные складские комплексы класса А',
                features: ['Хранение товаров', 'Кросс-докинг', 'Складская обработка'],
              },
              {
                icon: 'FileText',
                title: 'Таможенное оформление',
                desc: 'Полный цикл таможенного оформления грузов',
                features: ['Декларирование', 'Сертификация', 'Консультации'],
              },
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={service.icon} size={40} className="text-primary mb-3" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PackagePlus" size={28} />
                  Оформить заказ на доставку
                </CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами в течение 30 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Имя *</Label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label>Телефон *</Label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input type="email" placeholder="ivan@company.ru" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Откуда</Label>
                      <Input placeholder="Город отправления" />
                    </div>
                    <div className="space-y-2">
                      <Label>Куда</Label>
                      <Input placeholder="Город назначения" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Тип груза</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Генеральные грузы</SelectItem>
                          <SelectItem value="oversized">Негабаритные грузы</SelectItem>
                          <SelectItem value="perishable">Скоропортящиеся</SelectItem>
                          <SelectItem value="dangerous">Опасные грузы</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Вес (кг)</Label>
                      <Input type="number" placeholder="1000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Комментарий</Label>
                    <Input placeholder="Дополнительная информация о грузе" />
                  </div>

                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">О компании</h2>
              <p className="text-xl text-muted-foreground">
                Лидер в сфере логистических услуг с 2010 года
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-lg font-medium mb-1">лет на рынке</div>
                  <div className="text-sm text-muted-foreground">Опыт и надежность</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-lg font-medium mb-1">довольных клиентов</div>
                  <div className="text-sm text-muted-foreground">По всему миру</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-lg font-medium mb-1">стран доставки</div>
                  <div className="text-sm text-muted-foreground">Глобальная сеть</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
                  <div className="text-lg font-medium mb-1">доставка в срок</div>
                  <div className="text-sm text-muted-foreground">Высокое качество</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  LogisticPro — ведущая логистическая компания, специализирующаяся на международных и внутренних
                  перевозках. Мы предоставляем полный спектр логистических услуг: от авиа- и морских перевозок до
                  складского хранения и таможенного оформления. Наша команда профессионалов обеспечивает надежную
                  доставку грузов любой сложности с соблюдением всех сроков и требований безопасности.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши клиенты и партнеры</h2>
            <p className="text-xl text-muted-foreground">Нам доверяют крупнейшие компании</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Газпром', icon: 'Building2' },
              { name: 'Лукойл', icon: 'Fuel' },
              { name: 'РЖД', icon: 'Train' },
              { name: 'Норникель', icon: 'Factory' },
              { name: 'X5 Retail', icon: 'ShoppingCart' },
              { name: 'Сбербанк', icon: 'Landmark' },
              { name: 'Яндекс', icon: 'Search' },
              { name: 'Wildberries', icon: 'Package' },
            ].map((client, idx) => (
              <Card key={idx} className="flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <Icon name={client.icon} size={40} className="mx-auto mb-3 text-primary" />
                  <div className="font-semibold text-sm">{client.name}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Тарифы на услуги</h2>
            <p className="text-xl text-muted-foreground">Прозрачное ценообразование без скрытых комиссий</p>
          </div>

          <Tabs defaultValue="auto" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="auto">Авто</TabsTrigger>
              <TabsTrigger value="air">Авиа</TabsTrigger>
              <TabsTrigger value="sea">Море</TabsTrigger>
              <TabsTrigger value="rail">ЖД</TabsTrigger>
            </TabsList>

            <TabsContent value="auto">
              <Card>
                <CardHeader>
                  <CardTitle>Автоперевозки по России</CardTitle>
                  <CardDescription>Стоимость указана за 1 кг</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { route: 'Москва → Санкт-Петербург', weight: 'до 100 кг', price: '25 ₽/кг', time: '1-2 дня' },
                      { route: 'Москва → Екатеринбург', weight: 'до 500 кг', price: '35 ₽/кг', time: '3-4 дня' },
                      { route: 'Москва → Новосибирск', weight: 'до 1000 кг', price: '45 ₽/кг', time: '5-7 дней' },
                      {
                        route: 'Москва → Владивосток',
                        weight: 'от 1000 кг',
                        price: '55 ₽/кг',
                        time: '10-14 дней',
                      },
                    ].map((rate, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <div className="font-semibold">{rate.route}</div>
                          <div className="text-sm text-muted-foreground">{rate.weight}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{rate.price}</div>
                          <div className="text-sm text-muted-foreground">{rate.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="air">
              <Card>
                <CardHeader>
                  <CardTitle>Авиаперевозки</CardTitle>
                  <CardDescription>Международные и внутренние рейсы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { route: 'Москва → Европа', weight: 'до 50 кг', price: '180 ₽/кг', time: '2-3 дня' },
                      { route: 'Москва → Азия', weight: 'до 100 кг', price: '220 ₽/кг', time: '3-5 дней' },
                      { route: 'Москва → США', weight: 'до 200 кг', price: '350 ₽/кг', time: '4-6 дней' },
                      { route: 'Срочная доставка', weight: 'любой', price: 'от 500 ₽/кг', time: '1-2 дня' },
                    ].map((rate, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <div className="font-semibold">{rate.route}</div>
                          <div className="text-sm text-muted-foreground">{rate.weight}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{rate.price}</div>
                          <div className="text-sm text-muted-foreground">{rate.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sea">
              <Card>
                <CardHeader>
                  <CardTitle>Морские перевозки</CardTitle>
                  <CardDescription>Стоимость за 20' контейнер</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { route: 'Китай → Россия', type: 'FCL 20\'', price: '2 500 $', time: '25-30 дней' },
                      { route: 'Китай → Россия', type: 'FCL 40\'', price: '3 800 $', time: '25-30 дней' },
                      { route: 'Европа → Россия', type: 'FCL 20\'', price: '3 200 $', time: '20-25 дней' },
                      { route: 'Сборный груз (LCL)', type: 'от 1 м³', price: 'от 80 $/м³', time: '30-35 дней' },
                    ].map((rate, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <div className="font-semibold">{rate.route}</div>
                          <div className="text-sm text-muted-foreground">{rate.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{rate.price}</div>
                          <div className="text-sm text-muted-foreground">{rate.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rail">
              <Card>
                <CardHeader>
                  <CardTitle>Железнодорожные перевозки</CardTitle>
                  <CardDescription>Контейнерные перевозки</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { route: 'Китай → Россия', type: '20\' контейнер', price: '1 800 $', time: '14-16 дней' },
                      { route: 'Китай → Россия', type: '40\' контейнер', price: '2 600 $', time: '14-16 дней' },
                      { route: 'Европа → Россия', type: '20\' контейнер', price: '2 200 $', time: '10-12 дней' },
                      { route: 'По России', type: 'вагон', price: 'от 150 000 ₽', time: '7-10 дней' },
                    ].map((rate, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <div className="font-semibold">{rate.route}</div>
                          <div className="text-sm text-muted-foreground">{rate.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{rate.price}</div>
                          <div className="text-sm text-muted-foreground">{rate.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="max-w-5xl mx-auto mt-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-primary mt-1" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">Важная информация:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Цены указаны без НДС</li>
                    <li>Стоимость может меняться в зависимости от характера груза и дополнительных услуг</li>
                    <li>Точный расчет стоимости производится после получения параметров груза</li>
                    <li>Возможны скидки для постоянных клиентов и больших объемов</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Главный офис</div>
                      <div className="text-muted-foreground">г. Москва, ул. Складская, д. 10, офис 501</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Телефоны</div>
                      <div className="space-y-1 text-muted-foreground">
                        <div>+7 (495) 123-45-67 (отдел продаж)</div>
                        <div>+7 (495) 123-45-68 (служба поддержки)</div>
                        <div>8 (800) 555-00-00 (бесплатно по РФ)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="space-y-1 text-muted-foreground">
                        <div>info@logisticpro.ru</div>
                        <div>sales@logisticpro.ru</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00, Сб-Вс: выходной</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Мы ответим в течение 1 рабочего дня</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label>Ваше имя *</Label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input type="email" placeholder="ivan@company.ru" />
                  </div>
                  <div className="space-y-2">
                    <Label>Телефон</Label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <Label>Сообщение *</Label>
                    <Input placeholder="Опишите вашу задачу" />
                  </div>
                  <Button className="w-full">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={28} />
                <span className="text-xl font-bold">LogisticPro</span>
              </div>
              <p className="text-sm opacity-90">
                Профессиональная логистическая компания с 15-летним опытом работы на рынке
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Авиаперевозки</li>
                <li>Морские перевозки</li>
                <li>Автоперевозки</li>
                <li>Ж/Д перевозки</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>О нас</li>
                <li>Наши клиенты</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+7 (495) 123-45-67</li>
                <li>info@logisticpro.ru</li>
                <li>г. Москва, ул. Складская, д. 10</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>© 2024 LogisticPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
