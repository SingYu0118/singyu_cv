const translations={
  zh:{
    navSide:"Side Project",navExperience:"經歷",navProjects:"專案",navContact:"聯絡",
    heroStatic:"以系統思維，將 AI 轉化為",heroLead:"專注於全端 AI 應用與系統架構，將模型能力整合為可部署、可驗證、可持續維運的產品。",seeSide:"先看 Side Project",getCV:"下載中英文 CV",nowRole:"AI Team Tech Lead",
    braveLead:"為 TOEIC 600／CEFR A2–B1 學習者打造的 AI 英語口說與雙人旅行協作 PWA。從產品設計、程式開發、AI 整合到 Cloudflare 部署皆獨立完成。",openDemo:"開啟作品 ↗",askGuest:"Email 索取訪客通關密語 ↗",
    metricCategories:"課程分類",metricLessons:"情境課程",metricPhrases:"核心字句",metricTests:"自動化測試",shotEnglish:"AI 面試與口說練習",shotTravel:"旅行當日與共同行程",
    learningTitle:"學習功能",learn1:"AI 情境對話與角色扮演",learn2:"英文面試題庫與即時回饋",learn3:"瀏覽器語音轉文字與錄音回放",learn4:"課程進度、單字背包與小遊戲",learn5:"學習筆記、備忘錄與成長紀錄",
    travelFeatureTitle:"旅遊功能",travel1:"共享行事曆與每日行程",travel2:"旅行當日模式、地圖與導航",travel3:"航班、住宿、訂單與票券",travel4:"清單、共同目標與旅行記帳",travel5:"共同備忘錄與私人筆記",architectureLabel:"產品架構",modelLabel:"語言模型",
    backgroundTitle:"學經歷",backgroundLead:"統計背景結合資料分析碩士訓練，從資料分析進入 AI 應用開發，現負責 AI 團隊技術規劃與產品交付。",expCurrent:"Data Engineer · AI Team Tech Lead",expCurrentBody:"軟體服務公司｜技術規劃、系統架構、跨部門協作與全端 AI 產品交付",expIntern:"Data Analytics Engineer Intern",expInternBody:"生物科技公司｜Python、R、資料清理、統計分析與模型驗證",fju:"College of Management, Fu Jen Catholic University",fjuBody:"Department of Statistics and Information Science · B.S.",
    techTitle:"從產品到正式環境",projectTitle:"專案成果",projectOpen:" ↗",project1:"公部門文件智慧審查平台",resultCalls:"首輪 LLM 呼叫",resultLatency:"首輪推論耗時",resultTotal:"完整流程耗時",project2:"協會營運與會議 AI 平台",routes:"前端路由",testsPassed:"自動化測試",project3:"企業私有化 AI 平台",privatePlatform:"參與企業知識庫、AI Agent、視覺化工作流、多租戶權限與私有化部署的產品設計與實作。",project4:"影像穩定化與縮時影片系統",visionResult:"自動完成影像對齊、重疊裁切、平滑、模糊影格過濾與影片輸出。",contactTitle:"一起把下一個 AI 想法做成產品。",
    vaultTitle:"中英文 CV",vaultBody:"寄信索取通關密語，或直接輸入。",askPassphrase:"寄信索取通關密語 ↗",passphraseLabel:"通關密語",confirm:"確認",unlocking:"驗證中…",unlocked:"請選擇 CV。",invalid:"通關密語不正確。",downloading:"準備下載…",downloadReady:"下載已開始。",downloadError:"下載失敗，請重新輸入通關密語。"
  },
  en:{
    navSide:"Side Project",navExperience:"Experience",navProjects:"Projects",navContact:"Contact",
    heroStatic:"I transform AI strategy into",heroLead:"I engineer full-stack AI systems that make model capability deployable, measurable and reliable in production.",seeSide:"See featured project",getCV:"Download Chinese & English CVs",nowRole:"AI Team Tech Lead",
    braveLead:"An AI English-speaking and two-person travel collaboration PWA for TOEIC 600 / CEFR A2–B1 learners. I independently designed, built, integrated and deployed the product on Cloudflare.",openDemo:"Open the product ↗",askGuest:"Request visitor passphrase by email ↗",
    metricCategories:"course categories",metricLessons:"scenario lessons",metricPhrases:"core phrases",metricTests:"automated tests",shotEnglish:"AI interview & speaking practice",shotTravel:"Travel day & shared itinerary",
    learningTitle:"Learning",learn1:"AI scenario dialogue and role-play",learn2:"Interview questions and instant feedback",learn3:"Browser speech-to-text and recording playback",learn4:"Progress, vocabulary backpack and mini games",learn5:"Learning notes, memos and progress history",
    travelFeatureTitle:"Travel",travel1:"Shared calendar and daily itinerary",travel2:"Travel-day mode, maps and navigation",travel3:"Flights, stays, orders and tickets",travel4:"Checklists, shared goals and expenses",travel5:"Shared memos and private notes",architectureLabel:"PRODUCT ARCHITECTURE",modelLabel:"LANGUAGE MODEL",
    backgroundTitle:"Experience & education",backgroundLead:"A statistics foundation and a master’s in data and business analytics led from data analysis into applied AI engineering and technical leadership.",expCurrent:"Data Engineer · AI Team Tech Lead",expCurrentBody:"Software services company · Technical planning, architecture, cross-functional collaboration and full-stack AI product delivery",expIntern:"Data Analytics Engineer Intern",expInternBody:"Biotechnology company · Python, R, data cleaning, statistical analysis and model validation",fju:"College of Management, Fu Jen Catholic University",fjuBody:"Department of Statistics and Information Science · B.S.",
    techTitle:"From product to production",projectTitle:"Selected outcomes",projectOpen:"View technical details ↗",project1:"Public-sector Document Intelligence",resultCalls:"first-pass LLM calls",resultLatency:"first-pass inference time",resultTotal:"end-to-end time",project2:"Operations & Meeting AI Platform",routes:"frontend routes",testsPassed:"automated tests",project3:"Enterprise Private AI Platform",privatePlatform:"Contributed to product design and implementation across enterprise knowledge, AI agents, visual workflows, multi-tenant access and private deployment.",project4:"Image Stabilization & Time-Lapse",visionResult:"Automated alignment, overlap cropping, smoothing, blur filtering and video output.",contactTitle:"Let’s turn the next AI idea into a product.",
    vaultTitle:"Chinese & English CVs",vaultBody:"Email me for the passphrase, or enter it below.",askPassphrase:"Request the passphrase by email ↗",passphraseLabel:"Passphrase",confirm:"Continue",unlocking:"Checking…",unlocked:"Choose a CV.",invalid:"Incorrect passphrase.",downloading:"Preparing download…",downloadReady:"Download started.",downloadError:"Download failed. Enter the passphrase again."
  }
};

