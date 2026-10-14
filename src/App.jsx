import { Fragment, useEffect, useState } from 'react'
import { ExternalLink, Languages } from 'lucide-react'
import { advisorHomepage, education, experience, honors, profile, publications, services } from './data'

const ECNU_CS_URL = 'https://cs.ecnu.edu.cn/'
const SII_URL = 'https://www.sii.edu.cn/'
const ECNU_INTERVIEW_URL = 'https://www.ecnu.edu.cn/info/1094/72140.htm'
const STAR_THRESHOLD = 20

const copy = {
  en: {
    nav: {
      about: 'About me',
      education: 'Education',
      experience: 'Experience',
      honors: 'Honors',
      publications: 'Publications',
    },
    role: 'PhD @ ECNU & SII',
    aboutTitle: 'About me',
    about: [
      [
        'I am currently a Ph.D. student jointly trained by the ',
        { text: 'School of Computer Science and Technology, East China Normal University', href: ECNU_CS_URL },
        ' and ',
        { text: 'Shanghai Innovation Institute', href: SII_URL },
        ', advised by ',
        { text: 'Prof. Yuan Xie', href: advisorHomepage },
        '. My research focuses on ',
        { text: 'continual learning for multimodal large models', strong: true },
        ' and ',
        { text: 'self-evolving agents', strong: true },
        ', especially on how models can learn new knowledge, modalities, and capabilities while reducing catastrophic forgetting.',
      ],
      [
        'I am currently working on foundation model development and agent research at Tencent TEG (Qingyun Talent Program). Before that, I worked on agent harness and agentic RL research at Tencent WXG (Qingyun Talent Program). I also serve as a member of the Think Tank Expert Advisory Committee of the Henan Provincial Government Office in Shanghai.',
      ],
      [
        'ECNU featured my research journey in a personal interview: ',
        {
          text: '“Venturing into No-Man’s Land: An ECNU Ph.D. Student’s Three Cross-Disciplinary Leaps”',
          href: ECNU_INTERVIEW_URL,
        },
        ' (in Chinese).',
      ],
    ],
    interestsLabel: 'Research Interests:',
    interests: [
      {
        label: 'Continual Learning',
        text: 'Mitigating catastrophic forgetting when models continually learn new tasks',
        papers: ['pgp', 'pegp'],
      },
      {
        label: 'Multimodal Large Models',
        text: 'Continually learning new instructions and tasks',
        papers: ['lcia', 'continual-next', 'pclr'],
      },
      {
        label: 'Self-evolving Agents',
        text: 'Enabling agents to evolve safely from runtime experience at test time',
        papers: ['safecoevo'],
      },
      {
        label: 'Agent Memory',
        text: 'Turning past experience into reusable memory and planning skills for deep research agents',
        papers: ['mia'],
      },
    ],
    punctuation: { colon: ': ', open: ' (', close: ')', separator: ', ', end: ';', last: '.' },
    goal: 'I aim to build AI systems that continually accumulate experience, adapt to the open world, and grow more reliable.',
    educationTitle: 'Education',
    experienceTitle: 'Research Experience',
    honorsTitle: 'Honors',
    publicationsTitle: 'Publications',
    servicesTitle: 'Academic Services',
    links: {
      Paper: 'Paper',
      Code: 'Code',
      Models: 'Models',
      Data: 'Data',
      Project: 'Project',
      OpenReview: 'OpenReview',
      Proceedings: 'Proceedings',
      Toolkit: 'Toolkit',
    },
    switchLanguage: '中文',
    footer: 'Last updated October 2026.',
  },
  zh: {
    nav: {
      about: '个人简介',
      education: '教育背景',
      experience: '研究经历',
      honors: '荣誉奖项',
      publications: '论文发表',
    },
    role: ['华东师范大学 · 上海创智学院', '联合培养博士生'],
    aboutTitle: '个人简介',
    about: [
      [
        '我目前是',
        { text: '华东师范大学计算机学院', href: ECNU_CS_URL },
        '和',
        { text: '上海创智学院', href: SII_URL },
        '联合培养博士研究生，导师为',
        { text: '谢源教授', href: advisorHomepage },
        '。我的研究聚焦',
        { text: '多模态大模型持续学习', strong: true },
        '与',
        { text: '智能体自主进化', strong: true },
        '，主要关注模型如何在学习新知识、新模态和新能力的同时，降低灾难性遗忘。',
      ],
      [
        '我目前在腾讯 TEG 从事基础模型开发和 Agent 研究（青云计划），在此之前，我在腾讯 WXG 从事 Agent Harness 和 Agentic RL 研究（青云计划）。我还担任河南省人民政府驻上海办事处智库专家咨询委员会委员。',
      ],
      [
        '华东师范大学官网对我进行了个人专访：',
        { text: '《勇闯“无人区”：华东师大博士生的三次跨界》', href: ECNU_INTERVIEW_URL },
        '。',
      ],
    ],
    interestsLabel: '研究方向：',
    interests: [
      {
        label: '持续学习',
        text: '缓解模型在持续学习新任务时的灾难性遗忘',
        papers: ['pgp', 'pegp'],
      },
      {
        label: '多模态大模型',
        text: '让多模态大模型持续学习新指令与新任务',
        papers: ['lcia', 'continual-next', 'pclr'],
      },
      {
        label: '自进化智能体',
        text: '让智能体在测试时从运行经验中安全地持续进化',
        papers: ['safecoevo'],
      },
      {
        label: '智能体记忆',
        text: '将历史经验转化为可复用的记忆与规划能力，赋能深度研究智能体',
        papers: ['mia'],
      },
    ],
    punctuation: { colon: '：', open: '（', close: '）', separator: '、', end: '；', last: '。' },
    goal: '我的研究目标是构建能够持续积累经验、适应开放世界并不断提升可靠性的人工智能系统。',
    educationTitle: '教育背景',
    experienceTitle: '研究经历',
    honorsTitle: '荣誉奖项',
    publicationsTitle: '论文发表',
    servicesTitle: '学术服务',
    links: {
      Paper: '论文',
      Code: '代码',
      Models: '模型',
      Data: '数据',
      Project: '主页',
      OpenReview: 'OpenReview',
      Proceedings: '会议页',
      Toolkit: '工具箱',
    },
    switchLanguage: 'English',
    footer: '最后更新于 2026 年 10 月。',
  },
}

