import React, { useState } from 'react';
import { 
  User, 
  Smile, 
  Lightbulb, 
  Flame, 
  HelpCircle, 
  Target, 
  Zap, 
  Frown, 
  Gem, 
  Rocket, 
  BookOpen,
  MonitorOff,
  Repeat,
  Code,
  Trophy,
  MessageCircleQuestion,
  Database,
  ExternalLink,
  Printer
} from 'lucide-react';

const UserJourneyMap = () => {
  const [activeStage, setActiveStage] = useState(null);

  // 데이터 정의
  const stages = [
    {
      id: 0,
      step: "0단계: 말해보카를 알기 전",
      title: "\"내 생각을 내 영어로 표현하고 싶어요\"",
      desc: "그룹 영어 에세이 수업 등록. 에세이를 첨삭받고, 암기하는 수업 방식. 미국에서 유치원부터 나온 선생님과 공부 시작.",
      emotion: "무 (Null) ⚪",
      score: 10,
      color: "bg-slate-100 border-slate-300 text-slate-500",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 1,
      step: "1단계: 소개/추천",
      title: "\"우리 남편도 말해보카 써요\"",
      desc: "영어 인터뷰 등을 준비하며 상담 중 선생님의 추천. 어휘와 표현 확장을 위해 그룹스터디 멤버 전원이 동시에 사용 시작.",
      emotion: "호기심 💡",
      score: 50,
      color: "bg-yellow-100 border-yellow-400 text-yellow-800",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      id: 2,
      step: "2단계: 허니문",
      title: "영어는 듀오링고",
      desc: "유치한 게이미피케이션에 중독. 플레이로 어그로를 끌 수 없으니 아이디로 어그로를 끌며 '루비' 리그까지 진급.",
      emotion: "중독 🎮",
      score: 65,
      color: "bg-red-100 border-red-400 text-red-800",
      icon: <Flame className="w-5 h-5" />
    },
    {
      id: 3,
      step: "3단계: 권태기",
      title: "인터뷰 탈락과 회의감",
      desc: "앱의 표현이 '내 언어'가 아니라는 괴리감. 에세이/전화영어와 병행하라는 선생님의 조언도 내 영어 학습에 맞지 않다고 느껴짐.",
      emotion: "불신 💨",
      score: 40,
      color: "bg-gray-100 border-gray-400 text-gray-800",
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      id: 4,
      step: "4단계: 재평가",
      title: "비즈니스 관계 (IELTS)",
      desc: "영어 실력 검증을 위해 IELTS 시험 준비. 말해보카 단어장을 IELTS용으로 바꾼 뒤 적극 활용.",
      emotion: "필요성 🤝",
      score: 85,
      color: "bg-indigo-100 border-indigo-400 text-indigo-800",
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 5,
      step: "5단계: 성취",
      title: "IELTS 점수 획득",
      desc: "말해보카 사용 후, IELTS 모의고사 점수 상승. 사용량 폭발. 이 후 IELTS 시험에서도 목표 점수 달성.",
      emotion: "확신 📈",
      score: 95,
      color: "bg-blue-100 border-blue-400 text-blue-800",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      id: 6,
      step: "6단계: 환생",
      title: "환생 달성",
      desc: "IELTS로 올려 놓은 승급을 떨어뜨리고 싶지 않아서, 환생까지 달림. 게임 시스템에 완전히 몰입.",
      emotion: "관성 🏃",
      score: 100,
      color: "bg-purple-100 border-purple-400 text-purple-800",
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 7,
      step: "7단계: 대안 모색",
      title: "단어장 DIY가 안된다면",
      desc: "아이엘츠 후, 말해보카를 활용할 수 있는 방법 모색. 원서 공부 중 나온 단어를 추가 가능한지 문의했으나 '불가능' 답변 받음.",
      emotion: "아쉬움 😥",
      score: 65,
      color: "bg-orange-100 border-orange-400 text-orange-800",
      icon: <MessageCircleQuestion className="w-5 h-5" />
    },
    {
      id: 8,
      step: "8단계: 각자의 길",
      title: "나만의 루프백 시스템 구축",
      desc: "내 영어 공부는 '루프백'이 핵심임을 자각. 내가 원하는 단어를 학습시켜주는 솔루션을 바이브 코딩으로 직접 구축.",
      emotion: "졸업 🎓",
      score: 5,
      color: "bg-emerald-100 border-emerald-400 text-emerald-800",
      icon: <Rocket className="w-5 h-5" />,
      link: "https://hmstory.github.io/english-learning-app/"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-4 md:p-8 print:p-0 print:bg-white">
      {/* 스타일 설정: 폰트 및 프린트 옵션 */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
          body { font-family: 'Noto Sans KR', sans-serif !important; }
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .no-print { display: none !important; }
            .print-break-inside-avoid { break-inside: avoid; }
          }
        `}
      </style>
      
      {/* PDF 저장 버튼 */}
      <div className="fixed bottom-8 right-8 z-50 no-print">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full shadow-lg transition-all font-bold"
        >
          <Printer size={20} />
          PDF로 저장 / 인쇄
        </button>
      </div>

      {/* 헤더 섹션 */}
      <div className="max-w-4xl mx-auto mb-12 text-center print:mb-8">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full">
          User & Product Relationship Map
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          말해보카와 헤어지는 중입니다
        </h1>
        <p className="text-lg text-slate-600 mb-8 print:mb-4">
          "학습은 경험이고 경험에는 '쾌'와 '불쾌'만이 있을 뿐"<br/>
          <span className="text-sm md:text-base text-slate-500 mt-2 block">- 서은국 행복 심리학자 (연세대학교)</span>
        </p>

        {/* 페르소나 카드 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-left max-w-2xl mx-auto flex flex-col md:flex-row gap-6 print:shadow-none print:border">
          <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full text-blue-600">
            <User size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">페르소나: 영어는 듀오링고</h3>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              <span className="px-2 py-1 bg-slate-100 text-xs rounded text-slate-600">영어 B2-C1</span>
              <span className="px-2 py-1 bg-slate-100 text-xs rounded text-slate-600">심리학 석사</span>
              <span className="px-2 py-1 bg-slate-100 text-xs rounded text-slate-600">개발: 바이브 코딩</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              "내 생각을 나만의 영어로 표현하고 싶습니다"
            </p>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠: 그래프 및 타임라인 */}
      <div className="max-w-5xl mx-auto">
        
        {/* 감정 그래프 (Emotional Curve) */}
        {/* overflow-hidden을 제거하고 상단 패딩(pt-6)을 추가하여 그래프 잘림 방지 */}
        <div className="bg-white p-6 rounded-t-2xl shadow-sm border border-slate-200 mb-1 relative overflow-visible print:shadow-none print:border print:break-inside-avoid">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide">Emotional Curve (ME vs 말해보카)</h3>
            <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">Y축: 말해보카에 대한 애정도/의존도</span>
          </div>
          
          <div className="h-64 w-full relative px-4 md:px-12 pb-8 pt-6">
            {/* 배경 그리드 라인 */}
            <div className="absolute inset-0 px-4 md:px-12 pb-8 pt-6 flex flex-col justify-between pointer-events-none opacity-10">
              <div className="w-full border-t border-slate-900 h-0"></div>
              <div className="w-full border-t border-slate-900 h-0"></div>
              <div className="w-full border-t border-slate-900 h-0"></div>
            </div>

            {/* SVG 라인 그래프 */}
            <svg 
              className="absolute inset-0 w-full h-full px-4 md:px-12 pb-8 pt-6 pointer-events-none" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
              style={{ zIndex: 10, overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* 영역 채우기 */}
              <polygon
                fill="url(#gradient)"
                stroke="none"
                points={`
                  0,100 
                  ${stages.map((s, i) => `${(i / (stages.length - 1)) * 100},${100 - s.score}`).join(' ')} 
                  100,100
                `}
              />
              
              {/* 선 그리기 */}
              <polyline
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
                points={stages.map((s, i) => {
                  const x = (i / (stages.length - 1)) * 100; 
                  const y = 100 - s.score;
                  return `${x},${y}`;
                }).join(' ')}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* 인터랙티브 포인트 (Dots) */}
            {stages.map((stage, idx) => {
              const xPos = (idx / (stages.length - 1)) * 100;
              const yPos = stage.score;
              
              return (
                <div 
                  key={stage.id}
                  className="absolute transform -translate-x-1/2 translate-y-1/2 group"
                  style={{ 
                    left: `${xPos}%`, 
                    bottom: `${yPos}%`,
                    zIndex: 20
                  }}
                >
                  <div 
                    className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 md:border-4 transition-all duration-300 cursor-pointer shadow-sm ${
                      activeStage === stage.id 
                        ? 'scale-150 bg-white border-purple-500 z-50' 
                        : 'bg-white border-slate-300 hover:border-purple-400'
                    }`}
                    style={{
                      borderColor: activeStage === stage.id ? '#8b5cf6' : undefined
                    }}
                    onMouseEnter={() => setActiveStage(stage.id)}
                    onMouseLeave={() => setActiveStage(null)}
                  />
                  
                  {/* 툴팁 */}
                  <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg print:opacity-100 print:shadow-none print:border print:bg-white print:text-black`}>
                    <p className="font-bold text-center">{stage.emotion}</p>
                    <p className="text-[10px] text-slate-300 text-center">점수: {stage.score}</p>
                  </div>

                  {/* X축 레이블 */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-slate-400 font-medium whitespace-nowrap">
                    {stage.step.split(':')[0]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 타임라인 카드 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 mb-16 mt-4 print:grid-cols-2 print:gap-4 print:mb-8">
          {stages.map((stage) => (
            <div 
              key={stage.id}
              className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md cursor-default print:shadow-none print:border-slate-300 print:break-inside-avoid ${
                activeStage === stage.id ? 'ring-2 ring-purple-400 transform -translate-y-1' : 'border-slate-200 bg-white'
              }`}
              onMouseEnter={() => setActiveStage(stage.id)}
              onMouseLeave={() => setActiveStage(null)}
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide border print:border-slate-200 ${stage.color.split(' ')[0]} ${stage.color.split(' ')[2]}`}>
                  {stage.emotion}
                </span>
                <div className={`p-2 rounded-full bg-slate-50 text-slate-500`}>
                  {stage.icon}
                </div>
              </div>
              <h4 className="text-xs font-semibold text-slate-400 mb-1">{stage.step}</h4>
              <h3 className="text-base font-bold text-slate-800 mb-2">{stage.title}</h3>
              <p className="text-xs text-slate-600 leading-snug">{stage.desc}</p>
              {stage.link && (
                <a 
                  href={stage.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-emerald-600 font-bold hover:underline mt-2 print:text-black print:no-underline"
                >
                  결과물 보러가기 <ExternalLink size={10} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* 인사이트 섹션 */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl print:bg-white print:text-black print:border print:border-slate-300 print:shadow-none print:break-inside-avoid">
          <div className="text-center mb-10 print:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">내가 만든 내 보카앱의 특징</h2>
            <p className="text-slate-400 print:text-slate-600">직접 개발한 솔루션의 핵심 철학</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center print:bg-red-100 print:text-red-600">
                <Frown size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Pain Point: 수동적 인풋</h3>
                <p className="text-slate-300 text-sm leading-relaxed print:text-slate-600">
                  말해보카는 훌륭하지만 인풋을 일방적으로 제공합니다. <br/>
                  "내"가 읽은 책, "내"가 감동한 문장이 아니면 진정한 학습 동기가 생기지 않습니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center print:bg-blue-100 print:text-blue-600">
                <Repeat size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Solution: 루프백(Loopback) 시스템</h3>
                <p className="text-slate-300 text-sm leading-relaxed print:text-slate-600">
                  [읽기/듣기 → 단어장 저장 → 쓰기/말하기 테스트]로 이어지는 순환 구조.
                  이미 아는 단어를 능동 어휘(Active Vocabulary)로 전환하는 것이 핵심입니다.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center print:bg-yellow-100 print:text-yellow-600">
                <Database size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Data: 풍부한 영어 학습 데이터</h3>
                <p className="text-slate-300 text-sm leading-relaxed print:text-slate-600">
                  업무 또는 원서 독서 중 모르는 표현과 단어를 GPT와 함께 공부했습니다.
                  그 데이터를 기반으로 학습 앱을 만드는 것이 진정한 루프백의 완성이었습니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center print:bg-emerald-100 print:text-emerald-600">
                <Code size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Vision: 영어 공부의 SaaS화</h3>
                <p className="text-slate-300 text-sm leading-relaxed print:text-slate-600">
                  단순한 단어 암기 앱이 아닌, 사용자가 직접 콘텐츠를 선택하고
                  학습 경로를 설계하는 도구(Tool)로서의 학습 플랫폼을 지향합니다.
                </p>
              </div>
            </div>
          </div>

          {/* New CTA Section */}
          <div className="mt-16 pt-10 border-t border-slate-800 text-center print:border-slate-300 print:mt-10 print:pt-6">
             <h3 className="text-lg font-bold mb-6 text-emerald-400 tracking-wide uppercase print:text-emerald-700">그래서 결국 무엇을 만들었나요?</h3>
             <a 
               href="https://hmstory.github.io/english-learning-app/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-emerald-900/40 ring-4 ring-emerald-900/20 print:bg-white print:text-emerald-700 print:border-2 print:border-emerald-700 print:shadow-none"
             >
               <Rocket size={24} />
               직접 만든 '루프백 영어' 체험하기
             </a>
             <p className="mt-4 text-slate-500 text-sm print:hidden">
               👆 클릭하여 실제 구현된 웹사이트를 확인해보세요
             </p>
             <p className="mt-2 text-slate-500 text-xs hidden print:block">
               URL: https://hmstory.github.io/english-learning-app/
             </p>
          </div>
        </div>

        <div className="mt-12 text-center print:hidden">
           <p className="text-slate-400 text-xs">
             Based on real user journey data • Visualized for UX Research & Product Feedback
           </p>
        </div>

      </div>
    </div>
  );
};

export default UserJourneyMap;

