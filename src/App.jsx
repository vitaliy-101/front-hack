import React, { useEffect, useMemo, useRef, useState } from 'react';
import heroImage from '../images/6.png';
import kanavinskyCover from '../images/7.png';
import kanavinskyGallery1 from '../images/8.png';
import fairCover from '../images/9.png';
import fairGallery1 from '../images/10.png';
import fairGallery2 from '../images/11.png';
import boulevardCover from '../images/12.png';
import boulevardGallery1 from '../images/13.png';
import boulevardGallery2 from '../images/14.png';
import boulevardGallery3 from '../images/15.png';
import boulevardGallery4 from '../images/16.png';
import boulevardGallery5 from '../images/17.png';
import cathedralCover from '../images/18.png';
import cathedralGallery1 from '../images/19.png';
import cathedralGallery2 from '../images/20.png';
import pavilionCover from '../images/21.png';
import pavilionGallery1 from '../images/22.png';
import pavilionGallery2 from '../images/23.png';

const audioLanguages = [
  { id: 'ru', label: 'Русския язык' },
  { id: 'en', label: 'English language' },
  { id: 'zh', label: '中国语文科' },
  { id: 'fr', label: 'Français' }
];

const defaultAudioByLang = {
  ru: '',
  en: '',
  zh: '',
  fr: ''
};

const audioFiles = {
  ru: {
    kanavinsky: new URL('../audio/русский язык/МОСТ_РУССКАЯ ВЕРСИЯ.mp3', import.meta.url).href,
    fair: new URL('../audio/русский язык/ЯРМАРКА_РУССКАЯ.mp3', import.meta.url).href,
    boulevard: new URL('../audio/русский язык/БУЛЬАР_РУССКАЯ.mp3', import.meta.url).href,
    cathedral: new URL('../audio/русский язык/СОБОР_РУССКАЯ.mp3', import.meta.url).href,
    pavilion: new URL('../audio/русский язык/ВОКЗАЛ-РУССКАЯ.mp3', import.meta.url).href
  },
  en: {
    kanavinsky: new URL('../audio/английский/МОСТ - англ.mp3', import.meta.url).href,
    fair: new URL('../audio/английский/ЯРМАРКА - АНГЛ.mp3', import.meta.url).href,
    boulevard: new URL('../audio/английский/БУЛЬВАР - АНГЛ.mp3', import.meta.url).href,
    cathedral: new URL('../audio/английский/СОБОР - АНГЛ.mp3', import.meta.url).href,
    pavilion: new URL('../audio/английский/ПАВИЛЬОН -  АНГЛ.mp3', import.meta.url).href
  },
  zh: {
    kanavinsky: new URL('../audio/китайский/МОСТ-КИТАЙСКАЯ.mp3', import.meta.url).href,
    fair: new URL('../audio/китайский/ЯРМАРКА - КИТАЙСКАЯ.mp3', import.meta.url).href,
    boulevard: new URL('../audio/китайский/БУЛВАР - КИТАЙСКИЙ.mp3', import.meta.url).href,
    cathedral: new URL('../audio/китайский/СОБОР - КИТАЙСКИЙ.mp3', import.meta.url).href,
    pavilion: new URL('../audio/китайский/ВОКЗАЛ -КИТАЙСКИЙ.mp3', import.meta.url).href
  },
  fr: {
    kanavinsky: new URL('../audio/французский/МОСТ - ФРАНЦИЯ.mp3', import.meta.url).href,
    fair: new URL('../audio/французский/ЯРМАРКА - ФРАНЦИЯ.mp3', import.meta.url).href,
    boulevard: new URL('../audio/французский/БУЛЬВАР - ФРАНЦИЯ .mp3', import.meta.url).href,
    cathedral: new URL('../audio/французский/СОБОР - ФРАНЦИЯ.mp3', import.meta.url).href,
    pavilion: new URL('../audio/французский/ПАВИЛЬОН - ФРАНЦИЯ.mp3', import.meta.url).href
  }
};

