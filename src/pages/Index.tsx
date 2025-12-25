import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const services = [
    {
      icon: 'Truck',
      title: 'Грузоперевозки',
      description: 'Международные и внутренние перевозки любых грузов',
    },
    {
      icon: 'Warehouse',
      title: 'Складское хранение',
      description: 'Современные складские комплексы с системой контроля',
    },
    {
      icon: 'Package',
      title: 'Комплектация',
      description: 'Упаковка, маркировка и подготовка товаров к отправке',
    },
    {
      icon: 'Plane',
      title: 'Авиадоставка',
      description: 'Срочная доставка грузов авиатранспортом по всему миру',
    },
    {
      icon: 'Ship',
      title: 'Морские перевозки',
      description: 'Контейнерные и балковые перевозки морским транспортом',
    },
    {
      icon: 'FileText',
      title: 'Таможенное оформление',
      description: 'Полное сопровождение таможенных процедур',
    },
  ];

  const partners = [
    'IKEA', 'BMW', 'Samsung', 'Unilever', 'Nestle', 'Coca-Cola', 'Siemens', 'Toyota'
  ];

  const tariffs = [
    { service: 'Экспресс-доставка (1-2 дня)', price: 'от 2500 ₽/кг', min: '50 кг' },
    { service: 'Стандартная доставка (5-7 дней)', price: 'от 850 ₽/кг', min: '100 кг' },
    { service: 'Морская доставка (30-45 дней)', price: 'от 150 ₽/кг', min: '500 кг' },
    { service: 'Складское хранение', price: 'от 12 ₽/м³/сутки', min: '10 м³' },
    { service: 'Таможенное оформление', price: 'от 8500 ₽/декларация', min: '-' },
  ];

  const trackingStatuses = [
    { status: 'Принято на склад отправителя', date: '15.12.2024 10:30', location: 'Москва' },
    { status: 'В пути', date: '16.12.2024 08:15', location: 'Нижний Новгород' },
    { status: 'Прибыло на склад', date: '18.12.2024 14:20', location: 'Казань' },
    { status: 'Ожидает получения', date: '19.12.2024 09:00', location: 'Казань' },
  ];

  const handleTracking = () => {
    if (trackingNumber.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-2xl font-bold">LogisticPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#tracking" className="hover:text-primary transition-colors">Отследить груз</a>
            <a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#partners" className="hover:text-primary transition-colors">Партнёры</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section id="hero" className="bg-gradient-to-br from-secondary via-secondary to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Профессиональные логистические решения
            </h1>
            <p className="text-xl mb-8 text-gray-200 animate-fade-in">
              Надёжная доставка грузов по всему миру. 15 лет опыта, 10 000+ довольных клиентов, безупречная репутация.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
                <Icon name="Package" size={20} className="mr-2" />
                Оформить заказ
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="FileText" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10К+</div>
              <div className="text-muted-foreground">Клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Стран доставки</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-muted-foreground">Успешных доставок</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр логистических услуг для вашего бизнеса
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tracking" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Отследить груз</h2>
          <p className="text-center text-muted-foreground mb-12">
            Введите трек-номер для отслеживания груза в режиме реального времени
          </p>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Search" size={24} />
                  Система отслеживания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-6">
                  <Input
                    placeholder="Введите трек-номер (например: LP123456789RU)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleTracking}>
                    <Icon name="Search" size={18} className="mr-2" />
                    Найти
                  </Button>
                </div>

                {isTracking && trackingNumber && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                      <div>
                        <div className="font-semibold">Трек-номер: {trackingNumber}</div>
                        <div className="text-sm text-muted-foreground">Москва → Казань</div>
                      </div>
                      <Badge className="bg-primary">В пути</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      {trackingStatuses.map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full ${idx === trackingStatuses.length - 1 ? 'bg-primary' : 'bg-muted-foreground'}`} />
                            {idx < trackingStatuses.length - 1 && (
                              <div className="w-0.5 h-12 bg-muted-foreground/30" />
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <div className="font-semibold">{item.status}</div>
                            <div className="text-sm text-muted-foreground">{item.date}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <Icon name="MapPin" size={14} />
                              {item.location}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="order" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Оформить заказ доставки</h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и наш менеджер свяжется с вами в течение 15 минут
          </p>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="ivan@example.com" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Откуда</label>
                    <Input placeholder="Город отправки" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Куда</label>
                    <Input placeholder="Город назначения" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Вес груза (кг)</label>
                    <Input type="number" placeholder="100" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Объём (м³)</label>
                    <Input type="number" placeholder="5" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий</label>
                  <Input placeholder="Дополнительная информация о грузе" />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="tariffs" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Тарифы на услуги</h2>
          <p className="text-center text-muted-foreground mb-12">
            Прозрачные цены без скрытых комиссий
          </p>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary text-secondary-foreground">
                    <tr>
                      <th className="text-left p-4 font-semibold">Услуга</th>
                      <th className="text-left p-4 font-semibold">Стоимость</th>
                      <th className="text-left p-4 font-semibold">Мин. партия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tariffs.map((tariff, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="p-4">{tariff.service}</td>
                        <td className="p-4 font-semibold text-primary">{tariff.price}</td>
                        <td className="p-4 text-muted-foreground">{tariff.min}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Итоговая стоимость рассчитывается индивидуально с учётом маршрута и типа груза
          </p>
        </div>
      </section>

      <section id="partners" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши клиенты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Нам доверяют крупнейшие компании России и мира
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, idx) => (
              <Card key={idx} className="flex items-center justify-center p-8 hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold text-muted-foreground">{partner}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">О компании</h2>
            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">LogisticPro</strong> — ведущая логистическая компания с 15-летним опытом работы на международном рынке. Мы специализируемся на организации грузоперевозок любой сложности, предоставляя нашим клиентам полный спектр транспортно-логистических услуг.
                </p>
                <p>
                  Наша компания управляет собственным автопарком из 200+ единиц техники, имеет сеть складских комплексов площадью более 50 000 м² и сотрудничает с надёжными партнёрами по всему миру.
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Award" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">ISO 9001:2015</div>
                      <div className="text-sm">Сертификат качества</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Shield" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Страхование</div>
                      <div className="text-sm">100% грузов застраховано</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">24/7</div>
                      <div className="text-sm">Круглосуточная поддержка</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@logisticpro.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">
                      Москва, Ленинградский проспект, 47<br />
                      БЦ "Империя", офис 801
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    <div className="text-muted-foreground">Служба поддержки: 24/7</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input placeholder="Тема сообщения" />
                  </div>
                  <div>
                    <Input placeholder="Ваше сообщение" className="h-24" />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Truck" size={28} className="text-primary" />
                <span className="text-xl font-bold">LogisticPro</span>
              </div>
              <p className="text-gray-300 text-sm">
                Профессиональные логистические решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Грузоперевозки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Складское хранение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Авиадоставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Морские перевозки</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#partners" className="hover:text-primary transition-colors">Наши клиенты</a></li>
                <li><a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-transparent border-gray-600 hover:bg-primary hover:border-primary">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="bg-transparent border-gray-600 hover:bg-primary hover:border-primary">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="bg-transparent border-gray-600 hover:bg-primary hover:border-primary">
                  <Icon name="Linkedin" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 LogisticPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