const projectDetails={
  zh:[
    {eyebrow:"DOCUMENT INTELLIGENCE",title:"公部門文件智慧審查平台",intro:"以可追溯、可覆核的多階段流程，把非結構化文件轉化為穩定的審查結果。",sections:[
      ["系統流程","前端送件後，由 API 進行工作排程與狀態管理；文件依序經過原生文字解析、OCR fallback、確定性規則、LLM 判讀、結構驗證與人工覆核。"],
      ["可靠性設計","以相似度預篩、批次推論與 Pydantic 結構驗證降低模型呼叫、延遲與格式錯誤；JWT 權限及 AES-256-GCM 用於保護敏感資料。"],
      ["技術組合","React · TypeScript · FastAPI · PostgreSQL · OCR · Claude · Gemini · Docker"]
    ]},
    {eyebrow:"FULL-STACK & HYBRID AI",title:"協會營運與會議 AI 平台",intro:"整合公開網站、會員服務、會務流程與會議 AI 的完整產品架構。",sections:[
      ["產品架構","以 React 前端、Node.js 服務與 PostgreSQL 資料層支援會員、活動、會議、投票、文件及通知；部署於 GCP 並以 PWA 提供跨裝置體驗。"],
      ["Hybrid AI","語音資料經 Speech-to-Text、地端模型與雲端服務協作處理，搭配 Map-Reduce 摘要、Schema 正規化、術語表、timeout、fallback 與 SSE recovery。"],
      ["技術組合","React · Node.js · PostgreSQL · GCP · Speech-to-Text · Vertex AI · Ollama · SSE · PWA"]
    ]},
    {eyebrow:"ENTERPRISE AI",title:"企業私有化 AI 平台",intro:"在不揭露公司內部實作細節的前提下，呈現企業級 AI 平台的產品能力與工程範圍。",sections:[
      ["產品能力","支援企業知識檢索、AI Agent、視覺化工作流、多租戶權限、人工審核與私有化部署。"],
      ["設計原則","以資料隔離、權限治理、可稽核流程與可控模型輸出為核心，讓 AI 能力符合企業環境的安全與維運需求。"],
      ["技術領域","Enterprise AI · RAG · AI Agent · Workflow · Multi-tenant · On-premise"]
    ]},
    {eyebrow:"COMPUTER VISION",title:"影像穩定化與縮時影片系統",intro:"以特徵匹配與時間序列平滑建立自動化影像對齊及影片生成流程。",sections:[
      ["處理流程","使用 SIFT 擷取特徵、FLANN 完成配對，估算 Affine Transformation 後裁切有效重疊區域，再依時間序列平滑轉換矩陣。"],
      ["品質控制","以 Laplacian 分數過濾模糊影格，結合 deque 緩衝與 MJPG 輸出，降低畫面跳動並維持影片穩定度。"],
      ["技術組合","Python · OpenCV · SIFT · FLANN · Affine Transformation · NumPy · MJPG"]
    ]}
  ],
  en:[
    {eyebrow:"DOCUMENT INTELLIGENCE",title:"Public-sector Document Intelligence",intro:"A traceable, reviewable pipeline that converts unstructured documents into reliable assessment results.",sections:[
      ["System flow","After submission, the API coordinates jobs and status. Documents pass through native text extraction, OCR fallback, deterministic rules, LLM reasoning, structured validation and human review."],
      ["Reliability","Similarity pre-filtering, batched inference and Pydantic validation reduce model calls, latency and malformed output. JWT authorization and AES-256-GCM protect sensitive data."],
      ["Technology","React · TypeScript · FastAPI · PostgreSQL · OCR · Claude · Gemini · Docker"]
    ]},
    {eyebrow:"FULL-STACK & HYBRID AI",title:"Operations & Meeting AI Platform",intro:"A complete product architecture spanning public content, member services, operations and meeting intelligence.",sections:[
      ["Product architecture","React, Node.js and PostgreSQL support members, events, meetings, voting, files and notifications. GCP deployment and PWA delivery provide a consistent cross-device experience."],
      ["Hybrid AI","Speech-to-Text, on-premise models and cloud services work together with Map-Reduce summarization, schema normalization, glossaries, timeouts, fallbacks and SSE recovery."],
      ["Technology","React · Node.js · PostgreSQL · GCP · Speech-to-Text · Vertex AI · Ollama · SSE · PWA"]
    ]},
    {eyebrow:"ENTERPRISE AI",title:"Enterprise Private AI Platform",intro:"A capability-level view of enterprise AI engineering without exposing proprietary implementation details.",sections:[
      ["Capabilities","Enterprise knowledge retrieval, AI agents, visual workflows, multi-tenant access, human review and private deployment."],
      ["Design principles","Data isolation, access governance, auditable workflows and controlled model output make AI suitable for secure enterprise operations."],
      ["Technology domains","Enterprise AI · RAG · AI Agent · Workflow · Multi-tenant · On-premise"]
    ]},
    {eyebrow:"COMPUTER VISION",title:"Image Stabilization & Time-Lapse",intro:"An automated alignment and video-generation pipeline based on feature matching and temporal smoothing.",sections:[
      ["Processing pipeline","SIFT extracts features, FLANN performs matching, affine transforms align frames, and overlap-aware cropping removes invalid edges before temporal smoothing."],
      ["Quality control","Laplacian scoring filters blurred frames while deque-based smoothing and MJPG output reduce jitter and preserve visual continuity."],
      ["Technology","Python · OpenCV · SIFT · FLANN · Affine Transformation · NumPy · MJPG"]
    ]}
  ]
};