const navItems = ['about', 'education', 'experience', 'honors', 'publications']

const starRepos = publications.map((publication) => publication.repo).filter(Boolean)

const publicationsById = Object.fromEntries(publications.map((publication) => [publication.id, publication]))

function parseStarCount(message) {
  const match = /^([\d.]+)\s*([km])?$/i.exec(message ?? '')
  if (!match) return null
  const scale = { k: 1e3, m: 1e6 }[match[2]?.toLowerCase()] ?? 1
  return Math.round(Number(match[1]) * scale)
}

function formatStarCount(count) {
  return count >= 1000 ? `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(count)
}

function useLiveStars(repos) {
  const [liveStars, setLiveStars] = useState({})

  useEffect(() => {
    let active = true
    repos.forEach((repo) => {
      fetch(`https://img.shields.io/github/stars/${repo}.json`)
        .then((response) => (response.ok ? response.json() : null))
        .then((badge) => {
          const count = parseStarCount(badge?.message)
          if (active && count !== null) setLiveStars((current) => ({ ...current, [repo]: count }))
        })
        .catch(() => {})
    })
    return () => {
      active = false
    }
  }, [repos])

  return liveStars
}

function Text({ value, lang }) {
  return value?.[lang] ?? value
}

function RichText({ segments }) {
  return segments.map((segment, index) => {
    if (typeof segment === 'string') return segment
    if (segment.href) {
      return (
        <a href={segment.href} target="_blank" rel="noreferrer" key={index}>
          {segment.text}
        </a>
      )
    }
    return <strong key={index}>{segment.text}</strong>
  })
}

