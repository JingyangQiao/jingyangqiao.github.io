export const profile = {
  name: 'Jingyang Qiao',
  chineseName: '乔静阳',
  email: '240208120192@sii.edu.cn',
  location: {
    en: 'Shanghai, China',
    zh: '中国 · 上海',
  },
  portrait: './images/jingyang-qiao-portrait.jpg',
  links: [
    { label: 'GitHub', url: 'https://github.com/JingyangQiao', icon: './images/icons/github.svg' },
    { label: 'Hugging Face', url: 'https://huggingface.co/jingyang', icon: './images/icons/huggingface.svg' },
    { label: 'DBLP', url: 'https://dblp.uni-trier.de/pid/378/1491.html', icon: './images/icons/dblp.png' },
  ],
}

export const advisorHomepage = 'https://faculty.ecnu.edu.cn/_s16/xy2_11342/main.psp'

export const education = [
  {
    period: { en: '2023.09 - Present', zh: '2023.09 - 至今' },
    logos: [
      { src: './images/schools/ecnu-lockup.png', alt: 'East China Normal University' },
      { src: './images/schools/sii-lockup.png', alt: 'Shanghai Innovation Institute' },
    ],
    degree: {
      en: 'Ph.D. in Computer Applied Technology',
      zh: '计算机应用技术 · 博士',
    },
    unit: {
      en: 'School of Computer Science and Technology, ECNU · Jointly trained with Shanghai Innovation Institute',
      zh: '华东师范大学计算机学院 · 上海创智学院联合培养',
    },
    note: {
      en: ['Advisor: ', { text: 'Prof. Yuan Xie', href: advisorHomepage }],
      zh: ['导师：', { text: '谢源教授', href: advisorHomepage }],
    },
  },
  {
    period: '2019.09 - 2022.03',
    logos: [{ src: './images/schools/sjtu-lockup.png', alt: 'Shanghai Jiao Tong University' }],
    degree: {
      en: 'M.S. in Electronic Science and Technology',
      zh: '电子科学与技术 · 硕士',
    },
    unit: {
      en: 'School of Electronic Information and Electrical Engineering',
      zh: '电子信息与电气工程学院',
    },
    note: {
      en: 'Outstanding Graduate',
      zh: '校级优秀毕业生',
    },
  },
  {
    period: '2015.09 - 2019.06',
    logos: [{ src: './images/schools/dut-lockup.png', alt: 'Dalian University of Technology' }],
    degree: {
      en: 'B.S. in Physics',
      zh: '物理学类 · 本科',
    },
    unit: {
      en: 'School of Physics and Optoelectronic Engineering',
      zh: '物理与光电工程学院',
    },
  },
]

export const experience = [
  {
    organization: { en: 'Tencent, TEG', zh: '腾讯 TEG' },
    logo: './images/icons/tencent.png',
    period: { en: '2026.09 - Present', zh: '2026.09 - 至今' },
    role: { en: 'Foundation Model and Agent Research', zh: '基础模型和 Agent 研究' },
    program: { en: 'Qingyun Talent Program', zh: '青云计划' },
  },
  {
    organization: { en: 'Tencent, WXG', zh: '腾讯 WXG' },
    logo: './images/icons/tencent.png',
    period: '2026.02 - 2026.07',
    role: { en: 'Agent Harness and Agentic RL Research', zh: 'Agent Harness 和 Agentic RL 研究' },
    program: { en: 'Qingyun Talent Program', zh: '青云计划' },
  },
  {
    organization: { en: 'Amazon, North America AI', zh: '亚马逊，北美 AI' },
    logo: './images/icons/amazon.png',
    period: '2022.05 - 2023.05',
    role: { en: 'Object Detection Benchmark and Algorithm Research', zh: '目标检测 Benchmark 和算法研究' },
    program: { en: "Li Mu's Team", zh: '李沐团队' },
  },
]

