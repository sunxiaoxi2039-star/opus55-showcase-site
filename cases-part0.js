window.CASE_PARTS = window.CASE_PARTS || [];
window.CASE_PARTS.push(
[{"slug":"anything2explainer","title":"anything2explainer","title_zh":"丢给它一个话题，还你一支带配音的科普讲解片","o\
ne_liner_zh":"一个 Claude Code / Codex skill：输入任何话题或文章，agent 调研 → 写稿 → 配音 → 分镜 → 多 agent 并行逐 shot \
构建 → QC，交付 2–8 分钟带 TTS 旁白、逐词字幕与章节进度条的 Remotion 讲解片。","category":"tool","tags":["agent skill","科普\
讲解","Remotion","多agent并行","TTS","QC流程"],"difficulty":4,"wow":4,"author":{"name":"Vincent Wei","h\
andle":"@VincentWei1021","url":"https://github.com/Vincentwei1021"},"platform":"github","publish\
ed_at":"2026-09-18","source_url":"https://github.com/Vincentwei1021/anything2explainer","demo_ur\
l":"","repo_url":"https://github.com/Vincentwei1021/anything2explainer","video_url":"https://git\
hub.com/user-attachments/assets/e2771c68-a28c-4459-ac5a-a5b685181eeb","model_claim":{"quote":"a \
Claude Code / Codex skill that turns any topic into a black-canvas motion-graphics explainer vid\
eo","url":"https://github.com/Vincentwei1021/anything2explainer","verified":"confirmed","plan":"\
unknown","harness":"Claude Code"},"what_it_is_zh":"anything2explainer 是 Vincent Wei 视频 skill 矩阵里\
的讲解篇：给一个话题（如「讲讲向量数据库」）或一篇文章，它先调研并附信源写讲稿，生成 TTS 配音与帧级时间轴，把每个 shot 分镜后派多个并行 build agent 各写一个 Remot\
ion 组件，QC agent 按书面标准审渲染帧，最后交付 1280×720 的 H.264 MP4：带同步旁白、词边界对齐字幕、章节卡片、顶部 HUD 和底部章节进度条，外加从调研文档到 \
QC 报告的完整 paper trail。中英双语，参考片《RAG 与知识库》5 分钟，8 个 build agent 并行 40 分钟、两轮 QC 完成。","why_impressive_\
zh":["把「知识讲解视频」做成了可复用的 agent 工序而非单次炫技：输入只要求一个话题，中间四道 checkpoint 才需要人确认。","多 agent 分工明确且量化：3–5 分钟\
成片约 44 个 shot、8 个并行 build agent、墙钟约 2 小时；5–8 分钟 60–80 shot、10–14 个 agent、2–3 小时。","中文路线接了 edge-t\
ts 与火山引擎 TTS 2.0 + forced alignment，逐词字幕是词边界对齐的不是估的；英文用 kokoro-82m 本地音色。","黑画布 + 白线稿 + 紫强调的视觉系统与\
 talkcraft 的波点背景互通，风格资产在矩阵内复用。","examples/rag/ 公开了完整 paper trail（调研 → 讲稿 → 分镜 → 每 shot 源码 → QC 报\
告 → 交付备注），是把「agent 制作工序」开源成教材级别的样本。"],"tech_stack":[{"name":"Remotion 4.0（React + TypeScript）","\
role":"每 shot 一个组件，逐帧渲染"},{"name":"TTS：edge-tts zh-CN-Yunxi / kokoro-82m am_liam / 火山 TTS 2.0","\
role":"中文约 5.5 字/秒，英文自然语速"},{"name":"forced alignment","role":"词边界级字幕对齐"},{"name":"多 agent 并行构建（\
最多 14 个）","role":"每个 build agent 负责一个 shot 的 Remotion 组件"},{"name":"QC agent 量化质检","role":"按书面标准\
审渲染帧，两轮"}],"techniques_zh":["段落=镜头：讲稿里空行分段，段内句间停 10 帧、段末停 30 帧，停顿天然落在画面切换处，每个 shot 在最后一个元素落版后再停 \
1–1.5 秒。","成片比纯语音长 5–8% 是设计出来的：给画面留呼吸，不是 bug。","章节数随片长伸缩：3 分钟以下不设章节卡，3–5 分钟 3–4 章、每章至少 60 秒，进度条按\
章节均分。","中英双切共用一张分镜：参考片两个语言版本共用 44 shot 分镜，英文版按英配重排每 shot 时长——分镜与语言解耦。","自带「built by Anything2Exp\
lainer skill」片尾署名（builtBy 可置空），作者把 skill 品牌写进交付物。"],"prompt":{"available":true,"original_excerpt\
":"Topic in, narrated explainer video out","source_url":"https://github.com/Vincentwei1021/anyth\
ing2explainer/blob/main/SKILL.md","language":"en","structure_zh":["输入：话题或文章 + 目标时长 + 语言。","工序：调研\
（附信源）→ 讲稿 → TTS 与时间轴 → 分镜 → 并行 build → QC → 交付。","人参与的四个 checkpoint：调研确认、讲稿确认、分镜确认、成片验收。","输出规格：\
1280×720@30fps H.264、章节进度条、逐词字幕、完整 paper trail。"],"reconstructed_zh":"（复现其流程的简版，完整能力以 SKILL.md 为\
准）\n\n用 anything2explainer 的流程帮我做一支讲解视频。话题：【话题或文章】。时长约【3–5】分钟，中文。\n\n流程要求：\n1. 先调研话题并给我一份带来源链接的调\
研文档，我确认后写讲稿（空行分段，每段一个镜头）；\n2. 讲稿确认后生成 TTS 配音（中文 edge-tts Yunxi，约 5.5 字/秒）并做词边界对齐；\n3. 按段落分镜成 40–\
50 个 shot，每 shot 写明起止帧、画面元素与动画，给我分镜表确认；\n4. 派多个并行 agent 每 shot 写一个 Remotion 组件（黑画布白线稿紫强调、星点或波点背景\
）；段内句间停 10 帧、段末停 30 帧；\n5. QC agent 逐帧审渲染图（文字裁切、元素重叠、字幕对齐），两轮不达标就重修；\n6. 交付 1280×720@30fps MP4 +\
 每 shot 源码 + 调研/讲稿/QC 报告。"},"how_to_reproduce_zh":["在 Claude Code / Codex 安装 skill（README 有安装方式）\
，准备 Node、ffmpeg。","丢一个话题 + 时长 + 语言，等调研文档，确认后继续。","确认讲稿与分镜表（这是唯一能干预叙事质量的地方）。","等并行构建与两轮 QC，拿 MP4 \
与 paper trail。","想换语言：同一张分镜重配音重排时长即可，参考 examples/rag/ 的中英双切。"],"pitfalls_zh":["它不是 CLI 而是「整套方法 +\
 可编译模板」：agent 不按 SKILL.md 走完整流程，质量会掉到普通 Remotion 手写水平。","TTS 语速按语言分预算：中文约 5.5 字/秒写稿，超了会拖时长；先算字数再\
写稿。","并行 agent 渲染吃磁盘：3–5 分钟成片约 2GB 中间帧，磁盘留余量。","黑画布风格适配讲解/科技话题，不适合温暖人文叙事——风格选择先看参考片。"],"time_and\
_cost":"作者说明：3–5 分钟成片墙钟约 2 小时（8 个 build agent 并行 40 分钟 + 两轮 QC），中间帧磁盘约 2GB","screenshot":"","evi\
dence":[{"url":"https://github.com/Vincentwei1021/anything2explainer","quote":"Topic in, narrate\
d explainer video out"},{"url":"https://github.com/Vincentwei1021/anything2explainer","quote":"8\
 build agents in parallel for 40 minutes, two QC rounds"},{"url":"https://github.com/Vincentwei1\
021/anything2explainer","quote":"The finished video runs 5–8% longer than the raw speech by desi\
gn"}],"see_zh":null,"post_url":null,"status":"verified","verified_at":"2026-10-21","reviewed_at"
:"","no":1},{"slug":"three-minute-svg-animation","title":"Opus 5.5 just made this animation in o\
ne shot... what the fuck","title_zh":"克劳德大战 ChatGPT 的三分钟动画","one_liner_zh":"一次成型的三分钟短片：Claude 和 \
ChatGPT 拟人打擂，从编程斗到冲刺 AGI","category":"video","tags":["SVG动画","拟人化","叙事短片","Claude vs ChatGPT","模\
型玩梗","早期访问"],"difficulty":4,"wow":4,"author":{"name":"AndrewOnXYZ","handle":"@AndrewOnXYZ","url"
:"https://x.com/AndrewOnXYZ"},"platform":"x","published_at":"2026-09-21","source_url":"https://x\
.com/AndrewOnXYZ/status/2102089270747886043","demo_url":"","repo_url":"","video_url":"https://x.\
com/AndrewOnXYZ/status/2102089270747886043/video/1","model_claim":{"quote":"Opus 5.5 just made t\
his animation in one shot","url":"https://x.com/AndrewOnXYZ/status/2102089270747886043","verifie\
d":"confirmed","plan":"unknown","harness":"unknown"},"what_it_is_zh":"AI 博主 AndrewOnXYZ 在 Opus 5\
.5 正式上线前一天贴出一支时长整三分钟的动画，配文说这是 Opus 5.5 一次性生成的成果。片子把 Claude 和 ChatGPT 画成两个格斗游戏角色打擂台：橙色刺球状的 Claude\
 对阵绿色花环状的 ChatGPT，依次打过编程报错、绘画评分、常识问答、上下文耗尽四个回合，最后进入「Race to AGI」火箭竞速并给出名次结局，片尾还打出一句自嘲字幕承认结果由 Cla\
ude 自己生成、可能有偏见。因为发布时间早于官方正式上线，第三方社区收录列表把它放进 SVG 动画分类下的社区作品表格，并专门注明其发布时间早于正式上线，技术细节和是否属实都还需要独立核实。\
","why_impressive_zh":["三分钟一镜到底讲完一个完整故事：拟人化的 Claude 与 ChatGPT 打了四个回合，从编程比赛、绘画擂台、常识问答一路打到「冲刺 AGI」\
的火箭竞速，场景、角色动作和字幕切换全部在一次生成里完成，看不出中途剪辑拼接的痕迹。","每个回合都精准踩中真实的模型使用体验梗——代码报错和「git push --force」这类程序员黑话\
、「STRAWBERRY 里有几个 R」经典拷问、上下文快耗尽的提示；最后一段竞速赛道背景铺满了 GPT-1、GPT-3、「通过律师资格考试」「自己写代码」「Agents」到「AGI」的编年里\
程碑，沿途还插着「幻觉警告」「Fake Citation」「429 请求超限」「Benchmark 高墙」这些真实存在的模型翻车梗，说明生成过程整合了大量分散的领域细节，不是单纯堆视觉特效。"
,"结尾自带一句「本动画由 Claude 制作，结果可能有点偏」的自嘲字幕，这种对自身立场的调侃在一次性生成的展示作品里并不常见，说明叙事节奏和收尾包袱都经过了打磨。","发布时间是官方正式上\
线的前一天，如果作者所说「一次成型」属实，说明他拿到了发布前的早期测试机会；但这一点目前只有作者本人的说法，缺少第二方信源坐实，出圈的同时也留下了一个明显的可疑点（原文没有给出耗时、花费或所用\
工具）。"],"tech_stack":[{"name":"SVG（可缩放矢量图形）","role":"画面里角色与场景的绘制方式；视频结尾字幕本身写明「made 100% in code —\
 no images, no samples」，证实整支动画确实是代码程序化生成、没有用出图或素材拼接，但具体是 SVG 还是 Canvas/WebGL 未指明——「SVG」这一具体判断来自 \
OpenVGLab 社区收录列表把它归入「SVG 动画与插画」分类、以及 Reddit r/singularity 转发标题称其为 SVG 动画的独立说法（推断）"},{"name":"CSS\
/JS 或 SMIL 动画","role":"驱动镜头切换、角色动作与文字浮现等时间轴效果；光靠静态 SVG 很难承载四个回合的复杂叙事，大概率叠加了脚本或 CSS 过渡（推断，原文未说明）"
},{"name":"Claude Opus 5.5","role":"作者称一次性生成整段动画的模型"},{"name":"屏幕录制/视频导出","role":"把浏览器里渲染的动画转成上传\
到 X 的 1920×1080、时长 180 秒的 MP4 成片，具体导出工具未知（推断）"}],"techniques_zh":["用观众熟悉的「拟人对战」框架组织抽象内容：把两个 AI 模\
型画成角色、套进格斗游戏的血条和回合结构，模型之间的横向比较立刻变得好看又好懂。","把真实存在的评测梗和产品体验细节直接写进画面（报错提示、数 R 问题、上下文耗尽提示、benchmark \
名称），比堆砌抽象特效更容易让内行观众会心一笑。","结尾留一句自嘲式旁白，主动承认「结果由自己生成、可能有偏」，比一味自夸更容易获得转发和信任。","一次性交付一段有明确起承转合的多幕短片，\
而不是单一循环动效：多回合叙事对分镜和时间轴的把控要求更高，复现时最好先把每个回合当独立镜头拆开写。","重视封面停帧：视频封面停在一张纯文字片头画面上，说明作者对社交媒体上「点开播放前先被封\
面吸引」这一环也做了设计。"],"prompt":{"available":false,"original_excerpt":"","source_url":"","language":"un\
known","structure_zh":[],"reconstructed_zh":"（推断，原 prompt 未公开）请设计并生成一段约 3 分钟、1920×1080 的单段动画短片，讲\
一个「Claude 大战 ChatGPT」的完整故事，一次性给出可独立运行、能直接在浏览器里播放的自包含代码（SVG 为主，可以配合少量 CSS/JS 做动画），不要分批交付。\n设定：把 C\
laude 画成一个橙色的、带表情的刺球状小怪兽，把 ChatGPT 画成绿色的花环状小怪兽，给两者做成格斗游戏式的对战 UI，包含双方血条、回合提示和 VS 标志。\n剧情按 4 个回合推进\
，每回合换一个场景和玩法，并且要精确复刻一个真实存在的模型使用体验梗：\n1. 编程回合：赛博朋克风格场地，画面出现代码报错提示和一个模拟的代码审查终端窗口；\n2. 创作回合：唯美的黄昏云朵\
场景，双方各自「作画」并打出评分；\n3. 问答回合：棋盘场景，出一道常见的常识陷阱题（例如数某个单词里有几个某字母），并让其中一方的回答堆满口头禅式的模板用语；\n4. 语境管理回合：星空场\
景，画面显示具体的 token 用量数字和「上下文即将耗尽」的提示。\n最后进入「Race to AGI」火箭竞速终局，背景铺满真实存在的评测集名字（如 MMLU、GSM8K、ARC-AGI、\
SWE-bench），给出明确的名次结局，并在片尾打一行字幕承认结果由 Claude 自己生成、可能有偏见。全片自包含，不依赖外部图片或字体，方便直接录屏发布。"},"how_to_repro\
duce_zh":["选工具：claude.ai 网页版或 Claude Code 都可以，模型选 Opus 5.5，effort 调到中高档；这类单文件视觉作品不需要仓库权限，直接对话生成即\
可，原作者所用环境未知。","先把「拟人对战 + 多回合 + 真实使用体验梗」的剧情框架写清楚，越具体的回合设定（报错、经典提问、token 用尽）越容易让模型抓住重点，可以直接套用本页的复现\
提示词。","让模型先输出一份分镜说明（每回合的场景、双方动作、要出现的文字梗），确认节奏和梗都对了，再让它落地成可运行的 SVG/HTML 代码。","拿到代码后用浏览器打开预览，按回合逐段\
检查：动作有没有卡顿、文字有没有被遮挡、报错和评测名字这些细节梗有没有被画对。","用浏览器自带的录屏功能或无头浏览器加录屏工具把动画导出成 MP4，建议按 1920×1080、时长 3 分钟\
左右导出，方便直接发到 X 这类平台。","发布前再看一遍片尾字幕和结局，确认自嘲式收尾表达清楚、没有对第三方产品做出可能引发争议的负面暗示，再决定是否公开发布。"],"pitfalls_zh\
":["发布时间在 Opus 5.5 官方正式上线前一天，属于早期访问/预发布性质的爆料；第三方收录列表明确提示过「发布前流传的 Opus 5.5 演示里有被证实是伪造的」，复现或引用前最好对\
这条信息本身多一分保留，不要把「一次成型」当成已经坐实的事实。","作者没有公开源码、演示页、提示词或所用工具，画面里也看不到浏览器地址栏或代码编辑器等技术痕迹，具体是 SVG、Canvas \
还是别的渲染方式只能靠社区分类和画风推断，复现时选错技术路线是正常现象。","多回合、多场景的叙事动画一旦交给模型一次性生成，很容易在中段出现节奏拖沓或角色比例走样，验收时要按回合逐段检查，而\
不是只看开头结尾。","把两家真实公司的产品拟人化做正面「拉踩」对比，公开发布前要考虑是否会引发商标或名誉方面的争议，个人娱乐用途和对外正式传播的尺度不一样。"],"time_and_cost\
":"","screenshot":"","evidence":[{"url":"https://x.com/AndrewOnXYZ/status/2102089270747886043","\
quote":"Opus 5.5 just made this animation in one shot"},{"url":"https://github.com/OpenVGLab/awe\
some-opus5.5-frontend-showcases","quote":"Impressive SVG animation made by Opus 5.5 (zero shot)"
},{"url":"https://x.com/AndrewOnXYZ/status/2102089270747886043","quote":"made 100% in code — no \
images, no samples"}],"see_zh":null,"post_url":null,"status":"needs-review","verified_at":"2026-\
09-27","reviewed_at":"2026-09-27","no":2},{"slug":"100-html-files-gallery","title":"Claude Opus \
5.5 · 100 HTML Files","title_zh":"一百个单文件网页的创意长廊","one_liner_zh":"20 个 Opus 5.5 智能体并行开工，交出 100 个零\
依赖、互不雷同的单文件网页。","category":"website","tags":["单文件HTML","批量生成","多智能体并行","生成艺术","网页小游戏","截图验收"],"d\
ifficulty":4,"wow":4,"author":{"name":"Mia","handle":"@MiaAI_lab","url":"https://x.com/MiaAI_lab\
"},"platform":"x","published_at":"2026-09-22","source_url":"https://x.com/MiaAI_lab/status/21024\
90829306634560","demo_url":"https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/","repo_u\
rl":"https://github.com/MiaAI-Lab/Claude-Opus-5.5-100-HTML-Files","video_url":"","model_claim":{
"quote":"I've asked Claude Opus 5.5 to create 100 HTML files","url":"https://x.com/MiaAI_lab/sta\
tus/2102490829306634560","verified":"confirmed","plan":"unknown","harness":"other"},"what_it_is_\
zh":"这是一个收录 100 个独立 HTML 页面的在线画廊，题材横跨生成艺术、物理模拟、能弹奏的乐器和小游戏、杂志式长文排版、仪表盘与小工具。每一页都是把 CSS 和 JavaScrip\
t 全部内联的单文件，不加载任何字体、图片或库，下载后双击就能离线打开。作者把每一页对应的完整 prompt 存成同名 .txt 一起公开，画廊里展开卡片即可阅读和搜索。","why_impr\
essive_zh":["数量和差异度同时拉满：100 页覆盖纸雕立体场景、霓虹打砖块、合成器、星座图、钢琴、全息卡片等完全不同的概念，作者称没有一个坏文件，仓库 README 也列出了最后一\
轮自动检查的项目。","零外部资源是硬约束：不许用 CDN、库、网页字体和外部图片，所有画面只能靠 CSS、内联 SVG、Canvas 和程序化代码生成；我抽查的国际象棋页源码里确实没有任何外\
链，木纹来自 SVG 噪声滤镜，落子声由 Web Audio 合成。","单页的功能深度不输独立项目：国际象棋页实现了易位、吃过路兵、升变、将死与逼和、五十步和三次重复判和，说明文件里写明走法\
生成用 perft 对标准局面做过校验；纸雕森林页用同一个种子随机数在横竖屏下重新「剪」出整片森林。","作者在推文里拿它和此前在同一实验中表现最好的 Fable 5.1 比较，认为 Opus\
 5.5 明显更上一层。","每页都配一份 .txt，逐字保存 prompt，并附成品描述、主要视觉技巧和交互说明，等于把 100 份可复现的配方一起交了出来。"],"tech_stack":
[{"name":"HTML5 + 内联 CSS / JavaScript","role":"每页唯一的交付物，file:// 直接打开即可离线运行"},{"name":"Canvas 2D \
与内联 SVG","role":"全部视觉的来源：粒子、萤火虫、纸纹、矢量棋子和图形都在运行时绘制"},{"name":"SVG 滤镜 feTurbulence","role":"程序化生成木\
纹、皮革、纸张等材质，替代外部贴图"},{"name":"Web Audio API","role":"合成落子声、乐器和环境音，用户操作后才启动并带静音开关"},{"name":"无头 Ch\
romium","role":"按 1440×900 和 390×844 两种尺寸渲染截图供审阅，并做报错、外部请求和横向溢出检查（具体驱动工具作者未说明，推断为 Playwright 一类）\
"},{"name":"20 个并行 Claude Opus 5.5 agent","role":"每个 agent 负责 5 页；运行在 Claude Code 还是 API 上作者没有说明\
"}],"techniques_zh":["「单页简报 + 统一共享要求」两段式 prompt：每页有自己的名称、分层画面元素、带 hex 色值的调色板、交互和移动端要求，后面再接一段对全部页\
面生效的 10 条共享要求，创意各异而质量底线一致。","把零外部资源写成硬约束：禁用 CDN、库、网页字体和外部图片，逼模型用 CSS、SVG、Canvas 和程序化生成解决一切视觉问题，成\
品离线可开，也不会因为外链失效而损坏。","把「与其余 99 页在概念、版式、配色、字体、动效上明显不同」直接写进质量标准，并在每份简报里给出不同的具体色值，从源头防止风格趋同。","并行分工\
：20 个 agent 各领 5 页，每个上下文只处理少量页面，避免一个长会话越写越敷衍。","截图驱动验收：每页在桌面和手机两种尺寸下用无头浏览器渲染，看截图挑问题，通过才收录。","收尾跑\
一遍自动化体检：加载和一次基本交互时无报错、无外部网络请求、390px 宽无横向溢出、HTML 结构合法、.txt 中的 prompt 与实际一致。"],"prompt":{"availabl\
e":true,"original_excerpt":"One standalone HTML5 file. All CSS inline in <style>, all JavaScript\
 inline","source_url":"https://github.com/MiaAI-Lab/Claude-Opus-5.5-100-HTML-Files","language":"\
en","structure_zh":["每页一份独立创意简报：作品名、主题，以及逐层列出的画面元素（如纸雕森林的七到九层纸片）。","给出带 hex 值的调色板，必要时分日夜两套，并指定字体\
气质（如温暖的衬线体）。","列明交互方式：视差、点击触发的动画、切换开关、拖拽、撤销等。","功能型页面把规则写全，例如国际象棋要求合法走法、将军检测、易位、吃过路兵、升变和终局判定。","\
对手机和竖屏的布局或重新构图提出要求。","末尾附一段对全部 100 页通用的 10 条共享要求：单文件零外部资源、合法 HTML5、系统字体、响应式、离线无报错、动效与减弱动效、鼠标触屏键盘\
、声音规则、成品级细节。","质量标准明确要求与其余 99 页在概念、版式、配色、字体和动效上都不同。"],"reconstructed_zh":"（按作者公开的「单页简报 + 共享要求」结构\
改写，简报为本站原创示例）\n\n你是顶尖的创意前端工程师，请为「百页创意合集」写第 N 号作品，只输出一个完整的 HTML 文件。\n\n【本页简报】作品名「雨夜书店橱窗」：从街对面望向一家\
深夜营业的旧书店，画面分 6 层：石板路上的倒影、玻璃上滑落的雨痕、暖黄台灯、堆叠的书脊、窗台上打盹的猫、远处的霓虹招牌。配色：墨蓝 #1b2a3a、铜褐 #8c5a3c、灯黄 #f2c46d\
、旧纸 #efe3c8、霓虹粉 #ff5f8f。交互：指针移动产生层间视差；点猫会伸懒腰；滑块调雨势；按钮切换营业与打烊的灯光。竖屏时重新构图，不要只是缩放。\n\n【共享要求】\n1. 单个\
 HTML5 文件，样式和脚本全部内联；不用 CDN、库、网页字体、外部图片音频或任何网络请求，视觉全靠 CSS、内联 SVG、Canvas 和程序化生成。\n2. 结构合法：声明齐全、语义化\
标签、id 唯一，控件带 label 或 aria。\n3. 只用系统字体栈，并以通用字体族结尾。\n4. 从 360px 手机到大屏都没有横向滚动；Canvas 按设备像素比（上限 2）绘制\
，尺寸变化时重排。\n5. 直接用 file:// 打开也能离线运行，控制台零报错，存储读写包 try/catch。\n6. 动画用 requestAnimationFrame，只动 tran\
sform 和 opacity，标签页隐藏时暂停，尊重减弱动效设置。\n7. 鼠标、触屏、键盘都能操作，焦点样式清晰可见。\n8. 声音只用 Web Audio 合成，用户操作后才启动，并有可\
见的静音开关。\n9. 首帧就要好看，文案原创，虚构内容注明虚构。\n10. 和合集里其他页面在概念、版式、配色、字体、动效上都明显不同。"},"how_to_reproduce_zh":["\
选工具：用 Claude Code 搭配 Opus 5.5，因为它能写文件、开子 agent、调用无头浏览器；effort 建议选 high 或更高（本站建议，作者没说明档位）。","先写一份\
共享要求文件，内容参考仓库任意 .txt 里的 SHARED REQUIREMENTS：单文件、零外部资源、合法 HTML5、系统字体、360px 起响应式、离线零报错、减弱动效、声音需手势触\
发。","列出全部页面的创意简报清单，每份写清名称、主题、分层画面元素、5 到 6 个 hex 色值、交互方式和移动端要求；先通读一遍，确保题材、版式和配色不撞车。","并行生成：让每个子 a\
gent 领 5 份简报，逐个写出 NNN-名称.html，同时写一份同名 .txt，记录 prompt 原文、成品描述、视觉技巧和交互说明。","截图审阅：用 Playwright 之类的工\
具驱动无头 Chromium，在 1440×900 和 390×844 下截首帧，把截图交给 Claude 看图挑毛病，改到满意再收。","写自动体检脚本：监听控制台错误和网络请求，模拟一次点\
击，检查 390px 宽时是否横向溢出，再跑一遍 HTML 结构检查，不通过的页面退回重写。","最后生成 index.html 画廊：缩略图卡片、在新标签页打开、展开查看 prompt、全文\
搜索，然后推到 GitHub Pages 公开。"],"pitfalls_zh":["推文把规则说成三句话，但仓库里每页 prompt 其实是一大段详细简报再加 10 条共享要求；只丢一句「做\
 100 个好看的页面」很难复现同等质量。","浏览器的自动播放策略会拦截未经用户操作就创建的音频，AudioContext 要在第一次点击后再启动，并给出可见的静音开关。","Canvas \
不按 devicePixelRatio 缩放会在高分屏发虚，不设上限又会在 4K 屏掉帧；切到后台时要暂停动画循环，否则白白耗电。","100 页加上多轮截图评审非常消耗额度，作者没有公布耗时\
和费用；建议先拿 5 到 10 页跑通整条流程，再放大规模。"],"time_and_cost":"","screenshot":"shots/100-html-files-gallery.j\
pg","evidence":[{"url":"https://x.com/MiaAI_lab/status/2102490829306634560","quote":"ZERO BROKEN\
 FILES. I'm just blown away!"},{"url":"https://github.com/MiaAI-Lab/Claude-Opus-5.5-100-HTML-Fil\
es","quote":"The work was split across 20 parallel Claude Opus 5.5 agents, five pages each."},{\
url":"https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/","quote":"expand a card to rea\
d the exact prompt that produced it"},{"url":"https://miaai-lab.github.io/Claude-Opus-5.5-100-HT\
ML-Files/070-chess-study.txt","quote":"Move generation was verified with perft against standard \
test positions."}],"see_zh":null,"post_url":null,"status":"verified","verified_at":"2026-09-26",
"reviewed_at":"2026-09-27","no":3},{"slug":"4d-gaussian-creature-path","title":"Space and time r\
econstructed in 4D","title_zh":"把一路轨迹叠成四维分身","one_liner_zh":"把视频重建成4D高斯点云，动物走过的每一刻同时现形，是作者首个Opus\
 5.5实验","category":"3d","tags":["4D重建","3D高斯泼溅","空间计算","时空可视化","视频转3D"],"difficulty":5,"wow":4,"\
author":{"name":"Bilawal Sidhu","handle":"@bilawalsidhu","url":"https://x.com/bilawalsidhu"},"pl\
atform":"x","published_at":"2026-09-22","source_url":"https://x.com/bilawalsidhu/status/21025989\
07817587141","demo_url":"","repo_url":"","video_url":"https://x.com/bilawalsidhu/status/21025989\
07817587141/video/1","model_claim":{"quote":"Also officially my first experiment with opus 5.5",
"url":"https://x.com/bilawalsidhu/status/2102598907817587141","verified":"confirmed","plan":"unk\
nown","harness":"other"},"what_it_is_zh":"这是长期做空间计算与三维重建内容的创作者 Bilawal Sidhu 发布的一段可视化视频：他把一段带地理位\
置信息的实拍视频逐帧重建成 3D 高斯点云，再把所有帧按各自发生的时间和位置一次性叠放进同一个三维场景，于是画面里一只移动的四足动物，连同摄像机走过的路径，被同时“摊开”成一条贯穿全程的时空长\
龙。他把这个效果类比成 Vonnegut 笔下把人类看作“千足虫”的高维生物视角，并称这是他第一次拿 Opus 5.5 做的实验。","why_impressive_zh":["素材是一段真实\
拍摄、带地理位置信息的视频，不是文字或图片生成的画面：要先把每一帧独立重建成 3D 高斯点云，再估计出每一帧对应的相机位姿和时间戳，这一步比单张照片转 3D 模型难得多。","把“逐帧的三维重\
建”按各自的时间和空间坐标一次性叠放回同一个场景，让画面里移动的四足动物在同一帧里同时呈现出它走过的每一个瞬间，做成一条连续的“时空长龙”，这种“全部时刻一起看”的呈现方式并不常见，很容易叠成\
一团噪点而不是清晰的轨迹。","作者借用 Vonnegut 笔下把人类形容为“千足虫”的高维生物视角来解释画面，用一个通俗的文学意象讲清楚了一个原本很偏工程的时空重建结果，原文数据显示这条视频\
获得了 1751 次点赞、735737 次观看的传播效果。","作者本人长期做空间计算、体素与高斯点云类内容，把这条效果称作自己第一次拿 Opus 5.5 做的实验，说明这类偏图形学与计算机视\
觉方向的专业创作，现在也开始尝试把 Opus 5.5 接入创作流程里。"],"tech_stack":[{"name":"带地理位置信息的实拍视频","role":"原始素材：作者原文写的是“\
geolocated 2d video”，具体拍摄设备（无人机/手机等）未说明（推断）"},{"name":"逐帧 3D 高斯泼溅重建（3D Gaussian Splatting）","rol\
e":"核心重建技术，原文明确提到“per frame 3d gaussians”；具体使用的算法或工具未点名（推断为常见 3D 高斯泼溅类方法）"},{"name":"相机位姿估计 / 视频\
地理配准","role":"把每一帧的相机位置和朝向标定到统一世界坐标系，是“精确摆到发生的时间和地点”的前提（推断，原文只给结果未给方法）"},{"name":"4D 时空合成与交互渲染",
"role":"把所有帧的高斯点云按各自时间戳叠放进同一场景，并渲染出画面里出现的时间轴进度条与相机视锥可视化（推断）"},{"name":"Claude Opus 5.5","role":"\
作者称为其“第一次实验”所用的模型；原文未说明它在流水线里具体承担哪一步（例如编写可视化/渲染代码），仅确认有参与（推断用途）"}],"techniques_zh":["给一份普通视频加上位置\
与时间元数据，再逐帧做三维重建，把“2D 视频”升级成一份可以任意截取时刻的“4D 时空数据”，而不只是把单帧照片转成 3D 模型。","用“把全部时刻一次性摊开”代替常规的时间轴播放，把一段\
连续的运动过程压缩成一张能直接感知全过程的静态画面，制造出反直觉的视觉冲击。","借助一个现成的文学或哲学意象（比如 Vonnegut 的“千足虫”比喻）给一个偏工程的可视化结果配一句解释，让\
技术效果变成大众也能秒懂的画面。","把新模型的第一次尝试放进自己本来就在长期做的专业项目里检验效果，用“这次做出来怎么样”反过来评估模型能力，而不是从零挑一个通用任务去测试。","在最终画面\
里保留时间轴、相机视锥这类“过程性” UI 元素，既当作调试信息，也变成作品风格的一部分，让观众能看懂这段画面是怎么拼出来的。"],"prompt":{"available":false,"o\
riginal_excerpt":"","source_url":"","language":"","structure_zh":["（推断，原 prompt 未公开）输入说明：一段带位置与时\
间元数据的视频，或者已经逐帧算好的 3D 高斯点云数据。","目标：把这些逐帧点云按各自的时间戳合并进同一个三维场景，做出“所有时刻同时可见”的效果。","视觉约束：静态背景不能因多帧叠加而变\
成噪点，移动主体走过的每个历史位置要保持清晰可辨。","交互与界面要求：保留时间轴/进度条，并能显示当前帧对应的相机视锥或原始画面缩略图。","交付形式：一段可以直接录屏发布或可交互旋转查看的\
效果（作者最终以视频形式发布）。"],"reconstructed_zh":"（推断）你要写一段代码，把“逐帧 3D 高斯点云 + 每帧时间戳”渲染成一个时空合成场景，Three.js 或 P\
ython 加可视化库都可以。\n输入：一个按帧编号排列的点云文件夹（或占位点云数据结构），以及一份记录每帧相机位姿和时间戳的元数据文件。\n硬性要求：\n1. 把所有帧的点云按各自的位置和时\
间戳一次性叠放进同一个三维场景，不要按时间顺序依次播放，而是让它们同时全部可见。\n2. 给画面里移动的主体（人物、动物或车辆）保留清晰可辨的“运动残影”：不同时间点的位置要能分出先后，可以用\
颜色渐变或透明度区分早晚。\n3. 静态背景（地面、植被等）多帧叠加后不能糊成一片噪点，需要做置信度过滤或适当降采样。\n4. 画面角落保留一条时间轴/进度条，并在当前高亮时刻叠加对应的相机视\
锥框和原始画面缩略图，让人一眼看出这是怎么拼出来的。\n5. 先给我一个能跑起来的最小版本，再逐步补时间轴动画和相机视锥的细节，最终产出一段可以直接录屏或可交互旋转查看的效果。"},"how_\
to_reproduce_zh":["选一段十几到二十秒左右、包含移动主体（人、动物或车辆）的视频，最好带地理位置或传感器元数据（手机、无人机自带的 GPS/IMU 信息）；没有的话也可以后续\
用软件估算相机轨迹。","用支持 3D 高斯泼溅（3D Gaussian Splatting）的开源重建工具或自己写脚本，把视频逐帧转换成一系列独立的 3D 高斯点云，并记录每一帧对应的时间戳\
。","做相机位姿估计（可以用现成的 SfM/位姿估计工具，或直接利用视频自带的位置数据），把每一帧的点云都配准到同一个世界坐标系里，避免各帧各自漂移。","把所有帧的点云按时间戳依次叠加进同\
一个三维场景，让移动主体在不同时间点的位置都保留下来，形成一条连续的“运动残影”。","用 Claude Opus 5.5（建议用 Claude Code 这类能读写代码文件的 harness\
，effort 调到较高档位）写或改造把上述点云数据渲染成可交互画面的代码，比如加上时间轴进度条、相机视锥可视化和一行说明文字。","反复调整取样密度和透明度，避免叠加后的静态场景（地面、植被\
）因为多帧堆叠变成一片噪点，同时保证移动主体的每个历史位置依然清晰可辨。","导出一段可回放或可交互旋转的演示效果，检查主体走过的关键路径是否都被完整保留，再录屏发布。"],"pitfalls\
_zh":["多帧高斯点云直接叠加容易让静态背景（植被、水面）因噪声和视差误差变成一团模糊的“雪花”，需要做去噪或按置信度过滤后再叠加。","相机位姿估计不够准会导致不同帧的点云对不齐，移动主\
体的“运动残影”会出现明显错位或重影，而不是原作里那种干净的一条轨迹。","GPU 显存和渲染时间会随视频时长与帧数线性增长，作者原文也提到重建过程让“我的 GPU 爆了”，长视频或高分辨率素\
材建议先降采样或分段处理。","原文没有公开代码、数据或具体使用的重建工具，本页给出的流水线步骤和 Opus 5.5 的具体分工均为推断，照做前要接受最终效果可能与原作有差距。"],"time\
_and_cost":"","screenshot":"","evidence":[{"url":"https://x.com/bilawalsidhu/status/210259890781\
7587141","quote":"Also officially my first experiment with opus 5.5"},{"url":"https://x.com/bila\
walSidhu/status/2102391212544291072","quote":"Geolocated 2d video → per frame 3d gaussians → eac\
h left precisely where & when it happened"},{"url":"https://x.com/bilawalsidhu/status/2102754359\
012364696","quote":"leaving a 3D snapshot of every moment exactly when and where it happened"}],
"see_zh":null,"post_url":null,"status":"verified","verified_at":"2026-09-27","reviewed_at":"2026\
-09-27","no":4},{"slug":"bass-music-in-javascript","title":"opus 5.5 passed a real threshold at \
making music with code!","title_zh":"一句话敲出一段贝斯电音","one_liner_zh":"一句『用 JS 做点贝斯音乐』，Opus 5.5 就纯代码合\
成出一段能听的电子贝斯曲。","category":"other","tags":["JavaScript","音频合成","Web Audio API","一次成型","生成音乐","bas\
s music"],"difficulty":2,"wow":4,"author":{"name":"A.J.","handle":"@aj_dev_smith","url":"https:/\
/x.com/aj_dev_smith"},"platform":"x","published_at":"2026-09-22","source_url":"https://x.com/aj_\
dev_smith/status/2102504509637587339","demo_url":"","repo_url":"","video_url":"https://x.com/aj_\
dev_smith/status/2102504509637587339/video/1","model_claim":{"quote":"opus 5.5 passed a real thr\
eshold at making music with code!","url":"https://x.com/aj_dev_smith/status/2102504509637587339"
,"verified":"confirmed","plan":"unknown","harness":"unknown"},"what_it_is_zh":"这是开发者兼音乐人 A.J.（@a\
j_dev_smith）在 2026 年 9 月 22 日发的一条推文：他只给 Opus 5.5 提了一句『用 JavaScript 做点贝斯音乐』，模型一次性写出的代码就能在浏览器里现场合成\
播放出一段有节奏、有低音线的电子贝斯曲，没有借助任何采样素材或现成音乐库。推文附带一段近两分钟的录屏，展示了代码和实际播放效果，作者称这是模型在『用代码做音乐』这件事上一次实打实的突破。","\
why_impressive_zh":["提示词只有一句话『make some bass music with javascript』，没有给库名、格式或时长限制，却一次直接产出可以播放的电子\
贝斯音乐，作者形容这次结果「迈过了一个实打实的门槛」。","用代码凭空合成声音比生成图片或文字更难蒙混过关：振荡器、包络、滤波器的参数只要算错，播放出来立刻是噪声或电流声，模型必须让整条数字信\
号链在数学上和听感上都经得起耳朵检验。","作者自称『musician. developer.』，隔天用同一思路继续追问，做出了一整首带 MV 的流行朋克单曲，并写明『everything y\
ou see and hear is generated from javascript code that claude wrote』，并强调没用采样、也没用现成库，说明这次 bass mu\
sic 不是偶然撞对，而是可以延展的纯代码音频合成能力。","这条推文没有配任何示例代码或库名提示，也没有事后补发仓库或演示页，全部判断只能靠视频里的画面和声音——对『AI 写代码能不能做出真\
的能听的音乐』这个问题给出了一个直接、可复核的正面案例。"],"tech_stack":[{"name":"JavaScript（浏览器原生）","role":"承载全部逻辑与音频合成代码的语\
言，原文明确写的是 JavaScript"},{"name":"Web Audio API","role":"推断用来实时生成振荡器、包络、滤波器等信号的浏览器音频接口（推断，原文未点名具体 \
API，但『纯代码合成、不用采样』通常靠它实现）"},{"name":"单文件 HTML 页面","role":"推断的成品交付形态：一个能直接在浏览器打开播放的页面（推断）"},{"name\
":"Claude Opus 5.5","role":"根据一句自然语言提示一次性（one shot）写出全部音频合成代码的模型"},{"name":"Claude 对话界面（claude.a\
i 或 Claude Code）","role":"原文未说明具体用的是网页对话还是 Claude Code 生成文件，这里按常见路径列出两种可能（推断）"}],"techniques_zh"
:["只给一句开放式指令，不给库名、格式或示例代码，测试模型能不能独立选定音频合成方案。","要求纯代码合成声音，不使用采样、音效库或现成音乐素材，逼模型自己写振荡器、包络等信号链。","用『\
one shot』一次性生成、不追加纠错指令，来检验模型是否真的一步到位而不是靠反复调试。","拿到成品后连续追问同一模型做风格变体（比如换成流行朋克），验证底层合成能力是否可复用、可延展。"
,"把生成过程和播放效果一起录屏发布，让声音成品可以被别人直接验证，而不是只贴一段代码。"],"prompt":{"available":true,"original_excerpt":"ma\
ke some bass music with javascript","source_url":"https://x.com/aj_dev_smith/status/210250450963\
7587339","language":"en","structure_zh":["唯一的任务指令：用 JavaScript 做一点 bass music（贝斯风格电子音乐）。","没有指定曲\
长、库名、文件格式或播放方式，全部留给模型自己决定。","隐含的验收标准是『能实际播放出声音』，而不是只生成一段静态代码——作者是拿播放效果去判断『过没过关』的。"],"reconstruct\
ed_zh":"用 JavaScript 帮我做一段 bass music（贝斯风格电子音乐）。请写成一个能直接在浏览器里打开的单文件页面，所有声音都要用代码实时合成出来，不许调用任何外部音效\
库、采样文件或在线音乐素材。曲子要有清晰的贝斯低音线和稳定的节奏律动，能连续播放至少 30 秒并且可以循环；如果浏览器会挡住自动播放，就加一个明显的按钮或提示，让我点一下就能听到声音。写完之后\
自己在心里过一遍这段代码实际会发出什么声音、节奏对不对、会不会有破音或电流声，确认没问题再交给我。"},"how_to_reproduce_zh":["选工具：claude.ai 网页版或 C\
laude Code 都行，模型选 Opus 5.5；只是想验证『一句话出效果』的话，用网页对话最省事，不需要开发环境。","直接照抄或改写本页的复现提示词，只给一个开放式目标，不要预先塞库名\
、参数或示例代码，让模型自己决定怎么合成声音。","拿到代码后存成单个 .html 文件，双击打开，或用 python3 -m http.server 起个本地服务器在浏览器里访问。","浏览\
器通常会挡住没有用户交互的自动播放，第一次很可能要点一下页面或按钮才能听到声音；模型没处理好就追加一句『加个播放按钮，处理自动播放限制』。","打开控制台看看有没有报错，耐心听完整段音乐，确认\
是持续、成调、有节奏的声音，而不是杂音或电流声。","想复刻作者后续的玩法，就追加要求换一种音乐风格（流行朋克、说唱……），看模型能不能在同一套合成代码基础上做变奏。"],"pitfalls_\
zh":["浏览器自动播放限制：代码写好但页面打开没声音，很可能不是没生成成功，而是浏览器挡住了没有用户交互的音频播放。","『one shot』只是作者自述，推文没有留下过程记录或代码仓库，\
没办法验证中途有没有重试或后期剪辑，复现时不要预期每次都一次成功。","纯代码合成的音质好不好完全靠耳朵判断，没有客观测试能自动打分，长时间叠加多个振荡器还可能出现杂音或性能问题。","作者后\
来的『Claw'd-o-Matic』之类项目看起来相关，但官网并未证实与这条推文用的是同一份代码或同一次对话，复现时不要把两者混为一谈。"],"time_and_cost":"","scree\
nshot":"","evidence":[{"url":"https://news.ycombinator.com/item?id=49818308","quote":"generated \
song/music with code"},{"url":"https://x.com/aj_dev_smith/status/2102575577563570450","quote":"e\
verything you see and hear is generated from javascript code that claude wrote"}],"see_zh":null,
"post_url":null,"status":"verified","verified_at":"2026-09-27","reviewed_at":"2026-09-27","no":5
},{"slug":"blender-castle-fireworks","title":"First Opus 5.5 vs GPT-6 Astra test is 3D.","title_\
zh":"湖心城堡放烟花：十秒长镜头对决","one_liner_zh":"同题对比GPT-6 Astra，Opus 5.5纯Blender程序化搭出湖心城堡烟花","category":"3\
d","tags":["Blender","程序化生成","3D模型对比","城堡","烟花特效","建造延时"],"difficulty":4,"wow":4,"author":{"name\
":"Stefan Vaskevich","handle":"@Stefan_3D_AI","url":"https://x.com/Stefan_3D_AI"},"platform":"x"
,"published_at":"2026-09-22","source_url":"https://x.com/Stefan_3D_AI/status/2102471841046786153\
","demo_url":"","repo_url":"","video_url":"","model_claim":{"quote":"First Opus 5.5 vs GPT-6 Ast\
ra test is 3D.","url":"https://x.com/Stefan_3D_AI/status/2102471841046786153","verified":"confir\
med","plan":"unknown","harness":"other"},"what_it_is_zh":"Stefan Vaskevich 用同一句英文提示词分别喂给 Opus 5.\
5 和 GPT-6 Astra，要求两个模型只用 Blender、全程序化地搭建一座湖边城堡的夜景场景，最终渲染出一段十秒短片，并各自录下自己的建造延时过程。Opus 5.5 用时三十五分钟、\
输出十九点九六万 token，按作者给出的口径约合十三点三美元；GPT-6 Astra 用时二十八分钟、输出五点六六万 token，约合十四点五美元。作者据此判断 Opus 5.5 虽然输出更\
多，反而更快，也能同时处理更多细节。","why_impressive_zh":["约束是「一句提示词、只用 Blender、全部程序化」：模型要自己完成地形、城堡建模、材质、灯光、水面倒影和\
烟花粒子特效这一整套 3D 管线，不能靠拼装现成素材或调用网页图形库偷懒。","作者是专职 3D/AI 内容创作者，用同一句提示词对两个当红模型做正面量化对照，给出了少见的可比数字：Opus \
5.5 用时 35 分钟、输出 19.96 万 token、约 13.3 美元；GPT-6 Astra 用时 28 分钟、5.66 万 token、约 14.5 美元——Opus 5.5 输出\
更多 token 却更快，费用还略低。","原文特别要求「record your own build timelapse」，让模型在无人工干预的情况下边搭边留痕，建造过程可回放核查，而不是只交\
一张糊弄人的终稿图。","从最终成片看，两边都独立完成了带夜空烟花、水面反光、远山剪影的完整运镜镜头，说明模型已经能在 Blender 这类专业 DCC 软件里自主完成有导演调度感的镜头，而不\
只是常见的 Three.js 网页 demo。"],"tech_stack":[{"name":"Blender","role":"程序化建模、材质、灯光、水面与最终渲染所用的 3D 软件；原\
文明确要求「Blender only」"},{"name":"Blender Python API（bpy）/ 几何节点","role":"模型很可能借助 bpy 脚本或几何节点驱动 Blen\
der 完成程序化建模与动画（推断，原文未点名具体接口）"},{"name":"Claude Opus 5.5 / GPT-6 Astra","role":"分别独立完成同一 Blender \
任务的两个对照模型"},{"name":"屏幕/视口录制工具","role":"用于录制模型自己搭建场景的延时短片，原文未指明具体软件（推断）"},{"name":"可执行脚本并驱动 Blen\
der 运行的 agent 环境","role":"原文未说明具体 harness；近 35 分钟的自主建模需要能读写文件、跑 Python 并操作 Blender 的代理环境，如 Claud\
e Code 或类似工具（推断）"}],"techniques_zh":["同题双模型对照测试：把同一句提示词分别喂给两个模型，记录耗时、输出 token 和费用做正面量化对比，而不是凭印象夸\
模型强。","用「全程序化 + 单一 DCC 软件」当硬约束（这里是 Blender only, all procedural），逼模型不能贴现成素材，倒逼它把真实建模和脚本能力亮出来。","\
要求模型自己录制建造延时摄影，把过程留痕，验收时能回看每一步，而不是只看一张终稿图。","给出明确的成片规格（固定十秒镜头、注明是渲染成片而非交互 demo），让模型对齐一个具体、可核验的交付\
物，而不是模糊地「做个场景」。","把 token 开销换算成统一的「API 计费口径」美元数，方便跨模型、跨定价方案做费用比较，即便实际用的是订阅额度（推断该换算方法）。"],"prompt\
":{"available":false,"original_excerpt":"","source_url":"","language":"","structure_zh":["核心任务：只\
使用 Blender、以程序化方式搭建一座临湖城堡的夜景三维场景（原文「Blender only, all procedural」）。","交付形式：渲染出一段大约十秒的最终镜头（原文「Ren\
der the 10-second shot」）。","过程留证：要求同时录制模型自己搭建场景的建造延时视频（原文「record your own build timelapse」）。","画\
面元素（推断自成片）：湖面倒影、远山剪影、城堡窗户与灯笼的暖色光照，以及天空中多组带拖尾轨迹的烟花。","硬约束（推断）：不得导入现成素材或外部贴图库，地形、建筑、水面、烟花粒子等都要靠脚本或\
节点程序化生成。"],"reconstructed_zh":"（推断）你将只使用 Blender，完全靠 Python 脚本或几何节点程序化生成下面这个场景，不允许导入任何外部模型、贴图或现成\
素材，也不能用手动建模走捷径。\n\n场景内容：一座矗立在湖边（湖心小岛更好）的中世纪风格城堡，背后是起伏的远山剪影。时间设定在夜晚，城堡的窗户、门廊和周围的灯笼要透出暖黄色光，水面必须清晰地\
倒映出城堡与灯光。\n\n镜头与时长：渲染一个大约十秒、带轻微推近或环绕运镜的最终镜头。天空中要绽放至少两到三组颜色不同、带发射拖尾的烟花，烟花本体和它在水面上的反光都要用粒子或物理系统程序化\
生成，不要用现成贴图或视频合成糊弄。\n\n交付要求：\n1. 地形、建筑主体、水面材质、灯光与烟花特效全部通过脚本或节点程序化生成，全过程不导入外部资产。\n2. 独立完成建模、材质、灯光、\
动画与最终渲染合成，导出一份完整的十秒视频。\n3. 在建造过程中，额外录制一段你自己搭建整个场景的延时视频，与最终渲染一并提交。\n4. 完成后自检：地形与建筑有没有明显穿插错误，水面反射是\
否合理自然，烟花的绽放时间点是否均匀分布在这十秒之内。"},"how_to_reproduce_zh":["选一个支持长任务、能读写文件并调用外部程序的 agent 环境，例如 Claude \
Code；确认本机已装好 Blender，且可以从命令行或 Python 脚本调起渲染。","把本页「复现提示词」整段交给 Opus 5.5，effort 建议调到较高档位，因为要在无人工干预\
下独立完成建模、材质、灯光、动画与渲染全流程。","在提示词里写清硬约束：只用 Blender、资产全部程序化生成（不得导入外部素材），最终产出固定时长（如十秒）的渲染镜头。","额外要求模型\
编写或触发一段建造过程的录屏/延时脚本，保证有过程证据可回看，而不是只拿到一张终稿图。","放手让模型自主推进，中途只观察不打断；如支持，可让它自己迭代渲染参数（曝光、水面反射、烟花粒子密度）\
来收敛画面质量。","验收时检查三件事：产出是否真的是程序化生成（脚本或节点是否可读、没有外部贴图导入记录）、渲染是否达到规定时长与基本可看的构图、建造延时是否完整覆盖主要建模阶段。","如果\
想复刻作者的横向对比，用同一句提示词在另一个模型（或另一个 effort 档位）上重跑一遍，记录墙钟时间、输出 token 与折算费用，列成对照表。"],"pitfalls_zh":["Ble\
nder 的 Python/bpy 接口和版本差异较大，agent 生成的脚本在不同 Blender 版本或无头渲染环境下可能报错，最好先固定好本机 Blender 版本再放手跑。","纯程序\
化生成的烟花粒子和水面反射对渲染开销较大，十秒镜头如果分辨率或采样数设置过高，本地渲染时间会远超模型「思考」和写脚本的 35 分钟。","原文的美元数是「in API terms」的折算口径，\
如果你实际用的是 Max/Pro 订阅而非按量计费的 API，实际额度消耗和这里的美元数不能直接画等号，比较费用时要留意口径差异。","作者没有公开具体 prompt 原文与工程文件，本页的复\
现提示词和结构拆解均为根据成片视频反推，实际效果可能与原作有出入，需要自己多轮调整措辞。"],"time_and_cost":"作者给出：Opus 5.5 用时 35 分钟、输出 19.96 \
万 output token，约合 13.3 美元（原文注明是「in API terms」的折算口径）；GPT-6 Astra 用时 28 分钟、输出 5.66 万 output token，\
约合 14.5 美元。","screenshot":"","evidence":[{"url":"https://x.com/Stefan_3D_AI/status/2102471841046\
786153","quote":"One prompt, Blender only, all procedural."},{"url":"https://x.com/Stefan_3D_AI/\
status/2102471841046786153","quote":"Opus juggles way more at once and is faster overall."},{"ur\
l":"https://favtutor.com/claude-opus-5-5-real-examples/","quote":"a detailed castle reflected in\
 a lake"}],"see_zh":"成品是 Blender 渲染出的湖心城堡烟花画面，作者贴在 X 原帖里，和 GPT-6 Astra 的结果并排对比。点「看原帖」查看。","post_\
url":null,"status":"verified","verified_at":"2026-09-27","reviewed_at":"2026-09-27","no":6},{"sl\
ug":"blender-claymation-one-prompt","title":"Clay Spark","title_zh":"一句话让黏土 Claude 星芒活过来","one_l\
iner_zh":"网页聊天里一句话，Opus 5.5 自己搭景、用 Blender 渲出 20 秒黏土定格片","category":"3d","tags":["Blender","黏土动画\
","定格动画","claude.ai","单提示词","3D 渲染"],"difficulty":2,"wow":4,"author":{"name":"Alex Albert","hand\
le":"@alexalbert__","url":"https://x.com/alexalbert__"},"platform":"x","published_at":"2026-09-2\
2","source_url":"https://x.com/alexalbert__/status/2102458348511879448","demo_url":"","repo_url"
:"","video_url":"https://x.com/alexalbert__/status/2102458348511879448/video/1","model_claim":{"\
quote":"Opus 5.5 can use Blender to make claymations with just a single prompt","url":"https://x\
.com/alexalbert__/status/2102458348511879448","verified":"confirmed","plan":"unknown","harness":
"claude.ai"},"what_it_is_zh":"Anthropic 研究员 Alex Albert 在 Opus 5.5 发布当天贴出一段 22 秒录屏：他在 claude.ai \
里上传一张 Claude 标志图，只发了一句请求，要一段约 20 秒、像专业动画工作室出品的定格动画，主角就是这个标志。Opus 5.5 把它做成了 3D 黏土风微缩场景：木纹书桌、书本、笔筒\
和串灯虚化光斑前，一颗黏土球长成带眼睛的橙色星芒，张望一圈后站上书堆，成片以名为「Clay Spark」的动画 Artifact 直接交付。","why_impressive_zh":["一句\
话到成片：用户只给了时长、质感标杆和主角三个条件，布景、道具、灯光、角色造型、故事节拍、渲染和交付全由模型自己拆解；它甚至先检查了工作区里有哪些可用于渲染和验帧的工具，再决定怎么做。","会看\
自己的渲染结果并返工：模型一开始就说要先检查画面再发给用户，进度汇报里提到正在修一处阴影瑕疵、按标志调整角色比例和颜色。作者半小时后另发一条推文，把 Opus 5.5 玩 Blender 的表\
现归因于更强的 3D 建模和视觉能力。","黏土质感到位：成片有暖色串灯的浅景深光斑、木纹桌面、柔和的接触阴影，星芒手臂像手搓的圆润黏土条，整体接近实拍微缩布景，而不是常见的塑料感 CG。",
"全程在网页聊天里完成：不用本地安装 Blender、不用自己写脚本，录屏里能看到创建文件、运行命令、读取文件、更新任务清单等多组工具调用，最终在对话旁的播放器里直接播放 0:20 的成片。"
,"传播数据来自原帖：采集时约 2600 赞、1567 次收藏、25.7 万次浏览；ohmyopus 合集把它列为「3D、Blender 与模拟」板块的第一个案例。"],"tech_stack\
":[{"name":"Claude Opus 5.5","role":"理解需求、设计布景与故事节拍、编写并执行渲染流程、查看渲染帧后自行返工（作者原帖确认）"},{"name":"clau\
de.ai（代码执行工作区 + Artifact）","role":"在对话中运行命令、创建和读取文件，并把成片作为名为 Clay Spark 的动画 Artifact 交付（录屏可见）"},
{"name":"Blender","role":"搭建 3D 黏土场景、打光并渲染动画（作者原帖说明使用 Blender；版本和渲染引擎未说明）"},{"name":"Blender Pyt\
hon API（bpy）","role":"以脚本方式建模、布光、设置关键帧并在无界面模式下渲染（推断：聊天沙箱没有图形界面，只能靠脚本驱动 Blender）"},{"name":"ffmpe\
g","role":"把渲染出的帧序列编码成视频文件（推断）"}],"techniques_zh":["只给结果标准、不给做法：请求里只有时长、品质对标（专业动画工作室）和主角，技术路线留给模\
型；它自己选了「3D 场景 + 黏土外观」这条最能出质感的路。","附参考图锁定角色：上传标志图片作为主角参照，模型据此把黏土角色的比例和颜色往原标志上校准，比纯文字描述准确得多。","先盘点\
环境再动手：让模型先查清工作区里有哪些渲染、验证工具，再定方案，避免写出一套跑不起来的流程。","渲染后抽帧自检：要求它在交付前把关键帧渲染出来自己看，发现阴影、穿模、颜色偏差就修，修完再出视\
频。","按故事节拍分段：把 20 秒拆成「长出—张望—跳上书堆」几个节拍逐段确认，出了问题只重渲那一段。","定格顿挫靠低帧率加微形变（推断）：按 12 fps 左右出帧、每帧重复两次填进 \
24 fps 视频，并给黏土表面加极轻的逐帧抖动，模拟手捏黏土的不完美。"],"prompt":{"available":true,"original_excerpt":"can you cr\
eate a stop motion animation video (~20 seconds)?","source_url":"https://x.com/alexalbert__/stat\
us/2102458348511879448/video/1","language":"en","structure_zh":["附件：随请求上传一张 Claude 标志（橙色放射状星芒）图片\
，作为角色参照。","形式与时长：做一段定格动画视频，时长约 20 秒。","品质标杆：要求极高品质、看起来写实，像专业动画工作室做出来的。","主角：指定用 Claude 标志当主角。","\
没有提到的：Blender、黏土材质、布景、故事、分辨率和帧率都没写，全部由模型自己决定；「用 3D 场景做黏土风」是模型在回复里给出的方案。","交互方式：整段请求就是一句口语化提问，作者称\
只用了一个 prompt，录屏里没有出现后续修改指令。"],"reconstructed_zh":"请做一段约 20 秒的定格黏土动画视频，品质要像专业动画工作室的作品。主角是我附上的这张 C\
laude 标志（橙色放射状星芒）：把它做成一个黏土角色，比例和颜色尽量贴近原图，再加一对小眼睛让它有表情。\n制作要求：\n1. 先检查当前环境有哪些工具可用（Blender、Python、\
ffmpeg），再决定方案；优先用 Blender 的 Python 脚本在无界面模式下建模、布光、做动画和渲染。\n2. 布景是一张桌面上的微缩场景：木纹桌、几本书、笔筒，背景挂暖色串灯形成\
虚化光斑；用浅景深、柔和主光和清晰的接触阴影营造实拍微缩感。\n3. 黏土质感：表面带细微凹凸和手捏痕迹，哑光、略带次表面散射，不要塑料感。\n4. 故事节拍：一颗黏土球在桌上轻轻抖动，长出星\
芒手臂，睁眼四处张望，最后跳上书堆摆个姿势收尾。\n5. 定格感：按 12 fps 出帧，每帧给角色加极轻微的随机形变，最终编码成 24 fps、1920×1080 的 MP4。\n6. 交付\
前先抽取每个节拍的关键帧自己检查，修掉阴影瑕疵、穿模、角色浮空和颜色偏差，再把视频发给我，并列出你改过哪些地方。"},"how_to_reproduce_zh":["选工具：最接近原作的是 c\
laude.ai 网页版，模型选 Opus 5.5，并确认对话里能执行代码、创建文件（录屏里模型会运行命令并用 Artifact 交付视频）。如果你的环境里用不了 Blender，就改用 Cl\
aude Code，在本机装好 Blender 并确保终端里能直接调用 blender 命令。","准备参考图：把想当主角的标志或角色图（背景干净的 PNG）随请求一起上传。","发请求：先试\
作者那种极简的一句话，看模型自己怎么发挥；想要更可控，就用上面的复现提示词，把布景、节拍、帧率和自检要求写清楚。","盯进度、随时插话：模型会先盘点环境，再分阶段汇报布景渲染、角色动画和节拍检\
查；看到关键帧预览不满意，直接回复具体意见，比如「角色颜色再暖一点」「镜头再推近些」。","本地方案：在 Claude Code 里让它写一个 bpy 脚本，用 blender -b -P s\
cene.py 无界面渲染 PNG 序列，再用 ffmpeg 合成 MP4；先用低采样、小分辨率出预览，确认后再出正式版。","验收：逐节拍检查关键帧有没有穿模、阴影断开、角色浮空；完整播放一\
遍看节奏和定格顿挫感；满意后再让它提高分辨率或加配乐。"],"pitfalls_zh":["渲染慢、额度消耗大：在没有 GPU 的沙箱里用 Cycles 渲 20 秒成片很耗时，来回多轮工具调\
用也吃额度；建议先用 Eevee 或低采样出小样再出正式版（推断）。","环境各不相同：录屏里模型先检查了工作区的渲染工具，说明能用什么取决于环境；本地复现时 Blender 可执行文件路径和\
版本差异（bpy 接口在大版本间有改动）是脚本报错的常见原因。","接触阴影最容易穿帮：原作过程中模型就专门修过一处阴影瑕疵；黏土角色脚底浮空或阴影断开会立刻破坏微缩实拍感，验收时要重点看接触\
面。","一句话不等于可控：极简请求能出惊喜，但布景和故事都由模型自选，每次结果都不一样；想复用满意的风格，要把那一版的脚本和参数保存下来。"],"time_and_cost":"","scr\
eenshot":"","evidence":[{"url":"https://x.com/alexalbert__/status/2102458348511879448","quote":"\
Opus 5.5 can use Blender to make claymations with just a single prompt"},{"url":"https://x.com/a\
lexalbert__/status/2102458348511879448/video/1","quote":"can you create a stop motion animation \
video (~20 seconds)?"},{"url":"https://x.com/alexalbert__/status/2102466523164274839","quote":"I\
ts better 3D modeling and vision mean you can build an entire world"},{"url":"https://x.com/Vaib\
havSisinty/status/2102667288180826549","quote":"Claymation in Blender, from a single prompt."},{
"url":"https://ohmyopus.com/en/c/claymation","quote":"A Blender claymation from a one-shot promp\
t"}],"see_zh":null,"post_url":null,"status":"verified","verified_at":"2026-09-26","reviewed_at":
"2026-09-27","no":7},{"slug":"claude-eyes-stop-motion-film","title":"A stop-motion animation of \
the world through Claude's eyes","title_zh":"透过 Claude 之眼的定格动画","one_liner_zh":"一句话请 Opus 5.5 拍 \
32 秒定格短片，作者称片中画面与声音都出自模型","category":"video","tags":["定格动画","AI 短片","代码生成视频","开放式命题","音画同步"],"di\
fficulty":3,"wow":4,"author":{"name":"DreW","handle":"@devteamdrew","url":"https://x.com/devteam\
drew"},"platform":"x","published_at":"2026-09-22","source_url":"https://x.com/devteamdrew/status\
/2102436464323661880","demo_url":"","repo_url":"","video_url":"https://x.com/devteamdrew/status/\
2102436464323661880/video/1","model_claim":{"quote":"Made with @claudeai Opus 5.5","url":"https:\
//x.com/devteamdrew/status/2102436464323661880","verified":"confirmed","plan":"unknown","harness\
":"other"},"what_it_is_zh":"独立开发者 DreW 给 Opus 5.5 出了一道开放题：用定格动画表现「透过 Claude 的眼睛看世界」是什么感觉。成品是一段约 \
32 秒、1920×1080、带音轨的短片，作者在跟帖里强调片中所有内容都由 Opus 创作。原帖没有公开源码和制作流程，但它在 Opus 5.5 发布当天就成了传播最广的创意作品之一。","\
why_impressive_zh":["命题极度开放：作者只给了形式（定格动画）和主题（Claude 眼中的世界），没有分镜、画风和配乐要求，模型得自己把「语言模型如何感知世界」这种抽象体验\
变成看得懂的故事和镜头。","定格动画的手工感原本来自逐帧拍摄实物，模型只能用代码去模拟纸片抖动、光线闪烁和低帧率的顿挫，风格还原难度比普通动效高。","作者称视频里的一切都由 Opus 创作\
，而成品带有音轨，意味着画面和声音都不是人工拍摄或剪辑素材拼出来的。","传播数据来自原帖本身：采集时约 9600 赞、4100 次收藏、177 万次浏览，在本站收集的百余条 Opus 5.5\
 作品推文中点赞数排第二，仅次于一个交互式相机镜头模拟。","思路可复现：另有开发者用几乎同一句话在 Claude Code 里重做，四轮对话得到一部 62 秒、8 fps 的剪纸风定格片并公\
开了全部代码，说明这不是偶然出片。"],"tech_stack":[{"name":"Claude Opus 5.5","role":"构思故事、分镜，并生成全部画面与声音（作者原帖确认使用 \
Opus 5.5，具体调用方式未说明）"},{"name":"HTML Canvas + JavaScript","role":"按帧号程序化绘制每一帧定格画面（推断，参照同题复现仓库与作品所\
在的代码动画合集）"},{"name":"Python（numpy / scipy）或 Web Audio","role":"程序化合成配乐与音效，并按帧号对齐（推断：原片带 AAC 音轨，作\
者未说明制作方式）"},{"name":"Playwright + 无头 Chrome","role":"逐帧截取 1920×1080 画面用于导出（推断）"},{"name":"ffmpeg\
","role":"把帧序列编码成 H.264 MP4 并混入音轨（推断：原片为 1080p MP4）"}],"techniques_zh":["只给命题不给方案：用一句开放式主题把叙事、隐喻\
和镜头设计交给模型，往往比人写死分镜更出彩，适合做「模型自画像」类作品。","帧号驱动的确定性渲染：每一帧只由帧号计算、不存中间状态，才能随意跳帧预览、逐帧导出，而且每次渲染结果一致。","用\
带种子的随机数模拟手工感：纸片轮廓按物件编号固定取种子，逐帧抖动按「帧号加编号」取种子，镜头微晃和灯光闪烁同理。","低帧率加容器补帧：画面按 8 fps 左右设计，导出时每帧重复几次填进 2\
4 fps 视频，既能到处播放又保留定格的顿挫。","声音和画面共用同一条时间轴：配乐节拍与帧数成整数比，剪刀声、敲击声等音效挂在对应动作的帧号上，天然音画同步。","分阶段追加需求：先要能在\
浏览器里播放的动画，再加配乐与导出，最后加旁白，每一步都能单独验收、单独回滚。"],"prompt":{"available":false,"original_excerpt":"","sou\
rce_url":"https://x.com/devteamdrew/status/2102440077746188664","language":"en","structure_zh":[
"作者没有公开完整 prompt，只在跟帖里用一句话概括了他向 Opus 5.5 提的请求。","请求规定了形式：做一段定格动画（stop-motion）。","请求规定了主题：以 Claud\
e 的视角呈现它「看」世界是什么感觉。","时长、画风、配乐、技术栈等都没有提，留给模型自己决定；作者另外声明片中一切都由 Opus 创作。"],"reconstructed_zh":"（推断\
）请做一部约 30 秒、16:9、1920×1080 的定格动画短片，主题是「透过 Claude 的眼睛看世界是什么感觉」。先自己构思故事：用 6 到 9 个场景表现一个问题怎样被读进来、被拆\
成词元、在海量文字的联想中被掂量，最后一个词一个词地回答出来，结尾给观众一个温暖的落点。技术要求：1）交付单个 HTML 文件，用 canvas 绘制全部画面，不引用任何外部图片、字体或素材；\
2）按 8 fps 设计，每一帧只由帧号计算，并暴露 window.__film.frame(n) 接口，方便之后逐帧导出；3）用带种子的随机数制造纸片的毛边、逐帧抖动、镜头微晃和灯光闪烁，模\
拟手工定格的质感，但同一帧每次渲染必须完全一致；4）页面带播放、暂停和进度条，方便我逐场景检查。完成后逐场景说明设计意图和用到的动画技巧。确认画面后进入第二步：用 Python（numpy、s\
cipy）程序化合成配乐和音效，节拍与帧数对齐、音效挂在对应动作的帧号上；再写 Playwright 逐帧截图脚本，用 ffmpeg 输出带音轨的 H.264 MP4，并用 ffmpeg 测量\
响度，报告各段音量。"},"how_to_reproduce_zh":["选工具：用 Claude Code（后面要在本机跑 Python、ffmpeg 和浏览器），模型选 Opus 5.5，\
effort 建议 high；只用 claude.ai 的话只能做到浏览器里的 HTML 动画这一步。","第一轮只给主题：粘贴上面的复现提示词，让它产出单个 HTML 文件，在浏览器里打开，\
先检查故事是否讲得通、画风是否像定格、节奏是否拖沓。","追问并修改：让它讲解用了哪些动画技巧，再按观感提具体修改，例如删减场景、调整色板、放慢某个镜头、加一行字幕。","加声音：要求用 Py\
thon 程序化合成配乐和音效，所有提示点按帧号对齐；不想装 Python 也可以让它改用 Web Audio 在页面里实时生成。","导出视频：让它写 Playwright 脚本，通过页面暴\
露的逐帧接口截取 1920×1080 PNG，再用 ffmpeg 编码 H.264（可加 -tune animation）并混入音轨。","可选旁白：让它为每个场景写一句第一人称独白，用本地 \
TTS 生成语音，ffmpeg 做侧链压缩让音乐给人声让路，并附上字幕轨。","验收：从每个场景各抽一帧拼成联系表检查构图，用 ffmpeg 测响度检查音量，最后一定要自己戴耳机完整看一遍，模\
型既听不见声音，也不会逐帧看动态。"],"pitfalls_zh":["模型听不见：音量和人声、背景的比例只能靠 ffmpeg 测量，必须人工试听；同题复现者就记录过海浪场景里人声只比噪声高约\
 7 dB。","音画时间轴要维护两份：HTML 里改了场景时长，Python 配乐脚本里的提示点也要同步改，否则音效会错位。","环境依赖容易卡住：导出脚本常把 Chrome 路径写死，换系\
统要改；本地 TTS 需要 CUDA，flash-attn 在老显卡上装不上，要退回 PyTorch 自带的 attention。","别用录屏导出：屏幕录制会丢帧、帧率漂移，低帧率的顿挫感和\
音画同步都会被破坏，应当逐帧截图后再编码。"],"time_and_cost":"","screenshot":"","evidence":[{"url":"https://x.com/dev\
teamdrew/status/2102436464323661880","quote":"Made with @claudeai Opus 5.5"},{"url":"https://x.c\
om/devteamdrew/status/2102440077746188664","quote":"Everything in the video was created by Opus"
},{"url":"https://github.com/OpenVGLab/awesome-opus5.5-frontend-showcases","quote":"定格动画风短片，作者说视\
频里的一切都由 Opus 5.5 创作。"},{"url":"https://github.com/reeyarn/animation_test","quote":"made end to e\
nd by Claude Opus 5.5 in a single Claude Code session"}],"see_zh":null,"post_url":null,"status":
"verified","verified_at":"2026-09-26","reviewed_at":"2026-09-27","no":8},{"slug":"coanimator-app\
","title":"Claude Opus 5.5 is insanely good — just a couple of prompts. App: CoAnimator","title_\
zh":"几句提示，动画音效一次到位","one_liner_zh":"CoAnimator 创始人只用几句提示，让 Opus 5.5 在自家动画工作室里配齐动画、时间轴和音效环境音","ca\
tegory":"app","tags":["动画","AI 视频生成","音效设计","Agentic 工具","CoAnimator","产品演示"],"difficulty":2,"wo\
w":3,"author":{"name":"rege","handle":"@rege_dev","url":"https://x.com/rege_dev"},"platform":"x"
,"published_at":"2026-09-22","source_url":"https://x.com/rege_dev/status/2102498682931441977","d\
emo_url":"https://coanimator.com/","repo_url":"","video_url":"https://x.com/rege_dev/status/2102\
498682931441977/video/1","model_claim":{"quote":"Claude Opus 5.5 is insanely good — just a coupl\
e of prompts.","url":"https://x.com/rege_dev/status/2102498682931441977","verified":"confirmed",
"plan":"unknown","harness":"unknown"},"what_it_is_zh":"CoAnimator 是一款把 AI agent 接进桌面动画工作室的工具：age\
nt 负责把动画、时间轴和旁白都写成可编辑的项目文件，工作室负责在本机把它们实时渲染成画面。作者 rege 正是这款工具的创始人，他在推文里说自己只给 Claude Opus 5.5 发了几条\
提示词，Opus 5.5 就在 CoAnimator 里同时把动画分镜、时间轴节奏、音效和环境底噪一次性配好，成片效果被他形容为「全部完美。这条视频本身就是他用来展示自家产品配合 Opus \
5.5 能做到什么程度的演示片。","why_impressive_zh":["只用「几条提示词」就让 Opus 5.5 同时搞定动画关键帧、时间轴剪辑节奏、音效设计和环境底噪四件通常分别由动\
画师、剪辑师和音效师各自完成的工作，而不是分开生成后再靠人工拼接。","评判的人不是随便一个用户，而是 CoAnimator 的创始人本人：他是在拿自家工具做验收测试，判断 Opus 5.5 \
驱动这套动画工作室能不能达到可以对外展示的成片质量。","CoAnimator 的机制是让 agent 把动画、时间轴和旁白都写成结构化的可编辑项目文件再本地渲染，这意味着 Opus 5.5 \
是在遵守时间轴对齐、文件格式这些工程约束下完成创作，而不是自由生成一段视频了事。","作者特别提醒「sound on」并强调音效与环境音「全部完美」——声音设计正是以往很多代码生成视频、AI \
生成动画类演示里最容易被忽略或做得敷衍的部分。"],"tech_stack":[{"name":"Claude Opus 5.5","role":"接收提示词、编写动画分镜、时间轴节奏与音效/\
环境音设计的驱动模型"},{"name":"CoAnimator","role":"桌面端「agentic 动画工作室」，支持连接 Claude Code、Codex、Antigravity、\
OpenClaw 等 agent，把它们写的动画、时间轴、旁白保存成可编辑项目文件并在本机渲染成 MP4（推断实现细节，据官方产品页与第三方评测）"},{"name":"WebGL / 开放网\
页技术渲染引擎","role":"CoAnimator 底层用浏览器可绘制的能力（WebGL 等）在真实 GPU 上渲染动画舞台，并支持 3D、动效图形等多种风格（推断，据官方产品页）"},{
"name":".coa 项目文件 + 时间轴系统","role":"存放动画代码、时间轴、旁白轨、音乐层等内容的可编辑工程文件，支持自动闪避（ducking）、音效与节拍点位（推断，据第三方\
评测对 CoAnimator 架构的描述，本条推文是否用到全部特性未知）"},{"name":"连接 CoAnimator 的 Claude Code 等 agent harness","ro\
le":"读写项目文件、调用 CoAnimator 命令行/工作室完成实际创作的执行环境；推文原文未说明具体用的是哪个 harness（推断为 Claude Code 或同类工具）"}],"t\
echniques_zh":["把大模型接到一个「agent 可读写项目文件」的专用工具上，而不是让模型直接吐出成片视频，这样后续还能逐条打开时间轴、音轨微调，不必推倒重来。","让 agen\
t 一次性产出动画、时间轴、音效三种性质不同的输出，靠工具自带的模板与「技能」文件教会它每种视频格式的规范，减少分开多次生成再手动合成的步骤。","「几条提示词」的关键在于清晰、分步骤地下指令\
，而不是塞一段包罗万象的长 prompt；配合本身就有结构化模板的工具，模型更容易一次做对时间轴节奏和音效点位。","发布演示时明确提示「sound on」并让人先看、先听效果，用真实成片而不\
是大段文字描述去证明能力，这种「先看后讲」的展示方式本身也值得在做产品演示时借鉴。"],"prompt":{"available":false,"original_excerpt":"","s\
ource_url":"","language":"","structure_zh":["（推断，原提示词未公开）任务目标：在 CoAnimator 项目里做出一段带完整动画、时间轴节奏、音效\
和环境音的成片，用来当作 CoAnimator 自身的产品演示。","范围要求：一次性覆盖画面动效、剪辑节奏、音效设计、环境底噪四类内容，而不是分别单独生成。","交互方式：作者强调只用了「几\
条」提示词，暗示指令是分步骤、简短下达，而非一段长文档。","验收标准：作者自评「全部完美」，即动画、剪辑、音效、环境音四者在观感上都令人满意，可以直接对外发布。"],"reconstruct\
ed_zh":"（推断，原提示词未公开，以下按 CoAnimator 的项目结构与作者描述反推）你正在 CoAnimator 里做一支为动画工作室本身做宣传的产品演示短片，请分几步、每次用一两\
句话给出指令：第一步，说清楚短片主题（例如展示 CoAnimator 能一次做出动画、时间轴与音效俱全的成片）、目标时长和整体基调（例如轻快、科技感）；第二步，让 agent 先按内置模板搭出\
场景与镜头顺序，写成动画代码和时间轴文件，不要直接给成片视频；第三步，单独追加一条指令，要求补上与画面节拍对齐的音效和贯穿全片、音量低于旁白的环境底噪，并在关键动作点自动闪避；第四步，检查舞台\
预览里的实时渲染，如果某个镜头的节奏或音效不对，只针对那一段追加一句修改指令，不要求整体重来；最后本地渲染导出 MP4，并确认画面、时间轴与声音三者严格对齐、没有杂音或断层。"},"how_t\
o_reproduce_zh":["选工具与模型：下载 CoAnimator（支持 macOS / Windows / Linux），准备一个能读写文件、执行终端命令的 agent（例如 Cl\
aude Code），模型选 Claude Opus 5.5；原推文未说明用的具体 harness，这里是本站按 CoAnimator 官方支持列表给出的建议。","完成连接：按 CoAnim\
ator 官方说明把 Claude Code 之类的 agent 接到工作室里，官方 FAQ 强调这只是一次设置，不需要迁移已有项目。","从模板起步：先打开一个内置模板（例如产品演示、讲解视\
频），让 agent 读取模板自带的「技能」文件，了解该格式默认的时间轴结构、镜头语言和音效规范，而不是从空白项目开始。","分步下达提示词：先说清楚主题和整体风格，再单独追加要求补上时间轴节\
奏、音效和环境音，边看舞台区域的实时渲染边确认效果，这也是原作者「几条提示词」的核心做法。","让输出落在项目文件里：要求 agent 把动画、时间轴、旁白都写成 CoAnimator 的可编\
辑工程文件，而不是直接生成一段成片视频，方便后续逐条微调。","本地渲染导出：CoAnimator 支持不限次数的本地渲染，免费版导出为 720p 带水印；需要 4K、去水印或联网调研等功能，\
需要购买官方标注的一次性授权。","验收：打开渲染出的视频，逐段检查动画帧率是否流畅、音效与画面动作是否严格对齐、环境音有没有杂音或断层，发现问题回到对应时间段追加修改指令而不是整段重做。"]
,"pitfalls_zh":["免费导出是 720p 且带水印：推文演示的清晰度和无水印效果，很可能建立在已经购买官方一次性授权的基础上，照做时预算要把这部分费用算进去。","第三方评测把 \
CoAnimator 定位为早期产品（成熟度评分 7.5/10），提到联网调研模式等功能是付费项、Veo 与 HeyGen 等外部集成尚未上线，实际可用范围可能比宣传页看起来窄。","音效与环\
境音的质量很依赖模板本身预置的「技能」文件；脱离官方模板、完全自由发挥的主题，效果不一定能达到这条推文演示的水准。","推文没有公开具体是哪几条提示词、用的是哪个 agent harness（\
Claude Code、claude.ai 还是 API），复现时的确切指令和运行环境只能参考本页的推断内容。"],"time_and_cost":"作者没有公开这条演示具体花了多少时间或 t\
oken/费用，只强调「a couple of prompts」说明交互轮次很少；可比对的公开数字是 CoAnimator 官方定价：本地渲染不限次数、免费版导出 720p 带水印，一次性 9\
9 美元（第三方评测记录的限时价，原价 249 美元）解锁 4K、去水印与调研模式，这是产品本身的价格而非这条演示的实际花费。","screenshot":"shots/coanimator-\
app.jpg","evidence":[{"url":"https://x.com/rege_dev/status/2102498682931441977","quote":"Claude \
Opus 5.5 is insanely good — just a couple of prompts."},{"url":"https://coanimator.com/","quote"
:"Bring your own Claude Code, Codex, Antigravity or OpenClaw."},{"url":"https://dev.to/1geek/coa\
nimator-review-5714","quote":"Any AI agent that can read files and run shell commands can be the\
 co-animator."}],"see_zh":null,"post_url":null,"status":"verified","verified_at":"2026-09-27","r\
eviewed_at":"2026-09-27","no":9}]
);
