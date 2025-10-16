import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface ShopItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface Privilege {
  id: number;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');
  const [onlinePlayers, setOnlinePlayers] = useState(147);
  const [maxPlayers] = useState(200);
  const [serverStatus, setServerStatus] = useState<'online' | 'offline'>('online');

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => {
        const change = Math.floor(Math.random() * 7) - 3;
        const newValue = prev + change;
        return Math.max(120, Math.min(195, newValue));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const shopItems: ShopItem[] = [
    { id: 1, name: 'AK-47', price: 200, category: 'Оружие', image: '' },
    { id: 2, name: 'Металлическая броня', price: 300, category: 'Броня', image: '' },
    { id: 3, name: 'Медицинский набор', price: 150, category: 'Медицина', image: '' },
    { id: 4, name: 'C4 взрывчатка', price: 500, category: 'Взрывчатка', image: '' },
    { id: 5, name: 'Bolt Action Rifle', price: 350, category: 'Оружие', image: '' },
    { id: 6, name: 'Ресурсный набор', price: 100, category: 'Ресурсы', image: '' },
  ];

  const privileges: Privilege[] = [
    {
      id: 1,
      name: 'VIP',
      price: 299,
      features: ['Доступ к VIP-лаунжу', '+50% к опыту', 'Приоритет в очереди', 'Уникальный значок'],
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: 599,
      features: ['Все преимущества VIP', '+100% к опыту', 'Приватный сервер', 'Эксклюзивные скины', 'Бесплатный TP'],
      popular: true,
    },
    {
      id: 3,
      name: 'LEGEND',
      price: 999,
      features: ['Все преимущества PREMIUM', '+200% к опыту', 'Админ-команды', 'Персональная поддержка', 'Неограниченные слоты'],
    },
  ];

  const faqItems = [
    { question: 'Как оплатить покупку?', answer: 'Мы принимаем платежи через карты, электронные кошельки и криптовалюту. После выбора товара перейдите к оформлению заказа.' },
    { question: 'Как получить купленный товар?', answer: 'После успешной оплаты товар автоматически добавится на ваш игровой аккаунт в течение 5 минут.' },
    { question: 'Что делать если товар не пришел?', answer: 'Свяжитесь с нашей поддержкой в Discord или Telegram, указав номер заказа. Мы решим проблему в течение часа.' },
    { question: 'Можно ли вернуть деньги?', answer: 'Возврат возможен в течение 24 часов после покупки, если товар не был активирован в игре.' },
    { question: 'Есть ли скидки для постоянных клиентов?', answer: 'Да! Каждая покупка приносит вам бонусные баллы, которые можно обменять на скидки до 20%.' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-primary flex items-center gap-2">
              <Icon name="Shield" size={32} />
              RUST STORE
            </h1>
            <div className="flex items-center gap-2 md:gap-6">
              <button
                onClick={() => scrollToSection('maps')}
                className={`text-sm md:text-base font-medium transition-colors hover:text-primary ${
                  activeSection === 'maps' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Карты
              </button>
              <button
                onClick={() => scrollToSection('shop')}
                className={`text-sm md:text-base font-medium transition-colors hover:text-primary ${
                  activeSection === 'shop' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Магазин
              </button>
              <button
                onClick={() => scrollToSection('privileges')}
                className={`text-sm md:text-base font-medium transition-colors hover:text-primary ${
                  activeSection === 'privileges' ? 'text-primary' : 'text-foreground'
                }`}
              >
                Привилегии
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`text-sm md:text-base font-medium transition-colors hover:text-primary ${
                  activeSection === 'faq' ? 'text-primary' : 'text-foreground'
                }`}
              >
                FAQ
              </button>
              <Button size="sm" className="md:flex">
                <Icon name="ShoppingCart" size={16} className="md:mr-2" />
                <span className="hidden md:inline">Корзина</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section 
        id="hero" 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/18ad1e1d-2995-4d34-a441-f143f61f0bb3/files/26760c21-f27c-4c39-af82-133eed2ec9a1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              ВЫЖИВАЙ. ПОБЕЖДАЙ.
            </h2>
            <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Лучший магазин игровых предметов и привилегий для Rust. Мгновенная доставка, безопасные платежи, 24/7 поддержка.
            </p>
            <div className="mb-8 inline-flex items-center gap-4 bg-background/90 backdrop-blur-sm px-8 py-4 rounded-lg border border-primary/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Icon name="Radio" size={24} className="text-primary animate-pulse" />
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Онлайн сейчас</div>
                  <div className="text-3xl font-display font-bold text-primary transition-all duration-300">
                    {onlinePlayers} <span className="text-lg text-muted-foreground">/ {maxPlayers}</span>
                  </div>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${serverStatus === 'online' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                <span className="text-sm font-medium">
                  {serverStatus === 'online' ? 'Сервер работает' : 'Оффлайн'}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" onClick={() => scrollToSection('shop')}>
                <Icon name="Package" size={20} className="mr-2" />
                Открыть магазин
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('privileges')}>
                <Icon name="Crown" size={20} className="mr-2" />
                Купить привилегию
              </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'Zap', label: 'Моментально', desc: 'Получение' },
              { icon: 'Shield', label: 'Безопасно', desc: 'Платежи' },
              { icon: 'Headphones', label: '24/7', desc: 'Поддержка' },
              { icon: 'Percent', label: 'Скидки', desc: 'Постоянным' },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-lg animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Icon name={item.icon} size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-display font-semibold text-lg">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="maps" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">КАРТЫ ВАЙПОВ</h2>
            <p className="text-muted-foreground text-lg">Изучи карту текущего сервера и готовься к следующему вайпу</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary bg-card">
              <CardHeader className="bg-primary/10 border-b border-primary">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-display text-2xl flex items-center gap-3">
                    <Icon name="MapPin" size={28} className="text-primary" />
                    ТЕКУЩИЙ ВАЙП
                  </CardTitle>
                  <Badge className="bg-primary text-primary-foreground">
                    <Icon name="Circle" size={12} className="mr-1" />
                    LIVE
                  </Badge>
                </div>
                <CardDescription className="text-base mt-2">
                  Активна до: 20 октября 2024
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-square bg-secondary/30">
                  <img 
                    src="https://cdn.poehali.dev/projects/18ad1e1d-2995-4d34-a441-f143f61f0bb3/files/764ac497-5eb3-4582-8657-f529e0cad2b9.jpg"
                    alt="Текущая карта"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 px-4 py-2 rounded-md border border-border">
                    <div className="text-xs text-muted-foreground">Размер карты</div>
                    <div className="text-lg font-display font-bold text-primary">4000x4000</div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-background/90 px-4 py-2 rounded-md border border-border">
                    <div className="text-xs text-muted-foreground">Seed</div>
                    <div className="text-sm font-display font-semibold">1234567890</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 flex gap-2">
                <Button className="flex-1">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать карту
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Открыть в RustMaps
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-2 border-border bg-card">
              <CardHeader className="bg-muted/50 border-b border-border">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-display text-2xl flex items-center gap-3">
                    <Icon name="Calendar" size={28} className="text-foreground" />
                    СЛЕДУЮЩИЙ ВАЙП
                  </CardTitle>
                  <Badge variant="outline" className="border-primary text-primary">
                    <Icon name="Clock" size={12} className="mr-1" />
                    СКОРО
                  </Badge>
                </div>
                <CardDescription className="text-base mt-2">
                  Старт: 27 октября 2024, 18:00
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-square bg-secondary/30">
                  <img 
                    src="https://cdn.poehali.dev/projects/18ad1e1d-2995-4d34-a441-f143f61f0bb3/files/e757bf69-102e-45e1-aa36-ba4213300856.jpg"
                    alt="Следующая карта"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 px-4 py-2 rounded-md border border-border">
                    <div className="text-xs text-muted-foreground">Размер карты</div>
                    <div className="text-lg font-display font-bold text-primary">4500x4500</div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-background/90 px-4 py-2 rounded-md border border-border">
                    <div className="text-xs text-muted-foreground">Seed</div>
                    <div className="text-sm font-display font-semibold">9876543210</div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="bg-background/95 px-8 py-4 rounded-lg border-2 border-primary">
                      <div className="text-center">
                        <Icon name="Lock" size={32} className="mx-auto mb-2 text-primary" />
                        <p className="font-display font-bold text-lg">Откроется через</p>
                        <p className="text-3xl font-display font-bold text-primary">7 дней</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 flex gap-2">
                <Button variant="outline" className="flex-1" disabled>
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать карту
                </Button>
                <Button variant="outline" className="flex-1" disabled>
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Открыть в RustMaps
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <Icon name="Info" size={24} className="text-primary" />
                  Информация о вайпах
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Icon name="RotateCcw" size={32} className="mx-auto mb-2 text-primary" />
                  <h3 className="font-display font-semibold mb-1">Периодичность</h3>
                  <p className="text-sm text-muted-foreground">Каждый четверг в 18:00</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
                  <h3 className="font-display font-semibold mb-1">Макс. игроков</h3>
                  <p className="text-sm text-muted-foreground">200 человек онлайн</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Icon name="Server" size={32} className="mx-auto mb-2 text-primary" />
                  <h3 className="font-display font-semibold mb-1">Регион</h3>
                  <p className="text-sm text-muted-foreground">EU / Москва</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <Icon name="Activity" size={24} className="text-primary" />
                  Статистика онлайна
                </CardTitle>
                <CardDescription>В реальном времени</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Онлайн сейчас</div>
                      <div className="text-4xl font-display font-bold text-primary">{onlinePlayers}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">Максимум</div>
                      <div className="text-2xl font-display font-bold">{maxPlayers}</div>
                    </div>
                  </div>
                  <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-orange-500 transition-all duration-500 ease-out"
                      style={{ width: `${(onlinePlayers / maxPlayers) * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground text-center">
                    Заполненность: {Math.round((onlinePlayers / maxPlayers) * 100)}%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <Icon name="TrendingUp" size={24} className="mx-auto mb-2 text-green-500" />
                    <div className="text-sm text-muted-foreground mb-1">Пик за день</div>
                    <div className="text-2xl font-display font-bold">189</div>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <Icon name="Clock" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="text-sm text-muted-foreground mb-1">Средний онлайн</div>
                    <div className="text-2xl font-display font-bold">156</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Обновляется каждые 3 секунды</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="shop" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">МАГАЗИН ПРЕДМЕТОВ</h2>
            <p className="text-muted-foreground text-lg">Выбирай оружие, броню и ресурсы для доминирования на сервере</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-2 border-border">
                <div className="h-48 bg-secondary/50 flex items-center justify-center p-6">
                  <Icon name="Box" size={80} className="text-muted-foreground" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-display text-xl">{item.name}</CardTitle>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                      {item.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">Премиум качество</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-2xl font-display font-bold text-primary">{item.price} ₽</span>
                  <Button className="font-medium">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="privileges" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">ПРИВИЛЕГИИ</h2>
            <p className="text-muted-foreground text-lg">Получи уникальные преимущества и выделись среди других игроков</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {privileges.map((priv) => (
              <Card
                key={priv.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  priv.popular ? 'border-primary border-2 scale-105' : 'border-border'
                }`}
              >
                {priv.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-orange-500 text-primary-foreground px-4 py-1 text-sm font-bold">
                    ПОПУЛЯРНО
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl font-display font-bold mb-2">{priv.name}</CardTitle>
                  <div className="text-4xl font-display font-bold text-primary mb-1">{priv.price} ₽</div>
                  <CardDescription>в месяц</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {priv.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-medium text-base" variant={priv.popular ? 'default' : 'outline'}>
                    <Icon name="Crown" size={16} className="mr-2" />
                    Купить {priv.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">ЧАСТЫЕ ВОПРОСЫ</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о покупках и доставке</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-xl mb-4 text-primary flex items-center gap-2">
                <Icon name="Shield" size={24} />
                RUST STORE
              </h3>
              <p className="text-muted-foreground text-sm">
                Официальный магазин игровых предметов и привилегий для Rust. Работаем с 2020 года.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>support@ruststore.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Discord: RustStore#1234</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Политика возврата</div>
                <div>Правила использования</div>
                <div>Условия покупки</div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            © 2024 Rust Store. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}