const flipWords={zh:["可落地的產品能力","可擴展的系統架構","可驗證的工程成果","可維運的正式服務"],en:["production-ready products","scalable system architecture","measurable engineering outcomes","reliable production services"]};
const files={
  "cv-zh":{path:"protected/cv-zh.enc",name:"SingYuChen_CV_Chinese_Revised.pdf",type:"application/pdf"},
  "cv-en":{path:"protected/cv-en.enc",name:"SingYuChen_CV_English_Revised.pdf",type:"application/pdf"}
};

let language=localStorage.getItem("portfolio-language")||"zh";
let activePasscode="";
let flipIndex=0;
const toggle=document.getElementById("languageToggle");
const flipWord=document.getElementById("flipWord");
const flipContainer=document.querySelector(".flip-container");
const dialog=document.getElementById("downloadVault");
const passcodeInput=document.getElementById("passcode");
const unlockButton=document.getElementById("unlockButton");
const vaultFiles=document.getElementById("vaultFiles");
const vaultStatus=document.getElementById("vaultStatus");

function t(key){return translations[language][key]||key}
function renderLanguage(){
  document.documentElement.lang=language==="zh"?"zh-Hant":"en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{const value=translations[language][el.dataset.i18n];if(value!==undefined)el.textContent=value});
  toggle.textContent=language==="zh"?"EN":"中";
  flipIndex=0;flipWord.textContent=flipWords[language][0];
  localStorage.setItem("portfolio-language",language);
}
toggle.addEventListener("click",()=>{language=language==="zh"?"en":"zh";renderLanguage()});

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  setInterval(()=>{flipContainer.classList.add("flipping");setTimeout(()=>{flipIndex=(flipIndex+1)%flipWords[language].length;flipWord.textContent=flipWords[language][flipIndex]},275);setTimeout(()=>flipContainer.classList.remove("flipping"),560)},2800);
}

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle("visible",entry.isIntersecting)),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();