function AuthorLine({ authors }) {
  return authors.split(/(Jingyang Qiao\*?)/g).map((part, index) =>
    part.startsWith('Jingyang Qiao') ? (
      <strong key={`${part}-${index}`}>{part}</strong>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  )
}

function Sidebar({ lang, t }) {
  return (
    <aside className="sidebar">
      <img className="avatar" src={profile.portrait} alt={profile.name} />
      <div className="author-info">
        <h1>
          {profile.name} <span>({profile.chineseName})</span>
        </h1>
        <p className="author-role">
          {[].concat(t.role).map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <ul className="author-links">
          <li>
            <img className="link-logo" src="./images/icons/location.svg" alt="" />
            <Text value={profile.location} lang={lang} />
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>
              <img className="link-logo" src="./images/icons/email.svg" alt="" />
              {profile.email}
            </a>
          </li>
          {profile.links.map((link) => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noreferrer">
                <img className="link-logo" src={link.icon} alt="" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

function App() {
  const [lang, setLang] = useState(() => {
    const stored = window.localStorage.getItem('jingyang-homepage-language')
    if (stored === 'en' || stored === 'zh') return stored
    return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
  })
  const liveStars = useLiveStars(starRepos)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    window.localStorage.setItem('jingyang-homepage-language', lang)
  }, [lang])

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="#about">
            Homepage
          </a>
          <nav aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href={`#${item}`} key={item}>
                {t.nav[item]}
              </a>
            ))}
          </nav>
          <button
            className="language-button"
            type="button"
            onClick={() => setLang((value) => (value === 'en' ? 'zh' : 'en'))}
          >
            <Languages size={16} />
            {t.switchLanguage}
          </button>
        </div>
      </header>

      <div className="page-layout">
        <Sidebar lang={lang} t={t} />

        <main className="main-content">
          <section id="about">
            <h2>{t.aboutTitle}</h2>
            {t.about.map((segments, index) => (
              <p key={index}>
                <RichText segments={segments} />
              </p>
            ))}
            <p className="interests-label">{t.interestsLabel}</p>
            <ul className="interest-list">
              {t.interests.map((interest, index) => {
                const mark = t.punctuation
                return (
                  <li key={interest.label}>
                    <strong>
                      {interest.label}
                      {mark.colon}
                    </strong>
                    {interest.text}
                    {mark.open}
                    {interest.papers.map((id, paperIndex) => (
                      <Fragment key={id}>
                        {paperIndex > 0 && mark.separator}
                        <a href={publicationsById[id].pdf} target="_blank" rel="noreferrer">
                          {publicationsById[id].short}
                        </a>
                      </Fragment>
                    ))}
                    {mark.close}
                    {index === t.interests.length - 1 ? mark.last : mark.end}
                  </li>
                )
              })}
            </ul>
            <p>{t.goal}</p>
          </section>

          <section id="education">
            <h2>{t.educationTitle}</h2>
            <ul className="history-list">
              {education.map((item) => (
                <li className="history-item education-item" key={item.degree.en}>
                  <div className="education-logos">
                    {item.logos.map((logo) => (
                      <img src={logo.src} alt={logo.alt} key={logo.src} />
                    ))}
                  </div>
                  <div className="history-body">
                    <p className="history-title">
                      <Text value={item.degree} lang={lang} />
                    </p>
                    <p>
                      <Text value={item.unit} lang={lang} />
                    </p>
                    {item.note && (
                      <p className="history-note">
                        <RichText segments={[].concat(item.note[lang])} />
                      </p>
                    )}
                  </div>
                  <span className="history-date">
                    <Text value={item.period} lang={lang} />
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section id="experience">
            <h2>{t.experienceTitle}</h2>
            <ul className="history-list">
              {experience.map((item) => (
                <li className="history-item experience-item" key={item.organization.en}>
                  <div className="history-head">
                    <p className="history-title">
                      <img className="org-logo" src={item.logo} alt="" />
                      <Text value={item.organization} lang={lang} />
                    </p>
                    <span className="history-date">
                      <Text value={item.period} lang={lang} />
                    </span>
                  </div>
                  <p className="history-role">
                    <Text value={item.role} lang={lang} />
                    <span className="history-program">
                      {lang === 'zh' ? '（' : ' ('}
                      <Text value={item.program} lang={lang} />
                      {lang === 'zh' ? '）' : ')'}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section id="honors">
            <h2>{t.honorsTitle}</h2>
            <ul className="honor-list">
              {honors.map((honor) => {
                const icon = honor.link && <ExternalLink size={14} />
                const label =
                  lang === 'zh' ? (
                    <>
                      {honor.zh ?? honor.note}
                      {icon}
                    </>
                  ) : (
                    <>
                      {honor.title}
                      <span className={honor.noteBelow ? 'honor-note honor-note--below' : 'honor-note'}>
                        （{honor.note}）{icon}
                      </span>
                    </>
                  )

                return (
                  <li key={`${honor.date}-${honor.title}`}>
                    <time>{honor.date}</time>
                    {honor.link ? (
                      <a href={honor.link} target="_blank" rel="noreferrer">
                        {label}
                      </a>
                    ) : (
                      <span>{label}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>

          <section id="publications">
            <h2>{t.publicationsTitle}</h2>
            <div className="publication-list">
              {publications.map((publication) => {
                const starCount = liveStars[publication.repo] ?? publication.stars

                return (
                  <article className="publication" key={publication.id}>
                    <a className="publication-figure" href={publication.pdf} target="_blank" rel="noreferrer">
                      <img src={publication.image} alt={`${publication.title} figure`} />
                    </a>

                    <div className="publication-body">
                      <h3>
                        <a href={publication.pdf} target="_blank" rel="noreferrer">
                          {publication.title}
                        </a>
                      </h3>
                      <p className="publication-authors">
                        <AuthorLine authors={publication.authors} />
                      </p>
                      <p className="publication-venue">
                        <span className="venue-name">{publication.venue}</span>
                        {publication.ccf && <span className="venue-ccf">{publication.ccf}</span>}
                        {publication.highlights?.map((highlight) =>
                          highlight.url ? (
                            <a
                              className="venue-highlight"
                              href={highlight.url}
                              target="_blank"
                              rel="noreferrer"
                              key={highlight.url}
                            >
                              <Text value={highlight.label} lang={lang} />
                            </a>
                          ) : (
                            <span className="venue-highlight" key={highlight.label}>
                              <Text value={highlight.label} lang={lang} />
                            </span>
                          ),
                        )}
                      </p>
                      <p className="publication-summary">
                        <Text value={publication.summary} lang={lang} />
                      </p>
                      <div className="publication-links">
                        {publication.links.map((link) => (
                          <a href={link.url} target="_blank" rel="noreferrer" key={link.label}>
                            {t.links[link.label]}
                          </a>
                        ))}
                        {starCount >= STAR_THRESHOLD && (
                          <a
                            className="publication-stars"
                            href={`https://github.com/${publication.repo}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img className="star-logo" src="./images/icons/github.svg" alt="" />
                            Stars <strong>{formatStarCount(starCount)}</strong>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>

          <section id="services">
            <h2>{t.servicesTitle}</h2>
            <ul className="service-list">
              {services.map((service) => (
                <li key={service.venues}>
                  <strong>
                    <Text value={service.label} lang={lang} />
                    {lang === 'zh' ? '：' : ': '}
                  </strong>
                  {service.venues}
                  {service.award && <span className="service-award"> ({service.award})</span>}
                </li>
              ))}
            </ul>
          </section>

          <footer>
            <span>© {new Date().getFullYear()} Jingyang Qiao.</span>
            <span>{t.footer}</span>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