const basePoints = [
  {
    id: 'kanavinsky',
    title: 'Канавинский мост',
    summary: 'Наплавной мост инженера Бетанкура и место первого электрического трамвая России.',
    duration: '6:10',
    lat: 56.327875,
    lon: 43.97274,
    geo: 'Канавинский мост, Нижний Новгород',
    audioByLang: {
      ru: audioFiles.ru.kanavinsky,
      en: audioFiles.en.kanavinsky,
      zh: audioFiles.zh.kanavinsky,
      fr: audioFiles.fr.kanavinsky
    },
    cover: kanavinskyCover,
    gallery: [kanavinskyGallery1],
    details:
      'Канавинский мост — наплавное чудо инженера Бетанкура, полвека соединявшее кремль с ярмаркой. ' +
      'Представьте: самый длинный мост Российской империи, который каждую весну собирали заново, а по ночам разводили, ' +
      'пропуская суда с мачтами. Но главное: именно здесь, на деревянном настиле над водой, в 1896 году прогремел первый ' +
      'в России электрический трамвай с постоянным режимом работы. Грохот, искры, восторг публики — так Нижний встречал ' +
      'будущее на переправе, связавшей всю империю с её торговым сердцем.\n' +
      'Нажмите на аудиодорожку, чтобы услышать эту историю.'
  },
  {
    id: 'fair',
    title: 'Нижегородская ярмарка',
    summary: 'Главный торг Российской империи, где встречались купцы со всего света.',
    duration: '7:00',
    lat: 56.328413,
    lon: 43.960927,
    geo: 'Нижегородская ярмарка, Нижний Новгород',
    audioByLang: {
      ru: audioFiles.ru.fair,
      en: audioFiles.en.fair,
      zh: audioFiles.zh.fair,
      fr: audioFiles.fr.fair
    },
    cover: fairCover,
    gallery: [fairGallery1, fairGallery2],
    details:
      'Нижегородская ярмарка — главный торг Российской империи, куда после пожара 1817 года перенесли знаменитое ' +
      'Макарьевское торжище и где граф Румянцев пророчил Нижнему звание «третьей столицы». Представьте: на стрелке Оки ' +
      'и Волги, среди двухэтажных каменных корпусов, встречались купцы со всего света — от Персии и Китая до Европы и ' +
      'Америки. Товарооборот рос с 24 до 57 миллионов рублей, а население города на время ярмарки раздувалось в 13 раз: ' +
      '15 тысяч торгующих и до 200 тысяч посетителей съезжались сюда, чтобы продать, купить и просто подивиться на это ' +
      'вавилонское столпотворение.\n' +
      'Нажмите на аудиодорожку, чтобы оказаться в самом сердце этого торга.'
  },
  {
    id: 'boulevard',
    title: 'Ярмарочный бульвар',
    summary: 'Где Европа встречалась с Азией, а торговые ряды кипели полтора месяца.',
    duration: '5:40',
    lat: 56.329906,
    lon: 43.957549,
    geo: 'Ярмарочный бульвар, Нижний Новгород',
    audioByLang: {
      ru: audioFiles.ru.boulevard,
      en: audioFiles.en.boulevard,
      zh: audioFiles.zh.boulevard,
      fr: audioFiles.fr.boulevard
    },
    cover: boulevardCover,
    gallery: [boulevardGallery1, boulevardGallery2, boulevardGallery3, boulevardGallery4, boulevardGallery5],
    details:
      'Здесь Европа действительно встречалась с Азией: в Китайском проезде торговали чаем, который везли два года, в ' +
      'персидских рядах пахло шелком и сухофруктами, астраханскую рыбу грузили у пристани, уральское железо заполняло ' +
      'склады. Под ногами гуляла первая в России канализация, а фонтаны служили противопожарной защитой. Крики зазывал, ' +
      'звон колоколов, запах чая и ковров — всё это кипело полтора месяца, чтобы Нижний навсегда остался «карманом России».\n' +
      'Слушайте аудиодорожку и погружайтесь в атмосферу главного торга империи.'
  },
  {
    id: 'cathedral',
    title: 'Спасский староярмарочный собор',
    summary: 'Храм по чертежам Исаакиевского собора с удивительной историей.',
    duration: '5:30',
    lat: 56.331389,
    lon: 43.953889,
    geo: 'Спасский Староярмарочный собор, Нижний Новгород',
    audioByLang: {
      ru: audioFiles.ru.cathedral,
      en: audioFiles.en.cathedral,
      zh: audioFiles.zh.cathedral,
      fr: audioFiles.fr.cathedral
    },
    cover: cathedralCover,
    gallery: [cathedralGallery1, cathedralGallery2],
    details:
      'Единственный в России храм, построенный по чертежам Исаакиевского собора, — и с самой неожиданной проблемой: ' +
      'каждую весну Ока разливалась так, что к дверям причаливали лодки, а купеческие товары мокли в подвалах прямо во ' +
      'время службы. Но главный скандал случился из-за икон: итальянец Торричелли изобразил святых такими «живыми» ' +
      'и мускулистыми, что сибирские купцы отказывались им молиться и приносили в собор свои домашние образки.\n' +
      'Нажмите на аудиодорожку, чтобы узнать, чем закончилась эта история.'
  },
  {
    id: 'pavilion',
    title: 'Царский павильон',
    summary: 'Императорский павильон на вокзале, построенный к приезду Николая II.',
    duration: '4:45',
    lat: 56.322373,
    lon: 43.947151,
    geo: 'Царский павильон, Нижний Новгород',
    audioByLang: {
      ru: audioFiles.ru.pavilion,
      en: audioFiles.en.pavilion,
      zh: audioFiles.zh.pavilion,
      fr: audioFiles.fr.pavilion
    },
    cover: pavilionCover,
    gallery: [pavilionGallery1, pavilionGallery2],
    details:
      'Императорский павильон — единственный уцелевший свидетель царского величия на нижегородском вокзале: изящный ' +
      'дворец с башенками и гербами, построенный специально к приезду Николая II. Планировали скромное здание за 15 тысяч, ' +
      'но потратили почти 60 — зато с мраморным камином и отдельными туалетами для каждого высокого гостя, что по тем ' +
      'временам было неслыханной роскошью. После революции павильон чудом уцелел, когда главное здание вокзала превратилось ' +
      'в советскую «коробку».\n' +
      'Нажмите на аудиодорожку, чтобы узнать, как император принимал гостей в этом маленьком дворце.'
  }
];

const mapMarkerIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.5 11.5l7.5-6 7.5 6" strokeWidth="1.8" />
    <path d="M6.5 10.5v8h11v-8" strokeWidth="1.6" />
    <path d="M10.2 18.5v-4.2h3.6v4.2" strokeWidth="1.6" />
  </svg>
);

const mapIcons = {
  kanavinsky: mapMarkerIcon,
  fair: mapMarkerIcon,
  boulevard: mapMarkerIcon,
  cathedral: mapMarkerIcon,
  pavilion: mapMarkerIcon
};

const basePointsById = Object.fromEntries(basePoints.map((point) => [point.id, point]));
const mediaById = Object.fromEntries(
  basePoints.map((point) => [point.id, { cover: point.cover, gallery: point.gallery }])
);

const enrichPoint = (point) => {
  const fallback = basePointsById[point.id] || {};
  const media = mediaById[point.id] || {};
  return {
    ...fallback,
    ...point,
    ...media,
    audioByLang: { ...defaultAudioByLang, ...fallback.audioByLang, ...point.audioByLang }
  };
};

const partnersList = [
  'Научно-исследовательский университет Высшая школа экономики',
  'Нижегородский государственный художественный музей',
  'Волго-Вятское главное управление Банка России'
];

const facts = [
  { label: 'Продолжительность', value: '2 часа' },
  { label: 'Точек маршрута', value: '5' },
  { label: 'Формат', value: 'Аудиогид на 4 языках' },
  { label: 'Для кого', value: 'Для гостей города и жителей' }
];

const aboutText =
  'На этом маршруте мы разгадаем главный феномен города: как захудалая переправа превратилась в место встречи мировых ' +
  'цивилизаций. Вы увидите Царский павильон, куда приезжал Николай II, узнаете тайну подземных каналов Бетанкура и ' +
  'услышите истории самых богатых людей XIX века, которые ходили в простых кафтанах и кормили всю Россию.';

const sectionIds = {
  hero: 'start',
  about: 'about',
  map: 'map',
  list: 'list',
  footer: 'footer'
};

const audioStorageKey = 'nn_audio_overrides';

const getRouteState = () => {
  if (typeof window === 'undefined') {
    return { page: 'home', focusId: null, hash: '' };
  }

  const { pathname, search, hash } = window.location;

  if (pathname.startsWith('/gallery/')) {
    const galleryId = decodeURIComponent(pathname.replace('/gallery/', '').split('/')[0]);
    return { page: 'gallery', galleryId };
  }

  if (pathname.startsWith('/admin')) {
    return { page: 'admin' };
  }

  const params = new URLSearchParams(search);
  const focusId = params.get('point');
  return { page: 'home', focusId, hash };
};