const carousel=document.getElementById("projectCarousel");
const projectCards=[...carousel.querySelectorAll(".project-card")];
const projectDots=document.getElementById("projectDots");
const projectCurrent=document.getElementById("projectCurrent");
const projectTotal=document.getElementById("projectTotal");
let activeProject=0;

projectTotal.textContent=String(projectCards.length).padStart(2,"0");
carousel.tabIndex=0;
projectCards.forEach((card,index)=>{
  const dot=document.createElement("button");
  dot.className="project-dot";
  dot.type="button";
  dot.setAttribute("aria-label",`Show project ${index+1}`);
  dot.addEventListener("click",()=>showProject(index));
  projectDots.append(dot);
});
const dots=[...projectDots.children];

function showProject(index){
  activeProject=(index+projectCards.length)%projectCards.length;
  const previous=(activeProject-1+projectCards.length)%projectCards.length;
  const next=(activeProject+1)%projectCards.length;
  projectCards.forEach((card,cardIndex)=>{
    card.classList.toggle("is-active",cardIndex===activeProject);
    card.classList.toggle("is-prev",cardIndex===previous);
    card.classList.toggle("is-next",cardIndex===next);
    card.classList.toggle("is-far",cardIndex!==activeProject&&cardIndex!==previous&&cardIndex!==next);
    card.setAttribute("aria-hidden",cardIndex===activeProject?"false":"true");
  });
  dots.forEach((dot,dotIndex)=>dot.setAttribute("aria-current",dotIndex===activeProject?"true":"false"));
  projectCurrent.textContent=String(activeProject+1).padStart(2,"0");
}