export const honors = [
  {
    date: '2026.08',
    title: 'CIE–Tencent Ph.D. Research Incentive Program',
    note: '中国电子学会-腾讯混元博士生科研激励计划，10w/人',
    noteBelow: true,
    link: 'https://cs.ecnu.edu.cn/c6/41/c24535a771649/page.htm',
  },
  {
    date: '2026.06',
    title: "National Scholarship for Overseas Study (King's College London), China Scholarship Council",
    note: '国家留学基金委2026年卓越工程师国际化培养项目',
    noteBelow: true,
    zh: '国家留学基金委2026年卓越工程师国际化培养项目（伦敦国王学院）',
  },
  {
    date: '2026.02',
    title: 'Tencent Qingyun Program',
    note: '腾讯青云计划',
  },
  {
    date: '2025.12',
    title: 'CAST Young Talent Development Program for Doctoral Students',
    note: '中国科协青年人才培育工程博士生专项',
  },
  {
    date: '2025.09',
    title: 'BYD Scholarship',
    note: '比亚迪奖学金，2w/人',
    link: 'http://www.cs.ecnu.edu.cn/f9/18/c19867a719128/page.htm',
  },
  {
    date: '2025.03',
    title: 'Think Tank Expert Advisory Committee Member, Henan Provincial Government Office in Shanghai',
    note: '河南省人民政府驻上海办事处智库专家咨询委员会委员',
    noteBelow: true,
  },
  {
    date: '2024.09',
    title: 'National First Prize, China Postgraduate AI Innovation Competition',
    note: '“华为杯”中国研究生人工智能创新大赛全国一等奖',
    noteBelow: true,
    link: 'https://cs.ecnu.edu.cn/a7/3e/c24535a632638/page.htm',
  },
  {
    date: '2024.06',
    title: 'ECNU Research Innovation Fund',
    note: '华东师范大学科研创新基金',
    link: 'http://www.cs.ecnu.edu.cn/_t3208/3c/8a/c19867a605322/page.htm',
  },
  {
    date: '2022.03',
    title: 'Outstanding Graduate, Shanghai Jiao Tong University',
    note: '上海交通大学校级优秀毕业生',
  },
]

