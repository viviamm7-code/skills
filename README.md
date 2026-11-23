# Skills

개인적으로 모은 AI 에이전트 스킬 카탈로그입니다. 각 스킬의 `SKILL.md`와 관련 자료를 함께 보관합니다.

## 구성

```text
skills/
  imported/<skill>/  외부 스킬과 provenance.json
  local/             직접 작성한 스킬
  taste/             관심 있는 스킬
  deprecated/        보관 중인 스킬
```

## 가져온 스킬

| 스킬 | 용도 |
| --- | --- |
| [react-best-practices](skills/imported/react-best-practices) | React와 Next.js 성능 |
| [web-design-guidelines](skills/imported/web-design-guidelines) | 웹 UI, 접근성 및 UX 검토 |
| [composition-patterns](skills/imported/composition-patterns) | React 컴포넌트 구성 |
| [react-view-transitions](skills/imported/react-view-transitions) | React 화면 전환 |
| [react-native-skills](skills/imported/react-native-skills) | React Native 성능과 구조 |
| [vercel-optimize](skills/imported/vercel-optimize) | Vercel 프로젝트 성능과 비용 분석 |
| [agent-browser](skills/imported/agent-browser) | 에이전트용 브라우저 자동화 CLI |
| [aside-browser](skills/imported/aside-browser) | Aside 브라우저 사용 지침 |
| [grill-me](skills/imported/grill-me) | 계획을 질문으로 구체화 |
| [grilling](skills/imported/grilling) | 의사결정을 단계별 질문으로 검토 |

각 폴더의 provenance.json에 원본과 확인한 라이선스를 기록했습니다. 라이선스가 확인되지 않은 항목은 원저작자에게 이용 조건을 확인하세요.

`skills/local/herdr-cli`와 `skills/deprecated/herdr-agent`는 참고 저장소에서 가져왔습니다. `deprecated`는 스킬 목록에서 제외됩니다.

`skills/taste/`에는 [i-have-adhd](skills/taste/i-have-adhd)와 [mongodb-query-optimizer](skills/taste/mongodb-query-optimizer)를 보관합니다.

## 사용

`npm run list`로 카탈로그에서 사용 가능한 스킬을 확인할 수 있습니다. Node.js가 필요합니다.

원하는 스킬 폴더를 에이전트가 읽는 skills 디렉터리에 연결하거나 복사하세요. 예를 들어 프로젝트에서 사용할 때:

```sh
mkdir -p .agents/skills
ln -s /path/to/skills/skills/imported/react-best-practices .agents/skills/react-best-practices
```

참고한 카탈로그 구조: [hmu332233/skills](https://github.com/hmu332233/skills).