document.getElementById("projectPrev").addEventListener("click",()=>showProject(activeProject-1));
document.getElementById("projectNext").addEventListener("click",()=>showProject(activeProject+1));
carousel.addEventListener("keydown",event=>{
  if(event.key==="ArrowLeft"){event.preventDefault();showProject(activeProject-1)}
  if(event.key==="ArrowRight"){event.preventDefault();showProject(activeProject+1)}
});
let swipeStart=0;
carousel.addEventListener("pointerdown",event=>{swipeStart=event.clientX});
carousel.addEventListener("pointerup",event=>{const distance=event.clientX-swipeStart;if(Math.abs(distance)>55)showProject(activeProject+(distance<0?1:-1))});
showProject(0);

const sparkleField=document.getElementById("projectSparkles");
const sparkleColors=["#8de8d1","#8fc8ff","#bca8ff","#ffffff"];
for(let index=0;index<42;index+=1){
  const sparkle=document.createElement("span");
  sparkle.className="project-sparkle";
  sparkle.style.setProperty("--x",`${4+Math.random()*92}%`);
  sparkle.style.setProperty("--y",`${5+Math.random()*88}%`);
  sparkle.style.setProperty("--size",`${1.5+Math.random()*3.5}px`);
  sparkle.style.setProperty("--duration",`${2.6+Math.random()*4.4}s`);
  sparkle.style.setProperty("--delay",`${-Math.random()*6}s`);
  sparkle.style.setProperty("--color",sparkleColors[index%sparkleColors.length]);
  sparkleField.append(sparkle);
}

document.querySelectorAll("[data-open-vault]").forEach(button=>button.addEventListener("click",()=>{dialog.showModal();document.body.classList.add("modal-open");passcodeInput.focus()}));
dialog.addEventListener("close",()=>{document.body.classList.remove("modal-open");vaultStatus.textContent=""});

async function deriveKey(passcode,salt){
  const raw=new TextEncoder().encode(passcode);
  const material=await crypto.subtle.importKey("raw",raw,"PBKDF2",false,["deriveKey"]);
  return crypto.subtle.deriveKey({name:"PBKDF2",salt,iterations:210000,hash:"SHA-256"},material,{name:"AES-GCM",length:256},false,["decrypt"]);
}
async function decryptFile(url,passcode){
  const response=await fetch(url,{cache:"no-store"});if(!response.ok)throw new Error("fetch");
  const bytes=new Uint8Array(await response.arrayBuffer());if(new TextDecoder().decode(bytes.slice(0,8))!=="SYENC001")throw new Error("format");
  const salt=bytes.slice(8,24),iv=bytes.slice(24,36),encrypted=bytes.slice(36),key=await deriveKey(passcode,salt);
  return new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv,tagLength:128},key,encrypted));
}
async function unlockVault(){
  const candidate=passcodeInput.value.trim();if(!candidate)return;vaultStatus.textContent=t("unlocking");unlockButton.disabled=true;
  try{const check=await decryptFile("protected/check.enc",candidate);if(new TextDecoder().decode(check)!=="SINGYU-PORTFOLIO-VAULT")throw new Error("invalid");activePasscode=candidate;vaultFiles.hidden=false;vaultStatus.textContent=t("unlocked")}
  catch{activePasscode="";vaultFiles.hidden=true;vaultStatus.textContent=t("invalid")}
  finally{unlockButton.disabled=false}
}
unlockButton.addEventListener("click",unlockVault);
passcodeInput.addEventListener("keydown",event=>{if(event.key==="Enter"){event.preventDefault();unlockVault()}});
vaultFiles.addEventListener("click",async event=>{
  const button=event.target.closest("button[data-file]");if(!button||!activePasscode)return;const item=files[button.dataset.file];vaultStatus.textContent=t("downloading");button.disabled=true;
  try{const data=await decryptFile(item.path,activePasscode),url=URL.createObjectURL(new Blob([data],{type:item.type})),anchor=document.createElement("a");anchor.href=url;anchor.download=item.name;document.body.appendChild(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);vaultStatus.textContent=t("downloadReady")}
  catch{activePasscode="";vaultFiles.hidden=true;vaultStatus.textContent=t("downloadError")}
  finally{button.disabled=false}
});

renderLanguage();
