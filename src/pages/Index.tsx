import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const stats = {
    onlinePlayers: 247,
    totalBans: 1543,
    reportsToday: 42,
    detectionRate: 98.7,
  };

  const recentBans = [
    { id: 1, nickname: '_xX_ProHacker_Xx_', reason: 'KillAura + Fly', date: '2024-12-05', evidence: 'Video', status: 'Permanent' },
    { id: 2, nickname: 'Ch3at3rM4st3r', reason: 'Speed Hack', date: '2024-12-05', evidence: 'Logs', status: '30 дней' },
    { id: 3, nickname: 'LegitPlayer228', reason: 'AutoClicker', date: '2024-12-04', evidence: 'Stats', status: '7 дней' },
    { id: 4, nickname: 'NoobDestroyer', reason: 'X-Ray', date: '2024-12-04', evidence: 'Video', status: 'Permanent' },
    { id: 5, nickname: 'FlyingNinja', reason: 'Fly + NoFall', date: '2024-12-03', evidence: 'Logs', status: 'Permanent' },
  ];

  const topCheaters = [
    { rank: 1, nickname: 'SuperHacker2024', violations: 23, severity: 'Критично' },
    { rank: 2, nickname: 'CheatMaster_Pro', violations: 18, severity: 'Высоко' },
    { rank: 3, nickname: 'xRayVision', violations: 15, severity: 'Высоко' },
    { rank: 4, nickname: 'AutoClickerKing', violations: 12, severity: 'Средне' },
    { rank: 5, nickname: 'SpeedRunner99', violations: 9, severity: 'Средне' },
  ];

  const adminPosts = [
    {
      id: 1,
      type: 'server_status',
      author: 'lpvpCraftpvpl',
      time: '5 минут назад',
      message: '🟢 СЕРВЕР ВКЛЮЧЕН! Заходите играть, ребята!',
      likes: 42,
    },
    {
      id: 2,
      type: 'meme',
      author: 'lpvpCraftpvpl',
      time: '2 часа назад',
      message: 'Когда поймал читера с KillAura 😂',
      imageUrl: '🎮',
      likes: 127,
    },
    {
      id: 3,
      type: 'server_status',
      author: 'lpvpCraftpvpl',
      time: '4 часа назад',
      message: '🔧 Сервер на техническом обслуживании. Скоро вернемся!',
      likes: 23,
    },
    {
      id: 4,
      type: 'update',
      author: 'lpvpCraftpvpl',
      time: '1 день назад',
      message: '🚀 Обновление 1.1 установлено! Новый анти-чит работает на 100%',
      likes: 89,
    },
    {
      id: 5,
      type: 'meme',
      author: 'lpvpCraftpvpl',
      time: '2 дня назад',
      message: 'Читеры, когда видят наш анти-чит: 💀',
      imageUrl: '😱',
      likes: 156,
    },
  ];

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Репорт отправлен на проверку!', {
      description: 'Модерация рассмотрит жалобу в течение 24 часов',
    });
  };

  return (
    <div className="min-h-screen matrix-bg">
      <nav className="cyber-border sticky top-0 z-50 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Shield" className="text-primary pulse-glow" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-primary glitch-text">EndpvpCraft AntiCheat</h1>
                <p className="text-xs text-muted-foreground">Advanced Protection System v3.2.1</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="cyber-border gap-1">
                <Icon name="Users" size={14} />
                <span>{stats.onlinePlayers} online</span>
              </Badge>
              <Badge variant="outline" className="cyber-border gap-1 text-destructive">
                <Icon name="Ban" size={14} />
                <span>{stats.totalBans} bans</span>
              </Badge>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4 flex-wrap">
            {['home', 'news', 'reports', 'bans', 'analysis', 'stats', 'support'].map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? 'default' : 'outline'}
                onClick={() => setActiveSection(section)}
                className={activeSection === section ? 'cyber-border pulse-glow' : ''}
              >
                <Icon 
                  name={
                    section === 'home' ? 'Home' : 
                    section === 'news' ? 'Newspaper' :
                    section === 'reports' ? 'Flag' : 
                    section === 'bans' ? 'Ban' : 
                    section === 'analysis' ? 'Activity' : 
                    section === 'stats' ? 'BarChart3' : 
                    'MessageCircle'
                  } 
                  size={16} 
                />
                <span className="ml-2">
                  {section === 'home' ? 'Главная' : 
                   section === 'news' ? 'Новости' :
                   section === 'reports' ? 'Репорты' : 
                   section === 'bans' ? 'Баны' : 
                   section === 'analysis' ? 'Анализ' : 
                   section === 'stats' ? 'Статистика' : 
                   'Поддержка'}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-6">
            <div className="text-center py-12 scan-line">
              <h2 className="text-5xl font-bold mb-4 text-primary glitch-text">СИСТЕМА ЗАЩИТЫ АКТИВНА</h2>
              <p className="text-xl text-muted-foreground mb-6">Мониторинг в реальном времени • Автоматическое обнаружение • Мгновенная реакция</p>
              
              <Card className="cyber-border max-w-3xl mx-auto bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Server" className="text-primary" />
                    Информация о сервере
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Название:</p>
                      <p className="text-lg font-bold text-primary">EndpvpCraft</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">IP адрес:</p>
                      <p className="text-lg font-mono">EndpvpCraft.aternos.me:49669</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Версия:</p>
                      <p className="text-lg font-bold text-secondary">1.16.5</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Создатель:</p>
                      <p className="text-lg font-bold text-accent">lpvpcraftpvpl</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Лаунчер:</p>
                    <p className="text-lg">Любой лаунчер для Minecraft</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="cyber-border bg-card/50 backdrop-blur pulse-glow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Icon name="Users" className="text-primary" size={20} />
                    Игроки онлайн
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{stats.onlinePlayers}</p>
                  <p className="text-xs text-muted-foreground mt-1">+12 за последний час</p>
                </CardContent>
              </Card>

              <Card className="cyber-border bg-card/50 backdrop-blur pulse-glow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Icon name="Ban" className="text-destructive" size={20} />
                    Всего банов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-destructive">{stats.totalBans}</p>
                  <p className="text-xs text-muted-foreground mt-1">За всё время</p>
                </CardContent>
              </Card>

              <Card className="cyber-border bg-card/50 backdrop-blur pulse-glow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Icon name="Flag" className="text-secondary" size={20} />
                    Репорты сегодня
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-secondary">{stats.reportsToday}</p>
                  <p className="text-xs text-muted-foreground mt-1">8 на проверке</p>
                </CardContent>
              </Card>

              <Card className="cyber-border bg-card/50 backdrop-blur pulse-glow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Icon name="Target" className="text-accent" size={20} />
                    Точность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-accent">{stats.detectionRate}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Обнаружение читов</p>
                </CardContent>
              </Card>
            </div>

            <Card className="cyber-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" className="text-primary" />
                  Последние баны
                </CardTitle>
                <CardDescription>Недавно заблокированные нарушители</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ник</TableHead>
                      <TableHead>Причина</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead>Статус</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentBans.slice(0, 3).map((ban) => (
                      <TableRow key={ban.id}>
                        <TableCell className="font-mono text-destructive">{ban.nickname}</TableCell>
                        <TableCell>{ban.reason}</TableCell>
                        <TableCell className="text-muted-foreground">{ban.date}</TableCell>
                        <TableCell>
                          <Badge variant={ban.status === 'Permanent' ? 'destructive' : 'secondary'}>
                            {ban.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-6">
            <div className="text-center py-8">
              <h2 className="text-4xl font-bold mb-2 text-primary glitch-text">НОВОСТИ ОТ АДМИНИСТРАЦИИ</h2>
              <p className="text-muted-foreground">Обновления, мемы и статус сервера от lpvpCraftpvpl</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {adminPosts.map((post) => (
                <Card key={post.id} className="cyber-border bg-card/50 backdrop-blur hover:scale-[1.02] transition-transform">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full cyber-border bg-primary/20 flex items-center justify-center">
                          <Icon name="User" className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-accent">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.time}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="cyber-border"
                      >
                        {post.type === 'server_status' ? '🟢 Статус' : 
                         post.type === 'meme' ? '😂 Мем' : 
                         '📢 Обновление'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-4">{post.message}</p>
                    {post.imageUrl && (
                      <div className="text-center py-8 rounded-lg cyber-border bg-muted/30">
                        <span className="text-8xl">{post.imageUrl}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Icon name="Heart" size={16} className="text-destructive" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Icon name="MessageCircle" size={16} />
                        <span>Ответить</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Icon name="Share2" size={16} />
                        <span>Поделиться</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="cyber-border bg-card/50 backdrop-blur max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Bell" className="text-primary" />
                  Уведомления о статусе сервера
                </CardTitle>
                <CardDescription>Получайте мгновенные уведомления, когда lpvpCraftpvpl включает сервер</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 flex-wrap">
                  <Button className="cyber-border pulse-glow gap-2">
                    <Icon name="Bell" size={18} />
                    Подписаться на уведомления
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Icon name="MessageSquare" size={18} />
                    Discord сервер
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Icon name="Send" size={18} />
                    Telegram канал
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'reports' && (
          <div className="max-w-2xl mx-auto">
            <Card className="cyber-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Flag" className="text-primary" />
                  Отправить репорт на читера
                </CardTitle>
                <CardDescription>Заполните форму для отправки жалобы на подозрительного игрока</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReportSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ник нарушителя</label>
                    <Input placeholder="Введите ник игрока..." className="cyber-border" required />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тип нарушения</label>
                    <select className="w-full p-2 rounded-md bg-input border border-border cyber-border" required>
                      <option value="">Выберите тип...</option>
                      <option value="killaura">KillAura</option>
                      <option value="fly">Fly Hack</option>
                      <option value="speed">Speed Hack</option>
                      <option value="xray">X-Ray</option>
                      <option value="autoclicker">AutoClicker</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Доказательства (ссылка на видео/скрины)</label>
                    <Input placeholder="https://youtube.com/..." className="cyber-border" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Описание ситуации</label>
                    <Textarea 
                      placeholder="Опишите подробно что произошло..." 
                      className="cyber-border min-h-32"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваш ник (для связи)</label>
                    <Input placeholder="Ваш игровой ник..." className="cyber-border" required />
                  </div>

                  <Button type="submit" className="w-full cyber-border pulse-glow">
                    <Icon name="Send" size={18} />
                    <span className="ml-2">Отправить репорт</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'bans' && (
          <Card className="cyber-border bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Ban" className="text-destructive" />
                Список забаненных игроков
              </CardTitle>
              <CardDescription>Все игроки, заблокированные античит-системой</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Ник</TableHead>
                    <TableHead>Причина</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Доказательства</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentBans.map((ban) => (
                    <TableRow key={ban.id}>
                      <TableCell className="font-mono">#{ban.id}</TableCell>
                      <TableCell className="font-mono text-destructive font-bold">{ban.nickname}</TableCell>
                      <TableCell>{ban.reason}</TableCell>
                      <TableCell className="text-muted-foreground">{ban.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="cyber-border">
                          {ban.evidence}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={ban.status === 'Permanent' ? 'destructive' : 'secondary'}>
                          {ban.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {activeSection === 'analysis' && (
          <div className="space-y-6">
            <Card className="cyber-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" className="text-primary" />
                  Топ читеров по нарушениям
                </CardTitle>
                <CardDescription>Игроки с наибольшим количеством зафиксированных нарушений</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCheaters.map((cheater) => (
                    <div key={cheater.rank} className="flex items-center justify-between p-4 rounded-lg cyber-border bg-muted/30">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-primary">#{cheater.rank}</div>
                        <div>
                          <p className="font-mono font-bold text-destructive">{cheater.nickname}</p>
                          <p className="text-sm text-muted-foreground">{cheater.violations} нарушений</p>
                        </div>
                      </div>
                      <Badge 
                        variant={
                          cheater.severity === 'Критично' ? 'destructive' : 
                          cheater.severity === 'Высоко' ? 'default' : 
                          'secondary'
                        }
                        className="cyber-border"
                      >
                        {cheater.severity}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="cyber-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-secondary" />
                    Типы читов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'KillAura', percentage: 35 },
                    { name: 'Fly Hack', percentage: 25 },
                    { name: 'Speed Hack', percentage: 20 },
                    { name: 'X-Ray', percentage: 15 },
                    { name: 'Другое', percentage: 5 },
                  ].map((cheat) => (
                    <div key={cheat.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{cheat.name}</span>
                        <span className="text-sm text-primary font-bold">{cheat.percentage}%</span>
                      </div>
                      <Progress value={cheat.percentage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="cyber-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-accent" />
                    Активность по часам
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { time: '00:00 - 06:00', bans: 45 },
                    { time: '06:00 - 12:00', bans: 120 },
                    { time: '12:00 - 18:00', bans: 230 },
                    { time: '18:00 - 00:00', bans: 180 },
                  ].map((period) => (
                    <div key={period.time}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{period.time}</span>
                        <span className="text-sm text-primary font-bold">{period.bans} банов</span>
                      </div>
                      <Progress value={(period.bans / 230) * 100} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'stats' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="cyber-border bg-card/50 backdrop-blur pulse-glow">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Icon name="Trophy" className="text-primary" />
                    Топ игрок месяца
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary font-mono">ProGamerXD</p>
                  <p className="text-sm text-muted-foreground mt-1">324 часа игры</p>
                  <p className="text-sm text-muted-foreground">K/D: 3.8</p>
                </CardContent>
              </Card>

              <Card className="cyber-border bg-card/50 backdrop-blur pulse-glow">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Icon name="Zap" className="text-secondary" />
                    Средний онлайн
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary">189</p>
                  <p className="text-sm text-muted-foreground mt-1">игроков</p>
                  <p className="text-sm text-muted-foreground">за последнюю неделю</p>
                </CardContent>
              </Card>

              <Card className="cyber-border bg-card/50 backdrop-blur pulse-glow">
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Icon name="Shield" className="text-accent" />
                    Чистых игроков
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-accent">99.2%</p>
                  <p className="text-sm text-muted-foreground mt-1">от общего числа</p>
                  <p className="text-sm text-muted-foreground">никогда не нарушали</p>
                </CardContent>
              </Card>
            </div>

            <Card className="cyber-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" className="text-primary" />
                  Общая статистика сервера
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg cyber-border bg-muted/30">
                    <Icon name="Users" className="mx-auto mb-2 text-primary" size={32} />
                    <p className="text-2xl font-bold">3,847</p>
                    <p className="text-sm text-muted-foreground">Всего игроков</p>
                  </div>
                  <div className="text-center p-4 rounded-lg cyber-border bg-muted/30">
                    <Icon name="Clock" className="mx-auto mb-2 text-secondary" size={32} />
                    <p className="text-2xl font-bold">127,394</p>
                    <p className="text-sm text-muted-foreground">Часов наиграно</p>
                  </div>
                  <div className="text-center p-4 rounded-lg cyber-border bg-muted/30">
                    <Icon name="Swords" className="mx-auto mb-2 text-accent" size={32} />
                    <p className="text-2xl font-bold">892,341</p>
                    <p className="text-sm text-muted-foreground">PvP боёв</p>
                  </div>
                  <div className="text-center p-4 rounded-lg cyber-border bg-muted/30">
                    <Icon name="Crown" className="mx-auto mb-2 text-primary" size={32} />
                    <p className="text-2xl font-bold">1,247</p>
                    <p className="text-sm text-muted-foreground">Побед в турнирах</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'support' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="cyber-border bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" className="text-primary" />
                  Техническая поддержка
                </CardTitle>
                <CardDescription>Свяжитесь с нами по любым вопросам</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg cyber-border bg-muted/30">
                    <Icon name="Mail" className="text-primary mb-2" size={24} />
                    <p className="font-bold">Email</p>
                    <p className="text-sm text-muted-foreground">support@endpvpcraft.ru</p>
                  </div>
                  <div className="p-4 rounded-lg cyber-border bg-muted/30">
                    <Icon name="MessageSquare" className="text-secondary mb-2" size={24} />
                    <p className="font-bold">Discord</p>
                    <p className="text-sm text-muted-foreground">discord.gg/endpvpcraft</p>
                  </div>
                  <div className="p-4 rounded-lg cyber-border bg-muted/30">
                    <Icon name="Send" className="text-accent mb-2" size={24} />
                    <p className="font-bold">Telegram</p>
                    <p className="text-sm text-muted-foreground">@endpvpcraft_support</p>
                  </div>
                  <div className="p-4 rounded-lg cyber-border bg-muted/30">
                    <Icon name="Globe" className="text-primary mb-2" size={24} />
                    <p className="font-bold">Форум</p>
                    <p className="text-sm text-muted-foreground">forum.endpvpcraft.ru</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Icon name="HelpCircle" className="text-primary" />
                    Частые вопросы
                  </h3>
                  <Tabs defaultValue="faq1">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="faq1">Баны</TabsTrigger>
                      <TabsTrigger value="faq2">Репорты</TabsTrigger>
                      <TabsTrigger value="faq3">Апелляции</TabsTrigger>
                    </TabsList>
                    <TabsContent value="faq1" className="space-y-4 mt-4">
                      <div className="p-4 rounded-lg cyber-border bg-muted/20">
                        <p className="font-bold mb-2">Как узнать за что меня забанили?</p>
                        <p className="text-sm text-muted-foreground">
                          При попытке зайти на сервер вы увидите причину бана. Также можно проверить в списке забаненных на сайте.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg cyber-border bg-muted/20">
                        <p className="font-bold mb-2">Можно ли оспорить бан?</p>
                        <p className="text-sm text-muted-foreground">
                          Да, отправьте апелляцию через форму на сайте с доказательствами вашей невиновности.
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="faq2" className="space-y-4 mt-4">
                      <div className="p-4 rounded-lg cyber-border bg-muted/20">
                        <p className="font-bold mb-2">Как отправить репорт на читера?</p>
                        <p className="text-sm text-muted-foreground">
                          Перейдите в раздел "Репорты" и заполните форму. Обязательно приложите доказательства (видео/скриншоты).
                        </p>
                      </div>
                      <div className="p-4 rounded-lg cyber-border bg-muted/20">
                        <p className="font-bold mb-2">Сколько рассматривается репорт?</p>
                        <p className="text-sm text-muted-foreground">
                          Обычно от 12 до 24 часов. Срочные случаи рассматриваются быстрее.
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="faq3" className="space-y-4 mt-4">
                      <div className="p-4 rounded-lg cyber-border bg-muted/20">
                        <p className="font-bold mb-2">Как подать апелляцию?</p>
                        <p className="text-sm text-muted-foreground">
                          Напишите на support@endpvpcraft.ru с темой "Апелляция" и укажите свой ник и причину.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg cyber-border bg-muted/20">
                        <p className="font-bold mb-2">Можно ли разбанить друга?</p>
                        <p className="text-sm text-muted-foreground">
                          Каждый игрок отвечает за свои действия. Апелляцию может подать только сам забаненный игрок.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="cyber-border mt-12 py-6 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Shield" className="text-primary" size={20} />
            <p className="font-bold text-primary">EndpvpCraft AntiCheat System</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Защита сервера 24/7 • Создатель: lpvpcraftpvpl • © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;