export const publications = [
  {
    id: 'pgp',
    short: 'PGP',
    pdf: 'https://proceedings.iclr.cc/paper_files/paper/2024/file/46c2a9a6f2b2be68682013eb1173c801-Paper-Conference.pdf',
    title: 'Prompt Gradient Projection for Continual Learning',
    authors:
      'Jingyang Qiao*, Zhizhong Zhang*, Xin Tan, Chengwei Chen, Yanyun Qu, Yong Peng, Yuan Xie',
    venue: 'ICLR 2024',
    ccf: 'CCF A',
    highlights: [{ label: 'Spotlight' }],
    summary: {
      en: 'Projects prompt gradients into an orthogonal subspace to provide a principled defense against forgetting.',
      zh: '将提示梯度投影至正交子空间，为缓解持续学习遗忘提供理论机制。',
    },
    image: './images/papers/pgp.jpg',
    repo: 'JingyangQiao/prompt-gradient-projection',
    stars: 89,
    links: [
      { label: 'Paper', url: 'https://openreview.net/forum?id=EH2O3h7sBI' },
      { label: 'Code', url: 'https://github.com/JingyangQiao/prompt-gradient-projection' },
      {
        label: 'Proceedings',
        url: 'https://proceedings.iclr.cc/paper_files/paper/2024/hash/46c2a9a6f2b2be68682013eb1173c801-Abstract-Conference.html',
      },
    ],
  },
  {
    id: 'lcia',
    short: 'LCIA',
    pdf: 'https://arxiv.org/pdf/2410.10868',
    title: 'Large Continual Instruction Assistant',
    authors: 'Jingyang Qiao, Zhizhong Zhang, Xin Tan, Yanyun Qu, Shouhong Ding, Yuan Xie',
    venue: 'ICML 2025',
    ccf: 'CCF A',
    summary: {
      en: 'Balances stability and plasticity with dynamic EMA and routes instructions to task-aware LoRA modules.',
      zh: '以动态 EMA 平衡稳定性与可塑性，并将指令路由到任务感知的 LoRA 模块。',
    },
    image: './images/papers/lcia.png',
    repo: 'JingyangQiao/CoIN',
    stars: 66,
    links: [
      { label: 'Paper', url: 'https://proceedings.mlr.press/v267/qiao25e.html' },
      { label: 'Code', url: 'https://github.com/JingyangQiao/CoIN' },
      { label: 'OpenReview', url: 'https://openreview.net/forum?id=XSOJx4hj0y' },
    ],
  },
  {
    id: 'pegp',
    short: 'PEGP',
    pdf: 'https://arxiv.org/pdf/2405.13383',
    title: 'Gradient Projection for Continual Parameter-Efficient Tuning',
    authors:
      'Jingyang Qiao, Zhizhong Zhang, Xin Tan, Yanyun Qu, Wensheng Zhang, Zhi Han, Yuan Xie',
    venue: 'IEEE TPAMI 2025',
    ccf: 'CCF A',
    summary: {
      en: 'A unified gradient-projection framework for continual prompt, prefix, adapter, and LoRA tuning.',
      zh: '统一覆盖 Prompt、Prefix、Adapter 与 LoRA 的参数高效持续学习梯度投影框架。',
    },
    image: './images/papers/pegp.jpg',
    repo: 'JingyangQiao/PEGP',
    stars: 12,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2405.13383' },
      { label: 'Code', url: 'https://github.com/JingyangQiao/PEGP' },
      { label: 'Project', url: 'https://dmcv-ecnu-pegp.github.io/' },
    ],
  },
  {
    id: 'mia',
    short: 'MIA',
    pdf: 'https://arxiv.org/pdf/2604.04503',
    title: 'Memory Intelligence Agent',
    authors:
      'Jingyang Qiao*, Weicheng Meng*, Yu Cheng, Zhihang Lin, Zhizhong Zhang, Xin Tan, Jingyu Gong, Kun Shao, Yuan Xie',
    venue: 'arXiv 2026',
    highlights: [
      { label: 'Hugging Face Daily Paper', url: 'https://huggingface.co/papers/2604.04503' },
      {
        label: { en: 'Featured by 机器之心', zh: '被机器之心收录' },
        url: 'https://news.qq.com/rain/a/20260419A03Y5H00',
      },
    ],
    summary: {
      en: 'A Manager–Planner–Executor memory framework that lets deep-research agents learn strategies and evolve online.',
      zh: '面向深度研究智能体的 Manager–Planner–Executor 记忆框架，支持在线自进化。',
    },
    image: './images/papers/mia.jpg',
    repo: 'ECNU-SII/MIA',
    stars: 792,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2604.04503' },
      { label: 'Code', url: 'https://github.com/ECNU-SII/MIA' },
      { label: 'Models', url: 'https://huggingface.co/LightningCreeper/MIA' },
    ],
  },
  {
    id: 'pclr',
    short: 'PCLR',
    pdf: 'https://proceedings.iclr.cc/paper_files/paper/2026/file/5a5acfd0876c940d81619c1dc60e7748-Paper-Conference.pdf',
    title: 'PCLR: Progressively Compressed LoRA for Multimodal Continual Instruction Tuning',
    authors: 'Weicheng Meng, Jingyang Qiao, Shaohui Liu, Zhizhong Zhang, Yuan Xie',
    venue: 'ICLR 2026',
    ccf: 'CCF A',
    summary: {
      en: 'A compression–integration–learning pipeline and LoRA rank pool for continual instruction tuning under a fixed memory budget.',
      zh: '以压缩—整合—学习与 LoRA Rank Pool，在固定参数预算下缓解持续指令微调遗忘。',
    },
    image: './images/papers/pclr.jpg',
    repo: 'SII-HITclearlove777/PCLR',
    stars: 9,
    links: [
      {
        label: 'Paper',
        url: 'https://proceedings.iclr.cc/paper_files/paper/2026/file/5a5acfd0876c940d81619c1dc60e7748-Paper-Conference.pdf',
      },
      { label: 'Code', url: 'https://github.com/SII-HITclearlove777/PCLR' },
      { label: 'Project', url: 'https://iclr.cc/virtual/2026/poster/10009038' },
    ],
  },
  {
    id: 'continual-next',
    short: 'Continual-NExT',
    pdf: 'https://arxiv.org/pdf/2602.18055',
    title: 'Continual-NExT: A Unified Comprehension and Generation Continual Learning Framework',
    authors: 'Jingyang Qiao, Zhizhong Zhang, Xin Tan, Jingyu Gong, Yanyun Qu, Yuan Xie',
    venue: 'Under Review',
    summary: {
      en: 'A unified benchmark and framework for continual multimodal comprehension and generation.',
      zh: '面向多模态统一理解与生成任务的持续学习基准与框架。',
    },
    image: './images/papers/next.jpg',
    repo: 'ECNU-SII/Continual-NExT',
    stars: 236,
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2602.18055' },
      { label: 'Code', url: 'https://github.com/JingyangQiao/MAGE' },
      { label: 'Toolkit', url: 'https://github.com/ECNU-SII/Continual-NExT' },
      { label: 'Data', url: 'https://huggingface.co/datasets/jingyang/Continual-NExT' },
    ],
  },
  {
    id: 'safecoevo',
    short: 'SafeCoEvo',
    pdf: 'https://arxiv.org/pdf/2609.36580',
    title: 'SafeCoEvo: Co-Evolving Safety Harnesses and Guards for LLM Agents at Test-Time',
    authors:
      'Yu Cheng*, Yongkang Hu*, Shuaijie Ma, Zhihang Lin, Weicheng Meng, Jingyang Qiao, Jiuan Zhou, Yushuo Zhang, Yihang Chen, Weilin Luo, Kun Shao, Dong Li, Zhizhong Zhang, Yuan Xie, Zhaoxia Yin',
    venue: 'Under Review',
    summary: {
      en: 'A test-time Harness–Guard co-evolution framework that continually improves LLM agent safety from accumulated runtime experience.',
      zh: '测试时 Harness–Guard 协同进化框架，利用运行经验持续提升智能体安全性。',
    },
    image: './images/papers/safecoevo.jpg',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2609.36580' }],
  },
]

export const services = [
  {
    label: { en: 'Conference Reviewer', zh: '会议审稿人' },
    venues: 'NeurIPS, ICML, ICLR, CVPR, AAAI',
    award: 'Silver Reviewer Award @ ICML’26',
  },
  {
    label: { en: 'Journal Reviewer', zh: '期刊审稿人' },
    venues: 'IEEE TNNLS, Pattern Recognition',
  },
]