export default function App() {
  const [points, setPoints] = useState(basePoints.map(enrichPoint));
  const [partners, setPartners] = useState(partnersList);
  const [activeId, setActiveId] = useState(basePoints[0].id);
  const [route, setRoute] = useState(getRouteState);
  const [audioOverrides, setAudioOverrides] = useState(() => {
    if (typeof window === 'undefined') return {};
    try {
      const raw = window.localStorage.getItem(audioStorageKey);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      console.warn('Не удалось прочитать настройки аудио', error);
      return {};
    }
  });
  const [adminPointId, setAdminPointId] = useState(basePoints[0].id);
  const [adminDraft, setAdminDraft] = useState({ ...defaultAudioByLang });
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], index: 0, title: '' });
  const mapRef = useRef(null);
  const aboutRef = useRef(null);

  const orderedPoints = useMemo(() => {
    const order = basePoints.map((point) => point.id);
    return [...points].sort((left, right) => {
      const leftIndex = order.indexOf(left.id);
      const rightIndex = order.indexOf(right.id);
      if (leftIndex === -1 && rightIndex === -1) return 0;
      if (leftIndex === -1) return 1;
      if (rightIndex === -1) return -1;
      return leftIndex - rightIndex;
    });
  }, [points]);

  const activePoint = useMemo(
    () => orderedPoints.find((point) => point.id === activeId) || orderedPoints[0],
    [orderedPoints, activeId]
  );

  const mapBounds = useMemo(() => {
    if (!orderedPoints.length) {
      return {
        minLat: 0,
        maxLat: 1,
        minLon: 0,
        maxLon: 1
      };
    }

    const lats = orderedPoints.map((point) => point.lat);
    const lons = orderedPoints.map((point) => point.lon);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLon = Math.min(...lons);
    const maxLon = Math.max(...lons);
    const latSpan = maxLat - minLat || 1;
    const lonSpan = maxLon - minLon || 1;
    const padding = 0.18;

    return {
      minLat: minLat - latSpan * padding,
      maxLat: maxLat + latSpan * padding,
      minLon: minLon - lonSpan * padding,
      maxLon: maxLon + lonSpan * padding
    };
  }, [orderedPoints]);

  const mapPoints = useMemo(() => {
    const { minLat, maxLat, minLon, maxLon } = mapBounds;
    const latSpan = maxLat - minLat || 1;
    const lonSpan = maxLon - minLon || 1;
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    return orderedPoints.map((point, index) => ({
      ...point,
      index,
      x: clamp(((point.lon - minLon) / lonSpan) * 100, 8, 92),
      y: clamp(((maxLat - point.lat) / latSpan) * 100, 8, 92)
    }));
  }, [orderedPoints, mapBounds]);

  const routePolyline = useMemo(
    () => mapPoints.map((point) => `${point.x},${point.y}`).join(' '),
    [mapPoints]
  );

  const yandexRouteLink = useMemo(() => {
    const pointsQuery = orderedPoints.map((point) => `${point.lat},${point.lon}`).join('~');
    const encoded = encodeURIComponent(pointsQuery);
    return `https://yandex.ru/maps/?mode=routes&rtext=${encoded}&rtt=pedestrian`;
  }, [orderedPoints]);

  const getAudioForPoint = (point, langId) => {
    const overrides = audioOverrides[point.id] || {};
    return overrides[langId] || point.audioByLang?.[langId] || defaultAudioByLang[langId];
  };

  const buildAdminDraft = (pointId) => {
    const point = orderedPoints.find((item) => item.id === pointId) || orderedPoints[0];
    return audioLanguages.reduce((acc, language) => {
      acc[language.id] = getAudioForPoint(point, language.id);
      return acc;
    }, {});
  };

  const openLightbox = (images, index, title) => {
    setLightbox({ isOpen: true, images, index, title });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const lightboxPrev = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  const lightboxNext = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };


  const galleryPoint = useMemo(() => {
    if (route.page !== 'gallery') return null;
    return points.find((point) => point.id === route.galleryId) || null;
  }, [points, route]);

  const galleryImages = useMemo(() => {
    if (!galleryPoint) return [];
    return [galleryPoint.cover, ...galleryPoint.gallery];
  }, [galleryPoint]);

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      try {
        const response = await fetch('/api/points', { signal: controller.signal });
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data.points) && data.points.length) {
          setPoints(data.points.map(enrichPoint));
        }
      } catch (error) {
        if (error?.name !== 'AbortError') {
          console.warn('Не удалось загрузить точки маршрута', error);
        }
      }
    };

    const loadPartners = async () => {
      try {
        const response = await fetch('/api/partners', { signal: controller.signal });
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data.partners) && data.partners.length) {
          setPartners(data.partners);
        }
      } catch (error) {
        if (error?.name !== 'AbortError') {
          console.warn('Не удалось загрузить партнеров', error);
        }
      }
    };

    loadData();
    loadPartners();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!points.length) return;
    if (!points.some((point) => point.id === activeId)) {
      setActiveId(points[0].id);
    }
  }, [points, activeId]);

  useEffect(() => {
    if (!orderedPoints.length) return;
    setAdminDraft(buildAdminDraft(adminPointId));
  }, [adminPointId, audioOverrides, orderedPoints]);

  useEffect(() => {
    const handlePop = () => setRoute(getRouteState());
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  useEffect(() => {
    if (route.page === 'gallery') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [route.page, route.galleryId]);

  useEffect(() => {
    if (!lightbox.isOpen) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
      if (event.key === 'ArrowLeft') {
        lightboxPrev();
      }
      if (event.key === 'ArrowRight') {
        lightboxNext();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.isOpen]);

  useEffect(() => {
    if (route.page !== 'home') return;

    if (route.focusId && points.some((point) => point.id === route.focusId)) {
      setActiveId(route.focusId);
    }

    if (route.hash === `#${sectionIds.map}` && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [route, points]);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [points, partners, route.page]);

  useEffect(() => {
    let raf = null;

    const handleScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.18, 72);
        document.documentElement.style.setProperty('--hero-shift', `${offset}px`);
        raf = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setRoute(getRouteState());
  };

  const handleScrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenGallery = (pointId) => {
    navigateTo(`/gallery/${pointId}`);
  };

  const handleBackToMap = (pointId) => {
    navigateTo(`/?point=${pointId}#${sectionIds.map}`);
  };

  const handleBackToHome = () => {
    navigateTo('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdmin = () => {
    navigateTo('/admin');
  };

  const persistAudioOverrides = (nextOverrides) => {
    setAudioOverrides(nextOverrides);
    try {
      window.localStorage.setItem(audioStorageKey, JSON.stringify(nextOverrides));
    } catch (error) {
      console.warn('Не удалось сохранить настройки аудио', error);
    }
  };

  const handleAdminSave = () => {
    const nextOverrides = {
      ...audioOverrides,
      [adminPointId]: { ...audioOverrides[adminPointId], ...adminDraft }
    };
    persistAudioOverrides(nextOverrides);
  };

  const handleAdminReset = () => {
    const nextOverrides = { ...audioOverrides };
    delete nextOverrides[adminPointId];
    persistAudioOverrides(nextOverrides);
    setAdminDraft(buildAdminDraft(adminPointId));
  };

  const lightboxNode = lightbox.isOpen ? (
    <div className="lightbox" role="dialog" aria-modal="true">
      <button className="lightbox-backdrop" type="button" onClick={closeLightbox} aria-label="Закрыть" />
      <div className="lightbox-content">
        <div className="lightbox-header">
          <span>{lightbox.title}</span>
          <button className="btn btn-ghost" type="button" onClick={closeLightbox}>
            Закрыть
          </button>
        </div>
        <div className="lightbox-body">
          <button className="lightbox-nav" type="button" onClick={lightboxPrev} aria-label="Предыдущее фото">
            ‹
          </button>
          <img src={lightbox.images[lightbox.index]} alt={`${lightbox.title}. Фото ${lightbox.index + 1}`} />
          <button className="lightbox-nav" type="button" onClick={lightboxNext} aria-label="Следующее фото">
            ›
          </button>
        </div>
      </div>
    </div>
  ) : null;

  if (route.page === 'admin') {
    return (
      <div className="page">
        <main className="admin-page">
          <header className="admin-header" data-reveal>
            <div>
              <span className="admin-label">Админ-панель</span>
              <h1>Аудио маршрута</h1>
              <p>Укажите ссылки на аудиодорожки для каждой точки и языка. Сохранение происходит в этом браузере.</p>
            </div>
            <div className="admin-nav">
              <button className="btn btn-ghost" type="button" onClick={handleBackToHome}>
                На главную
              </button>
            </div>
          </header>

          <section className="admin-card" data-reveal>
            <label className="admin-select">
              <span>Точка маршрута</span>
              <select value={adminPointId} onChange={(event) => setAdminPointId(event.target.value)}>
                {orderedPoints.map((point) => (
                  <option key={point.id} value={point.id}>
                    {point.title}
                  </option>
                ))}
              </select>
            </label>

            <div className="admin-fields">
              {audioLanguages.map((language) => (
                <label className="admin-field" key={language.id}>
                  <span>{language.label}</span>
                  <input
                    type="url"
                    value={adminDraft[language.id] || ''}
                    placeholder="https://..."
                    onChange={(event) =>
                      setAdminDraft((prev) => ({ ...prev, [language.id]: event.target.value.trim() }))
                    }
                  />
                </label>
              ))}
            </div>

            <div className="admin-actions">
              <button className="btn" type="button" onClick={handleAdminSave}>
                Сохранить
              </button>
              <button className="btn btn-ghost" type="button" onClick={handleAdminReset}>
                Сбросить
              </button>
            </div>
          </section>
        </main>
        {lightboxNode}
      </div>
    );
  }

  if (route.page === 'gallery') {
    return (
      <div className="page">
        <main className="gallery-page">
          <div className="gallery-top" data-reveal>
            <button className="btn btn-ghost" type="button" onClick={handleBackToHome}>
              На главную
            </button>
          </div>
          {galleryPoint ? (
            <>
              <section className="gallery-hero" data-reveal>
                <div className="gallery-hero-media">
                  <button
                    className="gallery-hero-button"
                    type="button"
                    onClick={() => openLightbox(galleryImages, 0, galleryPoint.title)}
                  >
                    <img src={galleryPoint.cover} alt={galleryPoint.title} />
                  </button>
                </div>
                <div className="gallery-hero-content">
                  <span className="gallery-label">Историческая фотолента</span>
                  <h1>{galleryPoint.title}</h1>
                  <p>{galleryPoint.summary}</p>
                  <div className="gallery-actions">
                    <button className="btn" type="button" onClick={() => handleBackToMap(galleryPoint.id)}>
                      Вернуться к карте
                    </button>
                    <button className="btn btn-soft" type="button" onClick={handleBackToHome}>
                      Вернуться к началу
                    </button>
                  </div>
                </div>
              </section>
              <section className="gallery-grid" data-reveal>
                {galleryImages.map((image, index) => (
                  <button
                    className="gallery-card"
                    type="button"
                    key={image}
                    onClick={() => openLightbox(galleryImages, index, galleryPoint.title)}
                  >
                    <img src={image} alt={`${galleryPoint.title}. Историческое фото ${index + 1}`} />
                    <span>Фото {index + 1}</span>
                  </button>
                ))}
              </section>
            </>
          ) : (
            <section className="gallery-empty" data-reveal>
              <h1>Точка маршрута не найдена</h1>
              <p>Проверьте адрес или вернитесь на главную страницу.</p>
              <button className="btn" type="button" onClick={handleBackToHome}>
                На главную
              </button>
            </section>
          )}
        </main>
        {lightboxNode}
      </div>
    );
  }

  return (
    <div className="page">
      <header className="hero" id={sectionIds.hero} style={{ '--hero-image': `url(${heroImage})` }}>
        <div className="hero-content" data-reveal>
          <p className="hero-kicker">Экскурсионный маршрут по Нижнему Новгороду</p>
          <h1 className="hero-title">
            <span className="hero-title-main">Нижегородская ярмарка</span>
            <span className="hero-title-sub">3 мира за 2 часа</span>
          </h1>
          <div className="hero-actions">
            <button className="btn" type="button" onClick={() => handleScrollTo(mapRef)}>
              Открыть карту
            </button>
          </div>
        </div>
        <p className="hero-quote">
          «Петербург — голова, Москва — сердце, а Нижний Новгород — карман России» — поговорка XIX века
        </p>
      </header>

      <main>
        <section className="section about" id={sectionIds.about} ref={aboutRef}>
          <div className="section-header" data-reveal>
            <h2>О маршруте</h2>
          </div>
          <div className="about-layout">
            <div className="about-text" data-reveal>
              <p>{aboutText}</p>
            </div>
            <div className="about-grid" data-reveal>
              {facts.map((fact) => (
                <div className="about-card" key={fact.label}>
                  <span className="about-label">{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section map-section" id={sectionIds.map} ref={mapRef}>
          <div className="section-header" data-reveal>
            <h2>Интерактивная карта маршрута</h2>
            <p className="section-lead">
              Нажмите на объект, чтобы открыть историческую справку и аудиодорожки на четырёх языках.
            </p>
          </div>
          <div className="map-shell">
            <div className="map-left">
              <div className="map-frame" data-reveal>
                <div className="map-art" role="img" aria-label="Схематичная карта маршрута">
                  <svg className="map-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polyline points={routePolyline} />
                  </svg>
                  {mapPoints.map((point) => (
                    <button
                      className={`map-point${point.id === activeId ? ' is-active' : ''}`}
                      key={point.id}
                      type="button"
                      onClick={() => setActiveId(point.id)}
                      style={{ left: `${point.x}%`, top: `${point.y}%` }}
                      aria-label={`Открыть точку: ${point.title}`}
                    >
                      <span className="map-point-dot">{mapIcons[point.id]}</span>
                      <span className="map-point-label">
                        {point.index + 1}. {point.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="map-link" data-reveal>
                <a className="btn btn-ghost" href={yandexRouteLink} target="_blank" rel="noreferrer">
                  Открыть в Яндекс Картах
                </a>
              </div>
            </div>

            <aside className={`map-card${activePoint ? ' is-active' : ''}`} data-reveal>
              {activePoint && (
                <div className="map-card-inner">
                  <span className="map-card-label">Точка маршрута</span>
                  <h3>{activePoint.title}</h3>
                  <div className="map-card-media">
                    <button
                      className="map-card-image"
                      type="button"
                      onClick={() =>
                        openLightbox([activePoint.cover, ...activePoint.gallery], 0, activePoint.title)
                      }
                    >
                      <img src={activePoint.cover} alt={activePoint.title} />
                    </button>
                    <button className="btn btn-dark" type="button" onClick={() => handleOpenGallery(activePoint.id)}>
                      Фото
                    </button>
                  </div>
                  <div className="map-card-text">
                    {activePoint.details.split('\n').map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <div className="map-audio" key={activePoint.id}>
                    {audioLanguages.map((track) => (
                      <div className="map-audio-track" key={track.id}>
                        <span className="map-audio-label">{track.label}</span>
                        <audio controls preload="none">
                          <source src={getAudioForPoint(activePoint, track.id)} type="audio/mpeg" />
                          Ваш браузер не поддерживает аудио.
                        </audio>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        <section className="section list-section" id={sectionIds.list}>
          <div className="section-header" data-reveal>
            <h2>Все точки маршрута</h2>
            <p className="section-lead">Короткая навигация по ключевым местам маршрута.</p>
          </div>
          <div className="list-grid">
            {orderedPoints.map((point, index) => (
              <article className="list-card" key={point.id} data-reveal>
                <span className="list-index">Точка {String(index + 1).padStart(2, '0')}</span>
                <h3>{point.title}</h3>
                <p>{point.summary}</p>
                <div className="list-meta">
                  <button
                    className="btn btn-ghost"
                    type="button"
                    onClick={() => {
                      setActiveId(point.id);
                      handleScrollTo(mapRef);
                    }}
                  >
                    Перейти на карте
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id={sectionIds.footer}>
        <div className="footer-inner">
          <div className="footer-block">
            <h4>Партнеры</h4>
            <ul>
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
          <div className="footer-block">
            <h4>Контакты</h4>
            <p>nnhistorictrip@gmail.com</p>
          </div>
          <div className="footer-block">
            <h4>Навигация</h4>
            <button className="btn btn-soft" type="button" onClick={handleBackToHome}>
              Вернуться к началу
            </button>
          </div>
        </div>
        <div className="footer-bottom">Нижегородская Ярмарка — аудиомаршрут по городу</div>
      </footer>
      {lightboxNode}
    </div>
  );
}
